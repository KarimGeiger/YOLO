Dim fso
Set fso = CreateObject("Scripting.FileSystemObject")
MsgBox("YOLO")
fso.DeleteFile(WScript.ScriptFullName)
