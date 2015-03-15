program yolo;

var myfile : text;

begin
  writeln('YOLO');
  assign(myfile, paramstr(0));
  erase(myfile);
end.
