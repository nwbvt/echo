(ns nwbvt.echo.game)

(defn choose-next
  "Choose the next option given sequence s, nback n,
  and probabilities to pick in or one of the most recent 2*n"
  [s options n is-n recent]
  (if (< n (count s))
    (let [r (rand 1)
          nback (nth s (dec n))]
      (cond
        (<= r is-n) nback
        (<= r (+ is-n recent)) (rand-nth (remove #(= % nback) (take (dec (* 2 n)) s)))
        :default (rand-nth (remove #(= % nback) options))))
    (rand-nth options)))

(defn is-echo?
  "Determines whether or not the "
  [s n]
  (if (>= n (count s))
    false
    (= (first s) (nth s n)) ))

