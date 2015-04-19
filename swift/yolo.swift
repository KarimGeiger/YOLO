//compile with `xcrun -sdk macosx swiftc -o yolo yolo.swift`
import Foundation

println("YOLO")
NSFileManager.defaultManager().removeItemAtPath(Process.arguments[0], error: nil)
