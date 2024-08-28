/*var c=300
if(true){
    let a=10
    const b=20
    c=30
}
console.log(c)//30
console.log(a)//a is not defined
console.log(b)//b is not defined*/

/*let c=300
if(true){
    let a=10
    const b=20
    c=30
}
console.log(c)//30
console.log(a)//a is not defined
console.log(b)//b is not defined*/

/*let c=300
if(true){
    let a=10
    const b=20
    let c=30
}
console.log(c)//300
console.log(a)//a is not defined
console.log(b)//b is not defined*/

/*function one(){
    const username='Ansh'

    function two(){
        const website='YouTube'
        console.log(username)
    }
    //console.log(website)//not defined, as it's scope is two()
    //two()// if we don't call this, one() won't automatically call two()
}
one()*/

if(true){
    const Username='Ansh'
    if(Username==='Ansh'){
        const website='YouTube'
        console.log(Username+website)//AnshYouTube
    }
    //console.log(website)//website is not defined outside scope
}
//console.log(Username)//Username is not defined outside scope


/*function addone(num){
    return num+1
}
addone(5)

const addTwo=function(num){
    return num+2
}
addTwo(5)*/ //Okay, all right

/*addone(5)
function addone(num){
    return num+1
}*/  //No error

/*addTwo(5)//Cannot access addTwo before initialization
const addTwo=function(num){
    return num+2
}
*/
