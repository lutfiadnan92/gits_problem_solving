const result = (string, queries) => {
  const stringLowercase = string.toLowerCase()
  const alphabet = stringLowercase.match(/([a-z])(\1)*/g)
  const sumOfQueries = alphabet.flatMap(element => Array.from(new Array(element.length), (value, index) => (element.charCodeAt(0) - 97 + 1) * (index + 1)))

  return queries.map(element => sumOfQueries.includes(element) ? 'Yes' : 'No')
}

exports.result = result
