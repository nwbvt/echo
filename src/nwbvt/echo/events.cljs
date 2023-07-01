(ns nwbvt.echo.events
  (:require
   [re-frame.core :as rf]
   [nwbvt.echo.db :as db]
   [nwbvt.echo.config :as config]
   [nwbvt.echo.game :as game]))

(rf/reg-event-fx
 ::initialize-db
 [(rf/inject-cofx :high-score)]
 (fn [{:keys [high-score]} _]
   {:db (assoc db/default-db
               :high-score high-score)}))

(defn tick
  "Perform a tick"
  [{:keys [s window scored? running? game-id] :as db}
   {:keys [is-echo is-recent options period clip-multiple]}
   game]
  (if (and running? (= game game-id))
    (let [echo? (game/is-echo? s window)
          new-seq (game/advance-sequence s options window
                                         is-echo is-recent clip-multiple)
          lost? (and (not scored?) echo?)]
    {:db (assoc db
                :s new-seq
                :clicked? false
                :scored? false
                :fade? false)
     :fx [[:dispatch-later {:ms 500 :dispatch [::fade]}]
          (if lost?
            [:dispatch [::game-over]]
            [:dispatch-later {:ms period :dispatch [::tick game-id]}]
            )]})))

(rf/reg-event-fx
  ::tick
  (fn [{:keys [db]} [_ game-id]]
    (tick db config/env game-id)))

(defn click
  [{:keys [s window]}]
  {:dispatch [(if (game/is-echo? s window)
                ::score
                ::game-over)]})

(rf/reg-event-fx
  ::click
  (fn [{:keys [db]} event]
    (click db)))

(defn score
  [{:keys [high-score score scored?] :as db}
   {:keys [points-per-level]}]
  (if scored?
    {}
    (let [new-score (inc score)]
      {:db (assoc db
                  :scored? true
                  :score new-score
                  :high-score (max high-score new-score)
                  :vs-high (compare new-score high-score))
       :fx [(if (zero? (mod new-score points-per-level))
              [:dispatch [::advance]])
            [:dispatch [::flash :score]]]})))

(defn save-score-interceptor
  [{score :score}]
  (db/save-score score))

(rf/reg-event-fx
  ::score
  [(rf/after save-score-interceptor)]
  (fn [{db :db} event]
    (score db config/env)))

(defn advance
  [{:keys [window] :as db}]
  {:db (assoc db :window (inc window))
   :dispatch [::flash :window]})

(rf/reg-event-fx
  ::advance
  (fn [{db :db} event]
    (advance db)))

(rf/reg-event-fx
  ::start
  (fn [{:keys [db]} _]
    (let [game-id (random-uuid)]
      {:db (assoc db
                  :s '()
                  :running? true
                  :game-id game-id
                  :lost? false
                  :score 0
                  :vs-high -1
                  :fade? false
                  :window 2)
       :dispatch-later {:ms (:period config/env) :dispatch [::tick game-id]}})))

(rf/reg-event-fx
  ::flash
  (fn [{{:keys [flash] :as db} :db} [_ to-flash]]
    {:db (assoc db :flash
                (assoc flash to-flash true))
     :dispatch-later {:ms 1000 :dispatch [::unflash to-flash]}}  ))

(rf/reg-event-db
  ::unflash
  (fn [{:keys [flash] :as db} [_ to-flash]]
    (assoc db :flash
           (assoc flash to-flash false))))

(rf/reg-event-db
  ::game-over
  (fn [db _]
    (assoc db
           :running? false
           :lost? true)))

(rf/reg-event-db
  ::fade
  (fn [db _]
    (assoc db :fade? true)))


