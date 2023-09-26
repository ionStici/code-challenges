"use strict";

const determineFactorPairs = function (num) {
  const factorPairs = [];

  for (let i = 1; i <= num; i++) {
    if (num % i === 0) factorPairs.push([i, num / i]);
    const last = factorPairs[factorPairs.length - 1];
    if (last[0] > last[1]) {
      factorPairs.splice(-1);
      break;
    }
  }

  return factorPairs;
};

const pairs = determineFactorPairs(50);
console.log(pairs);

/*
[
  [1, 50],
  [2, 25],
  [5, 10],
];
*/

// // // // // // // // // // // // // // // // // // // //
// FIRST TRY

// const detectEqualArrays = (arr1, arr2) => {
//   if (arr1.length !== arr2.length) return;

//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) return false;
//   }

//   return true;
// };

// const getFactorPairs = function (num) {
//   let arr = [];

//   for (let i = 1; i <= num; i++) {
//     if (num % i === 0) {
//       arr.push([i, num / i].sort((a, b) => a - b));
//     }
//   }

//   let uniqueArr = [];

//   for (const item of arr) {
//     if (!uniqueArr.some((el) => detectEqualArrays(el, item))) {
//       uniqueArr.push(item);
//     }
//   }

//   return uniqueArr;
// };

// const factorPairs = getFactorPairs(50);
// console.log(factorPairs);

// // // // // // // // // // // // // // // // // // // //
