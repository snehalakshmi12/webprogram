// ----------------------
// Traditional Example
// ----------------------
// A simplistic object with its very own "this".
let obj = {
    num: 100
}

// Setting "num" on window to show how it is NOT used.
window.num = 2020; // yikes!

// A simple traditional function to operate on "this"ssss
let add = function (a, b, c) {
  return this.num + a + b + c;
}

// call
let result = add.call(obj, 1, 2, 3) // establishing the scope as "obj"
console.log(result) // result 106

// apply
const arr = [1, 2, 3]
let result2 = add.apply(obj, arr) // establishing the scope as "obj"
console.log(result2) // result 106

// bind
let result1 = add.bind(obj) // establishing the scope as "obj"
console.log(result1(1, 2, 3)) // result 106
