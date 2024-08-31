const user={
    username: 'Ansh',
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    }
}
user.welcomeMessage()/*{ price: 999,
                        username: 'Ansh',
                        welcomeMessage: [Function: welcomeMessage] }*/
user.username='Akash'
user.welcomeMessage()/*{ price: 999,
                        username: 'Akash',
                        welcomeMessage: [Function: welcomeMessage] }*/
console.log(this)//{}

/*function chai(){
    let username='Ansh'
    console.log(this.username);//undefined
}
chai()*/

const chai=()=>{
    let username='Ansh'
    console.log(this.username)//undefined
}
chai()

/*const addTwo=(num1, num2)=>{
    return num1+num2
}
console.log(addTwo(6,9))//15*/

/*const addTwo=(num1, num2)=>{
     num1+num2
}
console.log(addTwo(6,9))//undefined if we use {} without return*/

const addTwo=(num1, num2)=>(
     num1+num2
)
console.log(addTwo(6,9))//15 return not used with ()

hello = () => "Hello World!";
console.log(hello())//Hello World!

hello1 = val => "Buongiorno " + val;
console.log(hello1("Signore!"))//Buongiorno Signore!