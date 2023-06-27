const weightedString = require('./weightedString')
const isBalancedBracket = require('./balancedBracket')

console.log(`Weighted String = ${weightedString.result('dcccbba',[1,3,9,8])}`)

console.log(`Balanced Bracket = ${isBalancedBracket.result('{}')}`)
