(ns nwbvt.echo.subs
  (:require
   [re-frame.core :as rf]))

(rf/reg-sub
  ::name
  (fn [db]
    (:name db)))

(rf/reg-sub
 ::n
 (fn [db]
   (:n db)))

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
