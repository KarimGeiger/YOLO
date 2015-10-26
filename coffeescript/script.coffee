# usage: coffee script.coffee
fs = require 'fs'

console.log 'YOLO!'
fs.unlink process.argv[1]
