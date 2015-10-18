(require '[clojure.java.io :as io])
(println "YOLO!")
(io/delete-file (.getCanonicalPath (java.io.File. *file*)))
