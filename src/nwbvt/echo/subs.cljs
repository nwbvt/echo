(ns nwbvt.echo.subs
  (:require
   [re-frame.core :as rf]))

(rf/reg-sub
 ::window
 (fn [db]
   (:window db)))

(rf/reg-sub
  ::cur
  (fn [db]
    (first (:s db))))

(rf/reg-sub
  ::score
  (fn [db]
    (:score db)))

(rf/reg-sub
  ::lost?
  (fn [db]
    (:lost? db)))

(rf/reg-sub
  ::running?
  (fn [db]
    (:running? db)))

(rf/reg-sub
  ::fade?
  (fn [db]
    (:fade? db)))

(rf/reg-sub
  ::clicked?
  (fn [db]
    (:clicked? db)))

(rf/reg-sub
  ::flash-score?
  (fn [db]
    (:score (:flash db))))

(rf/reg-sub
  ::flash-window?
  (fn [db]
    (:window (:flash db))))

(rf/reg-sub
  ::high-score
  (fn [db]
    (:high-score db)))

(rf/reg-sub
  ::vs-high
  (fn [db]
    (:vs-high db)))
