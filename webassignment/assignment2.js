//1.arrow function to return average of array
/*
let avg = (arr) => {
   let i,total=0;
   for(i=0;i<arr.length;i++)
   {
       console.log(arr[i]);
       console.log(total);
       total=total + arr[i];
   }
   return total/arr.length;
}
 
let v = window.prompt("enter comma separated array elements");
let a = v.split(",");
let i;
for(i=0;i<a.length;i++)
{   a[i]=parseInt(a[i]);
  
}
 
alert("average : "+avg(a));
*/
 
 
 
//2.sum of even numbers in array
/*
let s = (arr) => {
   let i,sum=0;
   for(i=0;i<arr.length;i++)
   {
      
       if(arr[i]%2===0)
       {
           sum+=arr[i];
       }
   }
   return sum;
}
let v = window.prompt("enter comma separated array elements");
let a = v.split(",");
let i;
for(i=0;i<a.length;i++)
{  
   a[i]=parseInt(a[i]); 
}
console.log(a);
alert("sum of even elements "+ s(a));
*/
 
 

//3. Write a JavaScript code to multiply each number in the array by 10 and return the result using the map () function with arrow notation.
/*
let a = window.prompt("enter array elements seperated by comma");
let i;
a = a.split(",");

for(i=0;i<a.length;i++)
{
    a[i] = parseInt(a[i]);
}

let mul = (num) => num*10;

let b = a.map(mul);

alert(b);
*/




 //4. convert kg to lbs
/*
let w = (kg) =>{
   let lbs=kg*2.2;
   alert("weight in lbs "+lbs);
   if(lbs>150)
   return "obese";
   else if(lbs>=100&&lbs<=150)
   return "you are ok";
   else return "underweight";
}
 let we = window.prompt("enter weight in kg");
we = parseInt(we);
alert(w(we));
*/

//Write a JavaScript function.
//a. to capitalize the first letter of each word in a string.
/*
let str = prompt("Enter string");
function fun(a)
{
let i = a.charAt(0);
i = i.toUpperCase();
a = a.slice(1);
a = i+a;
//console.log(a);
return a;
}
str = fun(str);
let str1,str2;
for(i=0;i<str.length;i++)
{
    if(str[i]==' ')
    {
        str1 = str.slice(0,i+1);
        str2 = fun(str.slice(i+1));
        str = str1+str2;
    }
}
alert(str);
*/

//b. to insert a string within a string at a particular position

let a = prompt("enter main string");
let b = prompt("Enter substring");
let pos = parseInt(prompt("Enter position"));
let temp = a.slice(0,pos);
let res = temp+b+a.slice(pos);
alert(res);


//7. disarium numbers between 1 and 100
/*
function dis(num)
{
  
   let i,count,n,t,d=0;
   n=num;
   count=0;
   while(n!=0)
   {
       count++;
       n=Math.floor(n/10);
   }
 //  console.log(count);
   n=num;
   for(i=count;i>0;i--)
   {
       t=n%10;
       //console.log(t);
       d+= Math.pow(t,i);
       n=Math.floor(n/10);
   }
   //console.log(d);
   if(d==num){
       console.log(num);
       return num+" ";
   }
   else return "";
}
let i,n="";
for(i=1;i<=100;i++)
n+=dis(i);
alert(n);
*/
 
//8. encrypt text using caesar cipher
/*
let txt = window.prompt("enter text for encryption");
let n = window.prompt("enter value for shift pattern");
n=parseInt(n);
//console.log(txt,n);
 
let i;
let a="",t="";
for(i=0;i<txt.length;i++)
{
   if(txt[i]>='a'&&txt[i]<='z')
   {
       //console.log(((txt.charCodeAt(i)-97+n)%26)+97);
       t +=String.fromCharCode(((txt.charCodeAt(i)-97+n)%26)+97);
   }
   else t+=txt[i];
}
alert(t);
*/

//10.Write a JavaScript code to perform Jump Search for a given key and report success or failure. Prompt the user to enter the key and a list of numbers.
/*
let a = window.prompt("Enter sorted array elements separated by comma");
 a = a.split(",");
let i;
 for(i=0;i<a.length;i++)
 a[i] = parseInt(a[i]);

 //console.log(a);

 let key = parseInt(window.prompt("enter key to jump search"));
 //console.log(key);
 function jp(arr,key)
 {
    let n = arr.length;
    let j = Math.floor(Math.sqrt(n));
    //console.log(n,j);
    let i=0,bound;
    while(i<n)
    {
        //console.log(a[i]);
        bound = i;
        if(a[i]==key)
        return i;
        else if(key<a[i])
        break;
        else i+=j;

    }
    //console.log(bound);
    if(i==n)
    return -1;
    for(i=bound-j;i<bound;i++)
    {
        //console.log(a[i]);
        if(a[i]==key)
        return i;
    }
    return -1;

 }

 //alert(jp(a,key));
let ind = jp(a,key);
 if(ind ==-1)
 alert("Failure");
 else alert("success, key at : "+(ind+1));

*/






//11. Write an arrow function that accepts an array of strings as input and prompt the message which shows “Enter the Length of the String:” Output: Function should return the entered length strings.

//let array = ["ankit","amogh","dhruva","ajit","prajwal"];
/*
a=window.prompt("enter strings of different lengths seperated by comma");
array= a.split(",");
let i;
let a1=[];
alert(array);
let n = window.prompt("enter number to find matching string length");
//console.log(n);
let f = (array,n) => {
for(i=0;i<array.length;i++)
{
    if(n==array[i].length)
    a1.push(array[i]);
}
//console.log(a1);

alert(a1);
}

f(array,n);
*/

