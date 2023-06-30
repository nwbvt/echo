(ns nwbvt.echo.game)

(defn choose-next
  "Choose the next option given sequence s, nback window,
  and probabilities to pick the echo or one of the most choice"
  [s options window is-echo is-recent]
  (if (< window (count s))
    (let [r (rand 1)
          nback (nth s (dec window))
          recent (remove #(= % nback) s)]
      (cond
        (<= r is-echo) nback
        (and (<= r (+ is-echo is-recent)) (< 0 (count recent))) (rand-nth recent)
        :default (rand-nth (remove #(= % nback) options))))
    (rand-nth options)))

(defn advance-sequence
  "Advance the sequence to the next turn"
  [s options window is-echo is-recent clip-multiple]
  (conj (take (* window clip-multiple) s)
        (choose-next s options window is-echo is-recent)))

(defn is-echo?
  "Determines whether or not the "
  [s window]
  (if (>= window (count s))
    false
    (= (first s) (nth s window)) ))

