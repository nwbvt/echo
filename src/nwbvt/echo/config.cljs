(ns nwbvt.echo.config)

(def debug?
  ^boolean goog.DEBUG)

(def defaults
  {:is-n 0.2
   :is-recent 0.4
   :options (range 100)
   :points-per-level 10
   :period 2000})

(comment (defstate env
  :start (do
           (merge defaults args))))

(def env
  defaults)
