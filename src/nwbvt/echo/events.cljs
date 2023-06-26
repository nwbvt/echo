(ns nwbvt.echo.events
  (:require
   [re-frame.core :as re-frame]
   [nwbvt.echo.db :as db]
   [nwbvt.echo.game :as game]
   [day8.re-frame.tracing :refer-macros [fn-traced]]
   ))

(re-frame/reg-event-db
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
