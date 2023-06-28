(ns nwbvt.echo.events
  (:require
   [re-frame.core :as rf]
   [nwbvt.echo.db :as db]
   [nwbvt.echo.config :as config]
   [nwbvt.echo.game :as game]
   [day8.re-frame.tracing :refer-macros [fn-traced]]))

(rf/reg-event-db
 ::initialize-db
 (fn-traced [_ _]
   db/default-db))

(defn tick
  "Perform a tick"
  [{:keys [s n scored? running? game-id] :as db}
   {:keys [is-n is-recent options period]}
   game]
  (if (and running? (= game game-id))
    (let [echo? (game/is-echo? s n)
          new-seq (conj s (game/choose-next s options n is-n is-recent))
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
  [{:keys [s n]}]
  {:dispatch [(if (game/is-echo? s n)
                ::score
                ::game-over)]})

(rf/reg-event-fx
  ::click
  (fn [{:keys [db]} event]
    (click db)))

(defn score
  [{:keys [score] :as db}
   {:keys [points-per-level]}]
  (let [new-score (inc score)]
      {:db (assoc db
                  :scored? true
                  :score (inc score))
       :fx [(if (zero? (mod new-score points-per-level))
              [:dispatch [::advance]])
            [:dispatch [::flash :score]]]}))

(rf/reg-event-fx
  ::score
  (fn [{db :db} event]
    (score db config/env)))

(defn advance
  [{:keys [n] :as db}]
  {:db (assoc db :n (inc n))
   :dispatch [::flash :n]})

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
                  :fade? false
                  :n 2)
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


