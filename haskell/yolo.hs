import System.Environment
import System.Directory

main = do
   file <- getProgName
   print "YOLO"
   removeFile file
