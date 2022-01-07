// Write a function called findHighestPeak that takes two positive integers as arguments.
// The function should return the highest value reached among the collatz conjecture sequences 
// derived by taking all the integers between the two integer arguments, 
// as the initial values of the sequences.

// */

// function findHighestPeak(start, end) {
//   // Write your code here
// }

// // test cases
// console.log(findHighestPeak(5, 10)); // should print 52
// console.log(findHighestPeak(10, 15)); // should print 160
// console.log(findHighestPeak(100, 150)); // should print 9232
// console.log(findHighestPeak(777, 999)); // should print 250504

  function findHighestPeak(start, end) {
    let max = Number.NEGATIVE_INFINITY;
    for (let i = start; i <= end; i++) {
      const res = getMaxInCallatzSeq(i);
      if (max < res) {
        max = res;
      }
    }
    return max;
  }
  
  function getMaxInCallatzSeq(num) {
    let max = num;
    while (num !== 1) {
      if (num % 2 == 0) {
        num = num / 2;
      } else num = num * 3 + 1;
      max = max > num ? max : num;
    }
    return max;

  }
  
  
  
  // test cases
  console.log(findHighestPeak(5, 10)); // should print 52
  console.log(findHighestPeak(10, 15)); // should print 160
  console.log(findHighestPeak(100, 150)); // should print 9232
  console.log(findHighestPeak(777, 999)); // should print 250504