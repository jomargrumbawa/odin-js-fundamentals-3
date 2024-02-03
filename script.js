function add7(num) {
  return num + 7;
}

function multiply(a, b) {
  return a * b;
}

function capitalize(str) {
  return str[0].toUpperCase() + str.substring(1).toLowerCase();
}

function lastLetter(str) {
  return str[str.length - 1]
}

console.log(add7(4))
console.log(multiply(24, 8))
console.log(capitalize('HeLLo, WoRLd!'))
console.log(lastLetter('abcd'))