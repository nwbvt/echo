(ns nwbvt.echo.game-test
  (:require [cljs.test :refer-macros [deftest testing is]]
            [nwbvt.echo.game :as game]
            [clojure.spec.alpha :as spec]))

(deftest test-choose-next
  (testing "general probabilities"
    (let [options (range 101)
          s '(0 1 2 3 4 5)
          window 2
          results (for [_ (range 100004)] (game/choose-next s options window 0.1 0.6))
          by-result (frequencies results)]
      ;; Expected distribution
      ;; 10% - 1, 10000 times
      ;; 60% - one of 0, 2, 3 or 20% each, 20000 times
      ;; 30% - 0, 4-104, or 0.3% each, 300 times
      (is (spec/int-in-range? 9000 11000 (by-result 1)))
      (is (spec/int-in-range? 19500 21500 (by-result 0)))
      (is (spec/int-in-range? 19500 21500 (by-result 2)))
      (is (spec/int-in-range? 19500 21500 (by-result 3)))
      (is (spec/int-in-range? 200 400 (by-result 4)))
      ))
  (testing "Early sequences"
    (let [options (range 10)
          s '(1)
          window 2
          results (for [_ (range 10000)] (game/choose-next s options window 0.1 0.4))]
      (is (= (set (range 10)) (set results)))))
  (testing "Repeats"
    (let [options (range 100)
          s `(1 1 1 1)
          window 2]
      (is (int? (game/choose-next s options window 0.1 0.4))))))

(deftest test-is-echo?
  (testing "positives"
    (is (true? (game/is-echo? [0 1 0 2 3 4 5] 2)))
    (is (true? (game/is-echo? [0 1 2 0 3 4 5] 3))))
  (testing "negatives"
    (is (false? (game/is-echo? [0 1 2 0 3 4 5] 2)))
    (is (false? (game/is-echo? [0 0 1 2 3 4 5] 2))))
  (testing "edge cases"
    (is (false? (game/is-echo? [] 2)))
    (is (false? (game/is-echo? [0] 2)))
    (is (false? (game/is-echo? [0 0] 2)))
    (is (false? (game/is-echo? [0 1 0] 3)))
    (is (true? (game/is-echo? [0 1 0] 2)))))
