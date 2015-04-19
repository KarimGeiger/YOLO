with Ada.Text_IO; use Ada.Text_IO;
with Ada.Command_line; use Ada.Command_Line;
with Ada.Directories; use Ada.Directories;

procedure Yolo is
begin
  Put_Line("YOLO");
  Delete_File(Command_Name);
end Yolo;
