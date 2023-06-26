(ns nwbvt.echo.config)

(def debug?
  ^boolean goog.DEBUG)

(def defaults
  {:is-n? 0.1
   :is-recent? 0.4
   :options (range 10)
   :points-per-level 10})

(comment (defstate env
  :start (do
           (merge defaults args))))

(def env
  defaults)
