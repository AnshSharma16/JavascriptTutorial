function sayMyName(){
    console.log("A")
    console.log("N")
    console.log("S")
    console.log("H")
 }

 sayMyName()

 function addTwoNumbers(number1, number2){
    result=number1+number2
    console.log(result)
 }

 addTwoNumbers(3,4)
 addTwoNumbers(3,'4')
 addTwoNumbers(3,'a')
 addTwoNumbers(3,null)

 function loginUserMessage(username){
    return `${username} just logged in`
 }

loginUserMessage("Ansh")//It won't print without console.log()
console.log(loginUserMessage("Ansh"))
console.log(loginUserMessage()) //undefined just logged in   

function loginUserMessage1(username){
    if(username===undefined){
        console.log('Please enter the username')
        return
    }
    return `${username} just logged in`
 }

loginUserMessage1("Ansh")//It won't print without console.log()
console.log(loginUserMessage1("Ansh"))
console.log(loginUserMessage1())
