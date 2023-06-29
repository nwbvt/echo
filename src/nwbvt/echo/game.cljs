(ns nwbvt.echo.game)

(defn choose-next
  "Choose the next option given sequence s, nback n,
  and probabilities to pick in or one of the most recent 2*n"
  [s options window is-echo recent]
  (if (< window (count s))
    (let [r (rand 1)
          nback (nth s (dec window))
          near (remove #(= % nback) (take (* 2 window) s))]
      (cond
        (<= r is-echo) nback
        (and (<= r (+ is-echo recent)) (< 0 (count near))) (rand-nth near)
        :default (rand-nth (remove #(= % nback) options))))
    (rand-nth options)))

(defn is-echo?
  "Determines whether or not the "
  [s window]
  (if (>= window (count s))
    false
    (= (first s) (nth s window)) ))

