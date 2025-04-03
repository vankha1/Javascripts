// var kidsWithCandies = function (candies, extraCandies) {
//   const maxEle = Math.max(...candies);
//   let res = [];
//   candies.map((ele) => {
//     res.push(ele + extraCandies >= maxEle);
//   });
//   return res;
// };

// var canPlaceFlowers = function (flowerbed, n) {
//   let count = 0;
//   flowerbed = [0].concat(flowerbed).concat([0]);
//   for (let i = 1; i < flowerbed.length - 1; i++) {
//     if (
//       flowerbed[i - 1] === 0 &&
//       flowerbed[i] === 0 &&
//       flowerbed[i + 1] === 0
//     ) {
//       flowerbed[i] = 1;
//       count++;
//     }
//   }
//   return count >= n;
// };

// var reverseVowels = function (s) {
//   const vowels = ["a", "e", "i", "o", "u"];
//   let tempStr = "";
//   for (let i = 0; i < s.length; i++) {
//     if (vowels.includes(s[i])) {
//       tempStr += s[i];
//     }
//   }
//   tempStr = [...tempStr].reverse();
//   let res = "";
//   for (let i = 0; i < s.length; i++) {
//     if (vowels.includes(s[i])) {
//       res += tempStr[0];
//       tempStr.shift();
//     } else {
//       res += s[i];
//     }
//   }
//   return res;
// };
// const arr = [1, 2, 3, 4, 5];
// console.log(arr.splice(1, 1), arr);
// var moveZeroes = function (nums) {};

// console.log("  hello world  ".split(" ").filter((ele) => ele !== ""));

// var increasingTriplet = function (nums) {
//   let first = Number.MAX_SAFE_INTEGER;
//   let second = Number.MAX_SAFE_INTEGER;

//   for (let num of nums) {
//     if (num <= first) {
//       first = num;
//       console.log(first, "----");
//     } else if (num <= second) {
//       second = num;
//       console.log(second);
//     } else {
//       return true;
//     }
//   }

//   return false;
// };

// let a = {
//   1: "van",
//   2: "kha",
// };

// // for (let ele in a) {
// //   console.log(ele);
// // }

// var x = '20'
// var y = x = 30

// console.log(x + y)

// // array.unshift(4,5)
// // console.log(typeof null)

// class Symbol {
//   constructor(name) {
//     this.name = name
//   }
// }

// a = new Symbol('a')
// b = new Symbol('a')
// let array = [1,10,7,20,30,40]
// console.log([...new Array(3).keys()])
// let a = {foo: 1}
// let b = a;
// a = {foo: 2}
// b.foo = 3
// console.log(a.foo)

// const w = 10, h = 20
// const ba = {
//   w:100,
//   h:200
// }

// function f() {
//   console.log(w, h)
// }

// // f(ba);

// console.log(!!' ')

// const aa = f()
// const bb = f()

// let b = 0
// var a =  function (c) {
//   if (c === 0) return b++
//   return a(c-1)
// }

// console.log(a(10))
// console.log(a(1000))
// console.log(a(1000000))

// const func = (a = 1, b = 2, c=3,d=4,e=5)=>{
//   return [a,b,c,d,e]
// }
// console.log(func(null, undefined, 2,0))

// const z = 1
// const a = new Promise(resolve => setTimeout(() => resolve(z), 0))

// const b = a.then(r => r*2).then(r => r*2);
// const c = a.then(r => r*2).then(r => r*2);

// b.then(r => console.log(r))
// c.then(r => console.log(r))

// {
// let a = 5

// console.log(a , c)

// var c = 2
// }

// testing = function() {
//     for (i = 0; i < 5; i ++){
//         if (i == 3){
//             return i
//             continue
//         }
//         console.log("=============")
//     }
// }

// let obj = {
//     1: "user",
//     key2: 2,
//     key3: 3
// }

// let obj2 = obj
// obj[1] = "admin"

// console.log(obj2[1], obj['1'], obj[1] == obj['1'],obj[1] === obj['1'] )

// let newObj = {}

// Object.keys(obj).map((key) => {
//    newObj[key] = obj[key] * 2
// })

// const a = new Date()
// console.log(a)

// function solution(N) {
//     let index = 0, indexNumerOne = [], result = 0;
//     while (N > 0) {
//         if (N % 2) {
//             indexNumerOne.push(index);
//         }
//         index++;

//         N = Math.floor(N / 2);
//     }

//     if (indexNumerOne.length > 1) {
//         for (let i = 0; i < indexNumerOne.length - 1; i++) {
//             result = Math.max(result, indexNumerOne[i + 1] - indexNumerOne[i] - 1);
//         }
//     }

//     return result;
// }

// console.log(solution(32)) // 10000010001

// // how to use forEach for string

// let arr = [].fill(0, 0, 2);

// console.log([1, 2, 3].fill(4));

// const solution = (A) => {
//     const threshold = Math.floor(A.length / 2) + 1;

// }

