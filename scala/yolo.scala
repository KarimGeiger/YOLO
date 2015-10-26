# scalac yolo.scala && scala YOLO
# or run yolo.sh
import java.io.File
object YOLO extends App {
	println("YOLO!")
	new File(new Exception().getStackTrace.head.getFileName).delete()
}
