(ns nwbvt.echo.views
  (:require
   [re-frame.core :as rf]
   [nwbvt.echo.subs :as subs]
   [nwbvt.echo.events :as events]))

(defn main-panel []
  [:div#main.container.text-center
   [:div.title.row
    [:div.col-12
     [:h1.title.display-1 "Echo"]]]
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
        [:div {:class (cond
                        @(rf/subscribe [::subs/flash-n?]) "flash form-control"
                        :default "unflashed form-control")} @(rf/subscribe [::subs/n])]]
       [:div.col-2
        [:label.col-form-label {:for "score"} "Score"]
        [:div {:class (cond
                        @(rf/subscribe [::subs/flash-score?]) "flash form-control"
                        :default "unflashed form-control")} @(rf/subscribe [::subs/score])]]]
      (let [cur (rf/subscribe [::subs/cur])]
        [:div.row.justify-content-center
         [:div#gameValue.col-2.btn.display-1.btn>h1 {:class (cond
                                                    @(rf/subscribe [::subs/fade?]) "faded"
                                                    :default "new")
                                           :onClick #(rf/dispatch [::events/click])}
          (or @cur "Get Ready!")]])]
     [:button.btn.btn-primary {:onClick #(rf/dispatch [::events/start])} "Start" ]) ])
