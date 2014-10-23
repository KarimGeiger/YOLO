Module Module1

    Sub Main()
        Console.WriteLine("YOLO!")
        Console.ReadLine()
        My.Computer.FileSystem.DeleteFile(Process.GetCurrentProcess().MainModule.FileName)

    End Sub

End Module
