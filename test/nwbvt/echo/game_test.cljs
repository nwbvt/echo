(ns nwbvt.echo.game-test
  (:require [cljs.test :refer-macros [deftest testing is]]
            [nwbvt.echo.game :as game]
            [clojure.spec.alpha :as spec]))

(deftest test-choose-next
  (testing "general probabilities"
    (let [options (range 101)
          s '(0 1 2 3 4 5)
          n 2
          results (for [_ (range 100000)] (game/choose-next s options n 0.1 0.4))
          by-result (frequencies results)]
      ;; Expected distribution
      ;; 10% - 1, 10000 times
      ;; 40% - one of 0, 2 or 20% each, 20000 times
      ;; 50% - 0, 2-100, or 0.5% each, 500 times
      (is (spec/int-in-range? 9000 11000 (by-result 1)))
      (is (spec/int-in-range? 19500 21500 (by-result 0)))
      (is (spec/int-in-range? 19500 21500 (by-result 2)))))
  (testing "Early sequences"
    (let [options (range 10)
          s '(1)
          n 2
          results (for [_ (range 10000)] (game/choose-next s options n 0.1 0.4))]
      (is (= (set (range 10)) (set results))))))

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
