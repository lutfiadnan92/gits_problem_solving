const weightedString = require("./weightedString.services")

describe("weighted of string", () => {
  test("string must be lowercase", () => {
    const string = "ABC"
    const result = string.toLowerCase()
    const output = "abc"
    expect(result).toBe(output)
  })

  test("string must be lowercase and group if it contains the same string", () => {
    const string = "abbccc"
    const result = weightedString.getAlphabetCharacters(string)
    const output = ["a", "bb", "ccc"]
    expect(result).toEqual(output)
  })

  test("if the string is non-alphabethic, return false", () => {
    const string = "@!$#"
    const result = weightedString.getAlphabetCharacters(string)
    expect(result).toBeFalsy()
  })

  test("if empty string", () => {
    const string = ""
    const result = weightedString.getAlphabetCharacters(string)
    expect(result).toBeUndefined()
  })

  test("return the value of each character", () => {
    const string = ["abcdefghijklmnopqrstuvwxyz"]
    const result = weightedString.sumOfQueries(string)
    const output = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26,
    ]
    expect(result).toEqual(output)
  })

  test("if string is lowercase then return yes", () => {
    const string = "abcdefghijklmnopqrstuvwxyz"
    const queries = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26,
    ]
    const expected = queries.map(() => "Yes")
    const result = weightedString.result(string, queries)
    expect(result).toEqual(expected)
  })

  test("if string is uppercase, convert to lowercase and return yes", () => {
    const string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const queries = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26,
    ]
    const expected = queries.map(() => "Yes")
    const result = weightedString.result(string, queries)
    expect(result).toEqual(expected)
  })

  test("return No, if queries not match", () => {
    const string = "abc"
    const queries = [4, 5, 6]
    const expected = queries.map(() => "No")
    const result = weightedString.result(string, queries)
    expect(result).toEqual(expected)
  })

  test("if parameter input is empty or not string and array", () => {
    const string = 1
    const queries = "1"
    const expectedError =
      "Invalid input: string must be a string and queries must be an array"
    expect(weightedString.result).toThrow(expectedError)
    expect(() => weightedString.result(string, queries)).toThrow(expectedError)
  })
})
