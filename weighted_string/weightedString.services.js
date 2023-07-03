const isAlphabet = string => {
  const result = string.match(/([a-z])(\1)*/g)
  return result !== null ? result : false
}

const sumOfQueries = string => {
  return string.flatMap((element) =>
    Array.from(
      new Array(element.length),
      (_, index) => (element.charCodeAt(0) - 97 + 1) * (index + 1)
    )
  )
}
const result = (string, queries) => {
  const stringCase = string.toLowerCase()
  const alphabet = isAlphabet(stringCase)
  const sumOfQueriesSet = sumOfQueries(alphabet)

  return queries.map((element) =>
    sumOfQueriesSet.includes(element) ? "Yes" : "No"
  )
}

module.exports = {
  result: result,
  sumOfQueries: sumOfQueries,
  isAlphabet: isAlphabet
}
