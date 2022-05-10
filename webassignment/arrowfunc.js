//let array = ["ankit","amogh","dhruva","ajit","prajwal"];

a=window.prompt("enter strings of different lengths seperated by comma");
array= a.split(",");
let i;
let a1=[];
alert(array);
let n = window.prompt("enter number to find matching string length");
//console.log(n);
const ar = () =>{
    let i=0;
    for(i=0;i<array.length;i++)
{
    if(n==array[i].length)
    a1.push(array[i]);
}
//console.log(a1);

return a1;
}
alert(ar());