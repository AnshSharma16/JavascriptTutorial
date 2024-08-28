/*function calculateCartPrice(num1){
    return num1
}
console.log(calculateCartPrice(200))//200  
*/

/*function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200, 400, 600))//[200, 400, 600]
*/

function calculateCartPrice(val1, val2,...num1){
    return num1
}
console.log(calculateCartPrice(200, 400, 600, 1000))

const user={
    username: 'Ansh',
    price:199,
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
handleObject(user)

const myNewArray=[200, 300, 400]
function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([100, 200, 300]))