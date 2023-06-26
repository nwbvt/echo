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
  [{:keys [s n clicked? score] :as db} 
   {:keys [is-n is-recent options points-per-level]}]
  (let [echo? (game/is-echo? s n)
        scored? (and clicked? echo?)
        new-seq (conj s (game/choose-next s options n is-n is-recent))
        new-score (if scored? (inc score) score)
        advance? (and scored? (zero? (mod new-score points-per-level)))
        lost? (or (and clicked? (not echo?)) (and (not clicked?) echo?))]
    {:db (assoc db
                :s new-seq
                :scored? scored?
                :score new-score
                :lost? lost?
                :running? (not lost?)
                :n (if advance? (inc n) n)
                :clicked? false
                :fade? false)
     :next-turn (not lost?)}))

(rf/reg-event-fx
  ::tick
  (fn [{:keys [db]} event]
    (tick db config/env)))

(rf/reg-event-db
  ::click
  (fn [db _]
    (assoc db
           :clicked? true)))

(rf/reg-event-fx
  ::start
  (fn [{:keys [db]} _]
    {:db (assoc db
                :s '()
                :running? true
                :lost? false
                :score 0
                :n 2)
     :next-turn true}))

(rf/reg-event-db
  ::fade
  (fn [db _]
    (assoc db :fade? true)))

(rf/reg-fx
  :next-turn
  (fn [continue?]
    (if continue?
      (do
        (js/setTimeout #(rf/dispatch [::fade]) 500)
        (js/setTimeout #(rf/dispatch [::tick]) (:period config/env))))))
