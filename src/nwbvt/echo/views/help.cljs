(ns nwbvt.echo.views.help)

(defn how-to-play []
  [:div#helpModal.modal
    {:tabIndex -1
     :aria-labelledby "Help"
     :aria-hidden true}
    [:div.modal-dialog>div.modal-content
     [:div.modal-header
      [:h1 "How to Play"]
      [:button.btn-close {:type "button"
                          :data-bs-dismiss "modal"
                          :aria-label "Close"}]]
     [:div.modal-body.help-text
      [:div.container.text-left
       [:p "Echo is based on the classic " [:a {:href "https://en.wikipedia.org/wiki/N-back" :target "_blank"} "N-Back"] " cognitive performance task."]
       [:p "You will be presented with a sequence of characters. You will also have a window size, starting at 2."
        "Your job will be to remember the characters in that window and if the current character is the one at the start of that window, click on it."]
       [:p "For instance if the window is 2 and you get the following sequence..."]
       [:ul [:li.list-inline-item "A"] [:li.list-inline-item "C"] [:li.list-inline-item "D"] [:li.list-inline-item "C"]]
       [:p "You would click on the second " [:i "C"] "."]
       [:p "Each correct echo identification earns you a point. If you either miss and echo or falsely identify one you lose the game."]
       [:p "After you get enough points the window size will increase. So watch out!"]]]
     [:div.modal-footer
      [:button.btn.btn-primary {:data-bs-dismiss "modal"} "Close"]]]
    ])
