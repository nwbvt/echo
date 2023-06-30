(ns nwbvt.echo.views.echo
  (:require
   [re-frame.core :as rf]
   [nwbvt.echo.subs :as subs]
   [nwbvt.echo.events :as events]
   [nwbvt.echo.views.help :refer [how-to-play]]))

(defn main-panel []
  [:div
   [:nav.navbar {:data-bs-theme "dark"}
    [:div.container-fluid
     [:a.navbar-brand {:href "#"} "Echo"]
     [:button.btn {:data-bs-toggle "modal"
                   :data-bs-target "#helpModal"}
      "How to Play?"]]]
   
   (how-to-play)
   [:div.container.text-center
    [:div.title.row
     [:div.col-12
      [:h1.title.display-1 "Echo"]]] 
    (if @(rf/subscribe [::subs/lost?])
      [:div#lost
       [:div.row
        [:div.col
         [:h1 "Game Over"]]]
       [:div.row
        [:div.col
         [:h2 "Final score: " @(rf/subscribe [::subs/score])]]]
       (case @(rf/subscribe [::subs/vs-high])
         0 [:div.row>div.col>h2 "You have tied your high score!"]
         1 [:div.row>div.col>h2 "You have a new high score!"]
         [:div.row>div.col>h3 "High score: " @(rf/subscribe [::subs/high-score])])])
    (if @(rf/subscribe [::subs/running?])
      [:div#game
       [:div.row.justify-content-center
        [:div.col-2
         [:div [:label.col-form-label {:for "window"} "Window"]]
         [:div {:class (cond
                         @(rf/subscribe [::subs/flash-window?]) "flash form-control"
                         :default "unflashed form-control")} @(rf/subscribe [::subs/window])]]
        [:div.col-2
         [:label.col-form-label {:for "score"} "Score"]
         [:div {:class (cond
                         @(rf/subscribe [::subs/flash-score?]) "flash form-control"
                         :default "unflashed form-control")} @(rf/subscribe [::subs/score])]]]
       (let [cur (rf/subscribe [::subs/cur])]
         (if @cur
           [:div.row.justify-content-center
            [:div#gameValue.col-4.btn.display-1.btn>h1 {:class (cond
                                                                 @(rf/subscribe [::subs/fade?]) "faded"
                                                                 :default "new")
                                                        :onClick #(rf/dispatch [::events/click])}
             @cur]]
           [:h2 "Get Ready!"]))]
      [:button.btn.btn-primary {:onClick #(rf/dispatch [::events/start])} "Start" ])]

   
   
    ])
