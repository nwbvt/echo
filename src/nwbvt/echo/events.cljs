(ns nwbvt.echo.events
  (:require
   [re-frame.core :as rf]
   [nwbvt.echo.db :as db]
   [nwbvt.echo.config :as config]
   [nwbvt.echo.game :as game]
   [day8.re-frame.tracing :refer-macros [fn-traced]]
   ))

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
        advance? (and scored? (zero? (mod new-score points-per-level)))]
    (assoc db
           :s new-seq
           :scored? scored?
           :score new-score
           :lost? (or (and clicked? (not echo?)) (and (not clicked?) echo?))
           :n (if advance? (inc n) n)
           :clicked? false)))

(rf/reg-event-db
  ::tick
  (fn [db _]
    (tick db config/env)))

(rf/reg-event-db
  ::click
  (fn [db _]
    (assoc db
           :clicked? true)))
