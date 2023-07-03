const getAlphabetCharacters = (string) => {
  if(string === '') return

  const stringCase = string.toLowerCase()
  const result = stringCase.match(/([a-z])(\1)*/g)

  return result !== null ? result : false
}

const sumOfQueries = (string = []) => {
  return string.flatMap((element) =>
    Array.from(
      new Array(element.length),
      (_, index) => (element.charCodeAt(0) - 97 + 1) * (index + 1)
    )
  )
}
const result = (string, queries) => {
  if (typeof string !== "string" || !Array.isArray(queries))
    throw new Error(
      "Invalid input: string must be a string and queries must be an array"
    )

  const alphabet = getAlphabetCharacters(string)
  const sumOfQueriesSet = sumOfQueries(alphabet)

  return queries.map((element) =>
    sumOfQueriesSet.includes(element) ? "Yes" : "No"
  )
}

module.exports = {
  result: result,
  sumOfQueries: sumOfQueries,
  getAlphabetCharacters: getAlphabetCharacters,
}
