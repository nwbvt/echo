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
      [:div.row.justify-content-around
       [:div.col-2
        [:label.col-form-label {:for "n"} "N"]
        (let [n (rf/subscribe [::subs/n])]
          [:input#n.form-control {:readonly true :value @n}])]
       [:div.col-2
        [:label.col-form-label {:for "score"} "Score"]
        (let [score (rf/subscribe [::subs/score])]
          [:input#score.form-control {:readonly true :value @score}])]]
      (let [cur (rf/subscribe [::subs/cur])]
        [:div.row.justify-content-center
         [:div#gameValue.col-6.btn.btn>h1 {:class (cond
                                                    @(rf/subscribe [::subs/fade?]) "faded"
                                                    :default "new")
                                           :onClick #(rf/dispatch [::events/click])}
          [:h1 (or @cur "Get Ready!")]]])]
     [:button.btn.btn-primary {:onClick #(rf/dispatch [::events/start])} "Start" ]) ])
