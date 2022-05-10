//string methods
let s="0123456789"

//length of string

//console.log(s.length)

//slice
/*
let s1 = s.slice(3,6);
console.log(s1);
s1 = s.slice(3);
console.log(s1);
s1 = s.slice(-10,-1);
console.log(s1);
s1 = s.slice(-7);
console.log(s1);
*/

/*
//substring
//substring will not take negative index values like slice
s1=s.substring(5,10);
console.log(s1);
*/


//substr (index,length). specify starting index and total length
//accepts negative indexing
//s1 = s.substr(7,2);
//console.log(s1);
/*
//convert string to upper or lower cases
let txt = "this is ds lab";
console.log(txt);
txt1 = txt.toUpperCase();
console.log(txt1);
txt1 = txt.toLowerCase();
console.log(txt1);
*/


/*
//replace a part of string with other string
txt1 = txt.replace(/ds/i,"web"); //if we don't know the case give like this
console.log(txt1);
txt1 = txt1.replace("lab","class");
console.log(txt1);

//concatination of strings
console.log(txt.concat(" ",txt1));

//trim method to remove spaces in the begining and ending of string
let text1 = "      Hello World!      ";
let text2 = text1.trim();
console.log(text2);
*/


/*
//to add padding for string at begining or ending of the string
txt = "name"
let padded = txt.padStart(10,"a");
console.log(padded);
padded = txt.padEnd(11,"my")
console.log(padded);
*/

//to print ascii value of characters
//txt="dhruva s"
//alert(txt.charCodeAt(5));



//let array = ["ankit","amogh","dhruva","ajit","prajwal"];

a=window.prompt("enter strings of different lengths seperated by comma");
array= a.split(",");
let i;
let a1=[];
alert(array);
let n = window.prompt("enter number to find matching string length");
//console.log(n);
for(i=0;i<array.length;i++)
{
    if(n==array[i].length)
    a1.push(array[i]);
}
//console.log(a1);

alert(a1);
