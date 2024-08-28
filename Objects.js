//object literals

const mySym=Symbol("mykey1")
const JsUser={
    name: "Ansh",
    "full name":"Ansh Sharma",
    [mySym]:"mykey1",
    age:21,
    location:"Mathura",
    email:"ansh@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}
console.log(JsUser)
console.log(JsUser.email)
console.log(JsUser['email'])
console.log(JsUser['full name'])
console.log(JsUser[mySym])
//Object.freeze(JsUser)//Object is freezed to prevent further changes

JsUser.greeting=function(){
    console.log('Hello user')
}
console.log(JsUser.greeting())

JsUser.greeting1=function(){
    console.log(`Hello user, ${this.name}`)
}
console.log(JsUser.greeting1())


const god={
    name:"Krishna",
    festival:"Janmashtami",
    occassion:"Birthday",
    statement:function(){
        return ("Today is "+ this.name+ "'s "+this.occassion+" and we celebrate as "+this.festival);
    }
}
console.log(god.statement())

const user={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstName:"Ansh",
            lastName:"Sharma"
        }
    }
}
console.log(user.fullname.userfullname.firstName)

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
//const obj3={obj1, obj2}
//const obj3=Object.assign({},obj1, obj2)
const obj3={...obj1,...obj2}
console.log(obj3)

const users=[
    {
        id:1,
        email:"h@gmail.com",
    },
    {
        id:2,
        email:"g@gmail.com",
    }
]
console.log(users[1].email)


const person = {};
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";

console.log(Object.keys(person))
console.log(Object.values(person))
console.log(Object.entries(person))
console.log(person.hasOwnProperty('isLoggedIn'))

const course={
    coursename:'JS in Hindi',
    price:'999',
    courseinstructor:'Hitesh'
}
const {courseinstructor:instructor}=course
console.log(instructor)

