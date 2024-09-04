//filter
const coding=['js','ruby','java','python','cpp']
const values=coding.forEach((item)=>{
    console.log(item)
})

const mynums=[1,2 ,3,4,5]
const newnums=mynums.filter((num)=>num>4)
console.log(newnums)

const newnums1=mynums.filter((num)=>{return num<4})
console.log(newnums1)

const nums=[]
mynums.forEach((num)=>{
    if(num<4){
        nums.push(num)
    }
})
console.log(nums)

const books=[
    { title: 'Book One', genre: 'Fiction', publish: 1981},
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992},
    { title: 'Book Three', genre: 'History', publish: 1999},
]
const userBooks=books.filter((bk)=>bk.genre==='History')
const userBooks1=books.filter((bk)=>{ return bk.publish >= 1981})
console.log(userBooks)
console.log(userBooks1)


//map
const mynum1=[1,2,3,4,5,6,7,8,9,0]
const newnum1=mynum1.map((num)=>{return num+10})
const newnum2=mynum1.map((num)=>num*10)
                    .map((num)=>num+1)
                    .filter((num)=>num>=40)
console.log(newnum1)
console.log(newnum2)


//reduce
const statement=mynum1.reduce(function(acc, currval){
    console.log(`acc: ${acc} and currval: ${currval}`) 
    return acc+currval
}, 0)
console.log(statement)
const total=mynum1.reduce((acc, currval)=>acc+currval, 0)
console.log(total)

const shoppingCart=[
    {
        itemName:'js course',
        price: 2999
    },
    {
        itemName:'python course',
        price: 2999
    },
    {
        itemName:'web dev course',
        price: 5999
    }
]
const priceToPay=shoppingCart.reduce((acc,item)=>acc+item.price,0)
