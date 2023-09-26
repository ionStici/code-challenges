"use strict";

const findPrimeNumbers = function (num) {
  let primeNumbers = [];
  const addPrime = (prime) => primeNumbers.push(prime);

  for (let i = 1; i <= num; i++) {
    if (i === 1) continue;

    for (let x = 2; x <= i; x++) {
      if (i % x === 0 && x !== i) break;
      if (x === i) addPrime(i);
    }
  }

  return primeNumbers;
};

const primeNumbersUpTo_11 = findPrimeNumbers(11);
const primeNumbersUpTo_30 = findPrimeNumbers(30);

console.log(primeNumbersUpTo_11);
console.log(primeNumbersUpTo_30);

// [2, 3, 5, 7, 11];
// [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
