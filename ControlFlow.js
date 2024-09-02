//if-else//

                
//false values: false, 0, -0, BigInt 0n, "", null, undefined, NaN
//true values: "0", 'false', " ", [], {}, function(){}

/*const score=200
if(score>100){
    const power='fly'
    console.log(`User power: ${power}`)
}
//console.log(`User power: ${power}`)//power is not defined
*/

const balance=1000
if(balance>500) console.log("test"),console.log("test2")
//not a readable practice

if(balance<500){
    console.log("less than 500")
}
else if(balance<750){
    console.log("less than 750")
}
else if(balance<900){
    console.log("less than 900")
}
else{
    console.log("less than 1200")
}

const userloggedIn=true
const debitCard=true
const loggedInFromGoogle=false
const loggedInFromEmail=true

if(userloggedIn && debitCard){
    console.log("Allow to buy course")
}
if(loggedInFromGoogle ||loggedInFromEmail ){
    console.log("Allow to buy course")
}

//To check object length
const emptyObj={}
if(Object.keys(emptyObj).length===0){
    console.log("Object is empty")
}

//To check array length
useremail=[]
if(useremail.length===0){
    console.log("Array is empty")
}

                //switch-case//
const month=3
switch(month){
    case 1:
        console.log("January")
        break
    case 2:
        console.log("February")
        break
    case 3:
        console.log("March")
        break

    default:
        console.log("Enter valid value from 1 to 12")
        break
}


                //Nullish Coalescing Operator(??): null undefined//
/*let val1
val1=5??10
//val1=null??10
console.log(val1)//5
*/

/*let val1
val1=null??10
console.log(val1)//10
*/

/*let val1
val1=null??undefined
console.log(val1)//undefined
*/

/*let val1
val1=undefined??15
console.log(val1)//15
*/

let val1
val1=null??undefined??19
console.log(val1)//19

                //Ternary Operator//
const iceTeaPrice=100
iceTeaPrice<=80? console.log("less than or equal to 80"): console.log("More than 80")
