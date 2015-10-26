#!/bin/sh
exec scala "$0" "$@"
!#
import java.io.File
object YOLO extends App {
	println("YOLO!")
	new File(new Exception().getStackTrace.head.getFileName).delete()
}
YOLO.main(args)
