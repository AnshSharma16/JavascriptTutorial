//NUMBERS
const score=400
console.log(score)

const balance=new Number(100)
console.log(balance)

console.log(balance.toString().length)

console.log(balance.toFixed(3))

const otherNumber=245.768
console.log(otherNumber.toPrecision(4))
console.log(otherNumber.toPrecision(3))
console.log(otherNumber.toPrecision(2))

const hundreds=100000
console.log(hundreds.toLocaleString('en-IN'))

console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)
console.log(Number.NaN)
console.log(Number.EPSILON)

//MATHS
console.log(Math)
console.log(Math.abs(-12))
console.log(Math.round(5.4))
console.log(Math.ceil(78.2))
console.log(Math.floor(78.2))
console.log(Math.min(7,8,9))
console.log(Math.max(7,8,9))

console.log(Math.random())// displays values between 0 and 1
console.log((Math.random()*10)+1) //to avoid zero in starting

max=20
min=10
console.log(Math.floor(Math.random()*(max-min+1))+min)
