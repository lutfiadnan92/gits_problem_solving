const result = (char) => {
  if (char.length === 0) return false

  const stack = []
  const bracketPairs = {
    ")": "(",
    "}": "{",
    "]": "[",
  }

  for (let i = 0; i < char.length; i++) {
    // 1. input all starting brackets to stack
    // 2. check if the starting bracket has a closing bracket, remove starting bracket element from stack
    // 3. if starting bracket has not a closing bracket, return false/no
    if (["(", "{", "["].includes(char[i])) stack.push(char[i])
    else if (stack[stack.length - 1] === bracketPairs[char[i]]) stack.pop()
    else return "NO"
  }

  // if stack length is not zero, then the brackets is not balanced
  return stack.length ? "NO" : "YES"
}

exports.result = result
