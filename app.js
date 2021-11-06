//PROBLEM N1

// const x = 5;

// function isPrime(a) {
//     for (let i = 2; i <= Math.sqrt(a); i++) {
//         if (a % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// const y = isPrime(x);
// console.log(y);




//PROBLEM N2

// const a = 40;
// const b = 100;

// function foo(x, y) {
//     const arr = [];
//     for (let i = a; i <= b; i++) {
//         if (isPrime(i)) {
//             arr.push(i);
//         }
//     }
//     return arr;
// }

// console.log(foo(a, b));






//PROBLEM N3

// let x = 4589;
// function reverse(num) {
//     let sum = "";
//     while(num !== 0 && sum !== 0) {

//         sum = String(sum) + String(num % 10);
//         num = (num - num % 10) / 10;
//     }
//     return Number(sum);
// }
// console.log(reverse(x));





//PROBLEM N4

// const num = 56261646565;
// function isPalindrom(num) {
//     const num1 = reverse(num);
//     if (num1 === num) {
//         console.log(`${num} is palindrom`);
//         return;
//     }
//     console.log(`${num} is not palindrom`);
// }
// isPalindrom(num);







//PROBLEM N5

// const array1 = [1, 1, 0, 1, 1, 1];
// const array2 = [1, 0, 1, 0, 0];
// array2.unshift(0);

// function sum(arr1, arr2) {
//     const arr3 = [];

//     for (let i = 0; i < arr1.length; i++) {
//         if (arr1[i] + arr2[i] === 2) {
//             arr3.push(1);
//             arr3.push(0);
//         }
//         else if (arr1[i] + arr2[i] === 1) {
//             arr3.push(1);
//         }
//         else {
//             arr3.push(0);
//         }
//     }
//     return arr3;
// }

// console.log(sum(array1, array2));





//PROBLEM N6

// const num = [0, 1, 1, 1, 0, 1];

// function foo(num) {
//     for (let i = 0; i < num.length; i++) {
//         if (num[i] === 1) {
//             num[i] = 0;
//         }
//         else {
//             num[i] = 1;
//         }
//     }
//     return num;
// }

// console.log(foo(num));






//PROBLEM N7

// const num1 = [1, 1, 0, 1, 1, 1];
// function foo1(num) {
//     arr1 = foo(num);
//     let arr3 = [];

//     for (let i = 0; i < arr1.length; i++) {
//         if (arr1[i] + 1 === 2) {
//             arr3.push(1);
//             arr3.push(0);
//         }
//         else if (arr1[i] + 1 === 1) {
//             arr3.push(1);
//         }
//         else {
//             arr3.push(0);
//         }
//     }
//     return arr3;
// }

// console.log(foo1(num1));
