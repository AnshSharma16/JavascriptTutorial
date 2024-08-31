//Immediately invoked function expressions(IIFE) are used to prevent the prevention from the pollution of the global scope.
//These functions are invoked immediately aas they are created

(function chai(){
    console.log("DB CONNECTED")
})();

//Must use sei-colon while using multiple IIFE in same file

((name)=>{
    console.log(`DB connected twice :${name}`)
})('Ansh')
