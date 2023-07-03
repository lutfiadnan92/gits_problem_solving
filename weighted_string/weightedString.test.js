const weightedString = require("./weightedString.services")

test("is string lowercase?", () => {
  const string = "a"
  const result = string.toLowerCase()
  const output = "a"
  expect(result).toBe(output)
})

test("if string is uppercase convert to lowercase", () => {
  const string = "A"
  const result = string.toLowerCase()
  const output = "a"
  expect(result).toBe(output)
})

test("if string is uppercase convert to lowercase", () => {
  const string = "A"
  const result = string.toLowerCase()
  const output = "a"
  expect(result).toBe(output)
})

test("check if the alphabet is not a-z", () => {
  const string = '@'
  const result = weightedString.isAlphabet(string)
  expect(result).toBeFalsy()
})

test("check the alphabet, a-z = 1-26", () => {
  const string = ['abcdefghijklmnopqrstuvwxyz']
  const result = weightedString.sumOfQueries(string)
  const output = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26,
  ]
  expect(result).toEqual(output)
})

test("test_lowercase_string", () => {
  const string = "abcdefghijklmnopqrstuvwxyz"
  const queries = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26,
  ]
  const expected = queries.map(() => "Yes")
  const result = weightedString.result(string, queries)
  expect(result).toEqual(expected)
})

// Tests that the function works wtesth a string containing only lowercase letters
test("test_uppercase_string", () => {
  const string = "Abcd"
  const queries = [1,2,3,4,5]
  const expected = ["Yes","Yes","Yes","Yes","No"]
  const result = weightedString.result(string, queries)
  expect(result).toEqual(expected)
})
