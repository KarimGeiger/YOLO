package main

import (
    "fmt"
    "os"
)

func main() {
    fmt.Printf("YOLO\n")
    os.Remove(os.Args[0])
}
