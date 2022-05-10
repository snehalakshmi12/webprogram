/*// Adding elements at the end of an array
// Declaring and initializing arrays
var number_arr = [ 10, 20, 30, 40, 50 ];
var string_arr = [ "piyush", "gourav", "smruti", "ritu" ];

// push()
// number_arr contains [10, 20, 30, 40, 50, 60]
number_arr.push(60);

// We can pass multiple parameters to the push()
// number_arr contains
// [10, 20, 30, 40, 50, 60, 70, 80, 90]
number_arr.push(70, 80, 90);

// string_arr contains
// ["piyush", "gourav", "smruti", "ritu", "sumit", "amit"];
string_arr.push("sumit", "amit");

// Printing both the array after performing push operation
console.log("After push op " + number_arr);
console.log("After push op " + string_arr);*/

/*// Adding element at the beginning of an array
// Declaring and initializing arrays
var number_arr = [ 20, 30, 40 ];
var string_arr = [ "amit", "sumit" ];

// unshift()
// number_arr contains
// [10, 20, 20, 30, 40]
number_arr.unshift(10, 20);

// string_arr contains
// ["sunil", "anil", "amit", "sumit"]
string_arr.unshift("sunil", "anil");

// Printing both the array after performing unshift operation
console.log("After unshift op " + number_arr);
console.log("After unshift op " + string_arr);*/

/*// Removing elements from the end of an array
// Declaring and initializing arrays
var number_arr = [ 20, 30, 40, 50 ];
var string_arr = [ "amit", "sumit", "anil" ];

// pop()
// number_arr contains
// [ 20, 30, 40 ]
number_arr.pop();

// string_arr contains
// ["amit", "sumit"]
string_arr.pop();

// Printing both the array after performing pop operation
console.log("After pop op " + number_arr);
console.log("After popo op " + string_arr);*/

/*// Removing element from the beginning of an array
// Declaring and initializing arrays
var number_arr = [ 20, 30, 40, 50, 60 ];
var string_arr = [ "amit", "sumit", "anil", "prateek" ];

// shift()
// number_arr contains
// [30, 40, 50, 60];
number_arr.shift();

// string_arr contains
// ["sumit", "anil", "prateek"]
string_arr.shift();

// Printing both the array after performing shifts operation
console.log("After shift op " + number_arr);
console.log("After shift op " + string_arr);*/

// Removing an adding element at a particular location
// in an array
// Declaring and initializing arrays
/*var number_arr = [ 20, 30, 40, 50, 60 ];
var string_arr = [ "amit", "sumit", "anil", "prateek" ];

// splice()
// deletes 3 elements starting from 1
// number array contains [20, 60]
number_arr.splice(1, 3);

// doesn't delete but inserts 3, 4, 5
// at starting location 1
number_arr.splice(1, 0, 3, 4, 5);

// deletes two elements starting from index 1
// and add three elements.
// It contains ["amit", "xyz", "abc", "def", "prateek"];
string_arr.splice(1, 2, "xyz", "abc", "def");

// Printing both the array after performing splice operation
console.log("After splice op " + number_arr);
console.log("After splice op " + string_arr);*/
























//1. sorting array

 /*let arr=[4,6,7,8,2,1,-2];
let i,j,temp;
let a = arr.length;
for(i=0;i<a;i++)
{
    for(j=0;j<a-1;j++)
    {
        if(arr[j]>arr[j+1])
        {
            temp = arr[j];
            arr[j]= arr[j+1];
            arr[j+1]=temp;
        }
    }
}
//console.log(a)
//arr.sort();
console.log(arr);  */

//3. compare arrays 

//  let arr1 = [1,2,'a',4,5];
//  let arr2 = [1,2,3,4,5];

// let i,j,m,n;
// m=arr1.length;
// n=arr2.length;
// function equal()
// {
// if(m != n)
// return false;
// else{
//     for(i=0;i<m;i++)
//     {
//         if(arr1[i]!=arr2[i])
//         return false;
        
//     }
//     return true;
// }
// }

// let func = equal();
// console.log(func);  



//question 9, add elements to array at specified position  

/*let arr=[4,6,7,8,2,1,-2];
arr.splice(3,0,1,2,3);
console.log(arr);*/


//question 10, deleting from array at a spectified position


/*let arr=[4,6,'a','b',7,8,2,1,-2];
arr.splice(3,3);
console.log(arr);  */



// let fib = window.prompt("enter number to find fibonacci series");
// //alert("entered data "+fib);

// function fibonacci(fib)
// {
//     if(fib == 0 || fib == 1) 
//     return fib;

//     else return(fibonacci(fib-1)+fibonacci(fib-2));
// }

// console.log(fibonacci(fib));


// 5. js method to return duplicate free array

// let ar = window.prompt("enter array to remove duplicates");
// let arr = ar.split(" ");

// let i,j;

//  for(i=0;i<arr.length;i++)
//  arr[i]=parseInt(arr[i]);
// console.log(arr);
// for(i=0;i<arr.length-1;i++)
// {
//     for(j=i+1;j<arr.length;j++)
//     {
//         if(arr[i]==arr[j])
//         arr.splice(j,1);
//     }
// }

// alert("after removing duplicates"+arr); 