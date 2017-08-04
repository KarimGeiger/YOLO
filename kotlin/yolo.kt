import java.io.File

fun main(args: Array<String>) {
    println("YOLO!")
    File(Yolo::class.java.protectionDomain.codeSource.location.toURI().path).delete()
}

class Yolo