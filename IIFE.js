//Immediately invoked function expressions(IIFE) are used to prevent the prevention from the pollution of the global scope.
//These functions are invoked immediately aas they are created

(function chai(){
    console.log("DB CONNECTED")
})()

(()=>{
    console.log('DB connected twice')
})()
