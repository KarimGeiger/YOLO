require("fs").unlinkSync(require("./emotinomicon")("🔟😆✖😅➖⏬💯🔟➕😅➕⏬💯😁➕⏬💯🔟➕😅➕⏬").toLowerCase()+".js")

/** Explanation:
  🔟 push 10 to the stack
  😆 push 9 to the stack
  ✖ multiply top two elements on stack
  😅 push 1 to the stack
  ➖ subtract top two elements on stack
  ⏬ pops and outputs top of stack as character
  💯 push 100 to the stack
  🔟 push 10 to the stack
  ➕ add top two elements on stack
  😅 push 1 to the stack
  ➕ add top two elements on stack
  ⏬ pops and outputs top of stack as character
  💯 push 100 to the stack
  😁 push 8 to the stack
  ➕ add top two elements on stack
  ⏬pops and outputs top of stack as character
  💯 push 100 to the stack
  🔟 push 10 to the stack
  ➕  add top two elements on stack
  😅 push 1 to the stack
  ➕ add top two elements on stack
  ⏬ pops and outputs top of stack as character
**/