#!/usr/bin/env elixir

defmodule Yolo do
  def yolo do
    IO.puts "YOLO"
    File.rm __ENV__.file
  end
end

Yolo.yolo
