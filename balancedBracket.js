const result = char => {
  if(char.length === 0)
    return false

  const stack = []
  const bracketPairs = {
    '(': ')',
    '{': '}',
    '[': ']'
  }

  for (let i = 0; i < char.length; i++) {
    // check if the character has the brackets
    if (['(', '{', '['].includes(char[i])) {
      stack.push(char[i])
    } else {
      const lastStack = stack.pop()
      if (char[i] !== bracketPairs[lastStack])
        return 'NO' // return false/no, if the brackets is not same, so this meaning, the brackets is not balanced
    }
  }

  // if stack length is not zero, then the brackets is not balanced
  return stack.length === 0 ? 'YES' : 'NO'
}

exports.result = result
