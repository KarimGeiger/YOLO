// Compile with `xcrun -sdk macosx swiftc -o yolo yolo.swift`
import Foundation

print("YOLO")
try FileManager.default.removeItem(atPath: CommandLine.arguments[0])
