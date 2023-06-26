(ns nwbvt.echo.config)

(def debug?
  ^boolean goog.DEBUG)

(def defaults
  {:is-n 0.25
   :is-recent 0.25
   :options (range 100)
   :points-per-level 5
   :period 2000})

(comment (defstate env
  :start (do
           (merge defaults args))))

(def env
  defaults)
