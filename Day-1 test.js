// // 1. swap two variables without using third variable

let a = 5,
  b = 10;
a = a + b;
b = a - b;
a = a - b;
console.log("a:", a, "b:", b);

// //2.find the largest of three numbers

// function findLargest(a, b, c) {
//   if (a >= b && a >= c) {
//     return a;
//   } else if (b >= a && b >= c) {
//     return b;
//   } else {
//     return c;
//   }
// }

// console.log(findLargest(3, 7, 5));

// // 3.check if number is prime
// function isPrime(n) {
//   if (n < 2) return false;

//   for (let i = 2; i * i <= n; i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(isPrime(7));
// console.log(isPrime(10));

// // 5. Question: Write a function to find the sum of all even numbers in an array.
// function sumEvenNumbers(arr) {
//   return arr.reduce((sum, num) => (num % 2 == 0 ? sum + num : sum), 0);
// }
// const numbers = [1, 2, 3, 4, 5, 6];
// console.log(sumEvenNumbers(numbers));

//7. Find the second largest number in an array.

//4.Reverse an Array Without Using Built-in Methods
var arr = [1, 2, 3, 4];
function reverseArray(arr) {
  var newArray = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    // console.log(reverseArray(arr));
    newArray[arr.length - i - 1] = arr[i];
    console.log(newArray, "newArray");
  }
  console.log(newArray, "newArray");
}
console.log(reverseArray(arr));

// 9.Write a function to find the factorial of a given number using a loop.

// function factorial(n) {
//   if (n === 0 || n === 1)
// {
// return 1;  }
// return n * factorial(n - 1);
// }

// console.log(factorial(5));


// Q. 10 Write a function to check whether an array is sorted in ascending order.
 
// var arr=[1,2,3,4,5];
// var arr=[1,3,2,4,5];
// function isSortedArr(){
//   for(var i=){

//   }
// }





//6.vowels
var str ="hello world";
function vowels(){
  let count=0;
  for( let i =0; i<str.length; i++){
    console.log(str[i] );
    if(str[i]=="a"|| str[i]=="e"|| str[i]=="i"|| str[i]=="o" || str[i]=="u"){
      count++;
    }
  }
  return count;
}
console.log(vowels());