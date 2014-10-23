using System;
using System.IO;
using System.Diagnostics;

public class Yolo {
    public static void Main(String[] args) {
        Console.WriteLine("YOLO!");
        File.Delete(Process.GetCurrentProcess().MainModule.FileName);
    }
}
