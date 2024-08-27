const myArr=[0,1,2,3,4,5,true,'Ansh']
console.log(myArr)
console.log(myArr.includes(6))
console.log(myArr.indexOf(3))
console.log(myArr.indexOf(9))
const newArr=myArr.join()
console.log(newArr)

const Olympians=['Zeus', 'Athena', 'Apollo','Artemis','Poseidon']
console.log(Olympians)
Olympians.push('Hera')
console.log(Olympians)

const myArr2=new Array(1,2,3,4)
console.log(myArr2[2])
console.log(myArr.pop())
myArr2.unshift(6)
console.log(myArr2)

//slice, splice
console.log('A',myArr)
const myn1=myArr.slice(1,4)
console.log(myn1)
console.log(myArr)
const myn2=myArr.splice(1,3)
console.log(myn2)
console.log('B',myArr)
console.log(myArr)

//methods
const states1=['Macedonia','Thracia', 'Athens','Sparta','Thebes','Laconia','Phoenecia']
const states2=['Kosala', 'Magadha', 'Kuru', 'Panchala', 'Sindhu', 'Kashmir','Anga', 'Banga']
//states1.push(states2)
//console.log(states1)
//console.log(states1[7][1])
states=states1.concat(states2)
console.log(states)
const statesc=[...states1, ...states2]
console.log(statesc)

const anotherArr=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_anotherArr=anotherArr.flat(Infinity)
console.log(real_anotherArr)

console.log(Array.isArray('Ansh'))
console.log(Array.from('Ansh'))
console.log(Array.from({name: 'Ansh'}))

let score1=100
let score2=200
let score3=300
let score4=400
console.log(Array.of(score1,score2,score3,score4))
