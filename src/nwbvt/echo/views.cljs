(ns nwbvt.echo.views
  (:require
   [re-frame.core :as rf]
   [nwbvt.echo.subs :as subs]
   [nwbvt.echo.events :as events]))

(defn main-panel []
  [:div#main.container.text-center
   [:h1.title "Echo"]
   (if @(rf/subscribe [::subs/lost?])
     [:div#lost
      [:div.row
       [:div.col
        [:h2 "Sorry you lose"]]]  
      [:div.row
       [:div.col
        [:h3 "Final score: " @(rf/subscribe [::subs/score])]]]])
   (if @(rf/subscribe [::subs/running?])
     [:div#game
      [:div.row.justify-content-center
       [:div.col-2
        [:div [:label.col-form-label {:for "n"} "N"]]
        (let [n (rf/subscribe [::subs/n])]
          [:div {:class (cond
                          @(rf/subscribe [::subs/flash-n?]) "flash form-control"
                          :default "form-control")} @n])]
       [:div.col-2
        [:label.col-form-label {:for "score"} "Score"]
        (let [score (rf/subscribe [::subs/score])]
          [:div {:class (cond
                          @(rf/subscribe [::subs/flash-score?]) "flash form-control"
                          :default "form-control")} @score])]]
      (let [cur (rf/subscribe [::subs/cur])]
        [:div.row.justify-content-center
         [:div#gameValue.col-6.btn.btn>h1 {:class (cond
                                                    @(rf/subscribe [::subs/fade?]) "faded"
                                                    :default "new")
                                           :onClick #(rf/dispatch [::events/click])}
          (or @cur "Get Ready!")]])]
     [:button.btn.btn-primary {:onClick #(rf/dispatch [::events/start])} "Start" ]) ])
