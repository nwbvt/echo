(ns nwbvt.echo.views
  (:require
   [re-frame.core :as rf]
   [nwbvt.echo.subs :as subs]
   [nwbvt.echo.events :as events]
   ))



(defn main-panel []
  [:div#main
   [:h1.title "Echo"]
   (if @(rf/subscribe [::subs/lost?])
     [:div.lost
       [:h2 "Sorry you lose"]
       [:h3 "Final score" @(rf/subscribe [::subs/score])]])
   (if @(rf/subscribe [::subs/running?])
     [:div.game
      (let [score (rf/subscribe [::subs/score])]
        [:div.score>h3 "Score:" @score])
      (let [n (rf/subscribe [::subs/n])]
        [:div.n>h2 "N:" @n])
      (let [cur (rf/subscribe [::subs/cur])]
        [:div.gameValue>h1 @cur])]
     [:button {:onClick #(rf/dispatch [::events/start])} "Start" ]) ])
