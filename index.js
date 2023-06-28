const weightedString = require('./weightedString')
const isBalancedBracket = require('./balancedBracket')
const highestPalindrome = require('./highestPalindrome')

console.log('the result is pass')
console.log(`Weighted String = ${weightedString.result('dcccbba',[1,3,9,8])}`)
console.log(`Balanced Bracket = ${isBalancedBracket.result('{([])}')}`)
console.log(`Highest Palindrome = ${highestPalindrome.result('3573')}`)

console.log('\nthe result is fail')
console.log(`Weighted String = ${weightedString.result('dcccbba',[10,12,16,17])}`)
console.log(`Balanced Bracket = ${isBalancedBracket.result('{([)]}')}`)
console.log(`Highest Palindrome = ${highestPalindrome.result('35673')}`)