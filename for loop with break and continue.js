for (let i=0; i<=10; i++){
    console.log(`Outer loop value: ${i}`)
    for(let j=0;j<=10;j++){
        console.log(`Inner loop value: ${j} and inner loop ${j}`)
    
    }
}

for (let i=0; i<=10; i++){
    console.log(`Outer loop value: ${i}`)
    for(let j=0;j<=10;j++){
        console.log(i+'*'+j+'='+i*j)
    
    }
}

let myArray=['Achilles', 'Hector','Helen', 'Paris']
console.log(myArray.length)
for(let i=0;i<myArray.length;i++){
    const elem=myArray[i]
    console.log(elem)
}

for( let i=0; i<=10; i++){
    const element=i
    if(element==5){
        console.log("5 is best number")
        break
    }
    console.log(element)//0 1 2 3 4 
}


for( let i=0; i<=10; i++){
    const element=i
    if(element==5){
        console.log("5 is best number")
        continue
    }
    console.log(element)//0 1 2 3 4 6 7 8 9 10
}

