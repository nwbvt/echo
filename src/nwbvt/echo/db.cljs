(ns nwbvt.echo.db
  (:require [re-frame.core :as rf]))

(def default-db
  {:running? false
   })

(def local-store-key "nwbvt.echo.high-score")

(defn high-score
  []
  (js/parseInt
    (or (.getItem js/localStorage
              local-store-key) 0)))

(defn save-score
  [score]
  (let [current-high (high-score)]
    (if (> score current-high)
      (.setItem js/localStorage
                local-store-key
                score))))

(rf/reg-cofx
  :high-score
  (fn [cofx _]
    (assoc cofx
           :high-score
           (high-score))))
