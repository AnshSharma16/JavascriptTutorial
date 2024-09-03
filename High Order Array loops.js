//for of
//["","",""]
//[{},{},{}]
const arr=[1,2,3,4]
for (const num of arr){
    console.log(num)
}

const greetings='Hello'
for(const greet of greetings){
    console.log(greet)
}

//Maps
const map=new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('FR',"France")
console.log(map)

for(const [key, value] of map){
    console.log(key,":-",value)
}

//for in
const  Object={
    game1:'TicTacToe',
    game2:'Ludo'
}
for(const key in Object){
    console.log(Object[key])
}

const lang=['Sanskrit', 'Greek', 'Persian', 'Latin', 'Chinese']

for(const key in lang){
    console.log(key)
    console.log(lang[key])
}

const map1=new Map()
map1.set('IN',"India")
map1.set('USA',"United States of America")
map1.set('FR',"France")
console.log(map1)

for(const key in map1){
    console.log(key)//Doesn't work in map
}

const lang1=['Sanskrit', 'Greek', 'Persian', 'Latin', 'Chinese']
lang1.forEach(function name(val){
    console.log(val)
})
lang.forEach( (item)=>{
    console.log(item)
})

lang1.forEach((item,index,arr)=>{
    console.log(item, index, arr)
})

const myCoding=[
    {
        languageName:'Javascript', filename:'js'
    },
    {
        languageName:'Python', filename:'py'
    },
    {
        languageName:'C', filename:'c'
    }
]
myCoding.forEach((item)=>{
    console.log(item)
    console.log(item.filename)
    console.log(item.languageName)
})


