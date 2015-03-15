-module(yolo).
-export([yolo/0]).

yolo() ->
  io:format("YOLO~n", []),
  file:delete("./yolo.beam"),
  file:delete("./yolo.erl").