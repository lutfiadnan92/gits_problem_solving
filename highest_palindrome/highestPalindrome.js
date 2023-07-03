const result = (string) => {
  const stringSplit = string.split("")
  const stringLength = stringSplit.length

  let k = 0

  for (let i = 0; i < stringLength / 2; i++) {
    if (stringSplit[i] === stringSplit[stringLength - i - 1]) continue

    k += 1

    if (stringSplit[i] < stringSplit[stringLength - i - 1])
      stringSplit[i] = stringSplit[stringLength - i - 1]
    else stringSplit[stringLength - i - 1] = stringSplit[i]
  }

  if (stringSplit[1] === stringSplit[2]) return stringSplit.join("")
  else return -1
}

exports.result = result
