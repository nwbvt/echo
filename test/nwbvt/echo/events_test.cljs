(ns nwbvt.echo.events-test
  (:require [cljs.test :refer-macros [deftest testing is]]
            [nwbvt.echo.events :as events]))

(deftest test-tick
  (let [game-id #uuid "00000000-0000-0000-1337-000000000000"
        config {:is-n? 0.1
                :is-recent? 0.4
                :options (range 10)
                :points-per-level 10
                :period 3000}
        echo-state {:s '(0 1 0 2 3 4)
                    :running? true
                    :game-id game-id
                    :n 2}
        no-echo-state {:s '(0 1 2 3 4)
                       :running? true
                       :game-id game-id
                       :n 2}]
    (testing "No echo"
      (let [next-state (events/tick no-echo-state config game-id)]
        (is (= '(0 1 2 3 4)
               (-> next-state
                   :db
                   :s
                   rest)))
        (is (= [[:dispatch-later {:ms 500 :dispatch [::events/fade]}]
                [:dispatch-later {:ms 3000 :dispatch [::events/tick game-id]}]]
               (:fx next-state)))))
    (testing "score, echo"
      (let [next-state (events/tick (assoc echo-state :scored? true) config game-id)]
        (is (= '(0 1 0 2 3 4)
               (-> next-state
                   :db
                   :s
                   rest)))
        (is (= [[:dispatch-later {:ms 500 :dispatch [::events/fade]}]
                [:dispatch-later {:ms 3000 :dispatch [::events/tick game-id]}]]
               (:fx next-state)))))
    (testing "no score, echo"
      (let [next-state (events/tick (assoc echo-state :scored? false) config game-id)]
        (is (= [[:dispatch-later {:ms 500 :dispatch [::events/fade]}]
                [:dispatch [::events/game-over]]]
               (:fx next-state)))))
    (testing "old game"
      (let [next-state (events/tick (assoc echo-state :scored? false) config
                                    #uuid "12345678-0000-0000-0000-00000000000")]
        (is (= nil next-state))))
    ))

(deftest test-click
  (let [config {:is-n? 0.1
                :is-recent? 0.4
                :options (range 10)
                :points-per-level 10}
        base-state {:n 2
                    :score 3}]
    (testing "After echo"
      (is (= (events/click (assoc base-state :s '(0 1 0 2 3 4)))
             {:dispatch [::events/score]})))
    (testing "After no echo"
      (is (= (events/click (assoc base-state :s '(0 1 2 3 4)))
             {:dispatch [::events/game-over]})))))
