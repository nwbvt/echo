(ns nwbvt.echo.views
  (:require
   [re-frame.core :as re-frame]
   [nwbvt.echo.subs :as subs]
   ))

(defn main-panel []
  (let [name (re-frame/subscribe [::subs/name])]
    [:div
     [:h1
      "Hello from " @name]
     ]))
