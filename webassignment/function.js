function myFunc(greeting)
{
    return greeting;
}
console.log(myFunc("Hello World"));

const myFuncExpr=function(greet){
    return greet
}
console.log(myFuncExpr("Hello Mohan"));
//Implicit Return
//const myArrow=(greett)=>{return greett}
//console.log(myArrow("Hello Kumar"));

//const myArrow=(greett)=>greett;
//console.log(myArrow("Hello Kumar"));

//const myArrow=(greett)=>(greett)
//console.log(myArrow("Hello Kumar"));
//Single Parameter - Paranthesis not required
//const myArrow=greett=>greett
//console.log(myArrow("Hello Kumar"));

//Multiple Parameter - Paranthesis required
const myArrow=(greet1,greet2)=>greet1+greet2
console.log(myArrow("Hi","Kumar"));

const myArray=[1,2,3,4,5];
const multiplybytwo=myArray.map(num=>num*2);
console.log(myArray);
console.log(multiplybytwo);