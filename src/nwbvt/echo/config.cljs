(ns nwbvt.echo.config)

(def debug?
  ^boolean goog.DEBUG)

(def defaults
  {:is-echo 0.25
   :is-recent 0.25
   :options '(A B C D E F G H I J K L M N O P Q R S T U V W X Y Z)
   :points-per-level 10
   :period 2000})

(def env
  defaults)
