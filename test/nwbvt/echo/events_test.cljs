(ns nwbvt.echo.events-test
  (:require [cljs.test :refer-macros [deftest testing is]]
            [nwbvt.echo.events :refer [tick]]))

(deftest test-tick
  (let [config {:is-n? 0.1
                :is-recent? 0.4
                :options (range 10)
                :points-per-level 10}
        base-state {:s '(0 1 2 3 4)
                    :n 2
                    :clicked? false
                    :score 3
                    :lost? false}]
    (testing "No click, no echo"
      (let [next-state (tick base-state config)]
        (is (= '(0 1 2 3 4) (rest (:s next-state))))
        (is (= {:n 2 :clicked? false :score 3 :lost? false}
               (select-keys next-state
                            [:n :clicked? :score :lost?])))))
    (testing "Clicked, no echo"
      (let [next-state (tick
                         (assoc base-state :clicked? true)
                         config)]
        (is (= '(0 1 2 3 4) (rest (:s next-state))))
        (is (= {:n 2 :clicked? false :score 3 :lost? true}
               (select-keys next-state
                            [:n :clicked? :score :lost?])))))
    (testing "No click, echo"
      (let [next-state (tick
                       (assoc base-state :s '(0 1 0 2 3 4))
                       config)]
      (is (= '(0 1 0 2 3 4) (rest (:s next-state))))
      (is (= {:n 2 :clicked? false :score 3 :lost? true}
             (select-keys next-state
                          [:n :clicked? :score :lost?])))))
    (testing "Clicked, echo"
      (let [next-state (tick
                         (assoc base-state
                                :s '(0 1 0 2 3 4)
                                :clicked? true)
                         config)]
        (is (= '(0 1 0 2 3 4) (rest (:s next-state))))
        (is (= {:n 2 :clicked? false :score 4 :lost? false :scored? true}
               (select-keys next-state
                            [:n :clicked? :score :lost? :scored?])))))
    (testing "Advanced"
      (let [next-state (tick
                         (assoc base-state
                                :s '(0 1 0 2 3 4)
                                :clicked? true
                                :score 9)
                         config)]
        (is (= '(0 1 0 2 3 4) (rest (:s next-state))))
        (is (= {:n 3 :clicked? false :score 10 :lost? false :scored? true}
               (select-keys next-state
                            [:n :clicked? :score :lost? :scored?]))))) 
    )
  )
