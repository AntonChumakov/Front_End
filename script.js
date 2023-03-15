// ========== number 1 ==========

// function numbers(a,b) {
//         if(a > b) {
//             return b
//         } else {
//             return a
//         }
// }
// console.log(numbers(23,54))

// ========== number 2 ==========

// function even(a,b) {
//     for(let i = a; i >=b; i --) {
//         if( i%2 === 0) {
//             console.log(i)
//         }
//     }
// }
// even(33,1)

// ========== number 3 ==========

// function power(a,b=2) {
//     return Math.pow(a,b)
// }
// console.log(power(3))

// ========== number 4 ==========

// function num(n) {
//     let result = 0;
//     for(let i = 1; i <= n; i ++) {
//         result += i
//     }
//     return result
// }
// console.log(num(10))

// ========== number 5 ==========

// function num(n, m) {
//   let even = 0;
//   let odd = 0;
//   for (let i = n; i <= m; i++) {
//     if (i % 2 === 0) {
//       even += i;
//     } else {
//       odd += i;
//     }
//   }
//   console.log(even);
//   console.log(odd);
// }

// num(22, 22);


// ========== number 6 ==========


// function getLongestString(arr) {
//   if (arr.length === 0) {
//     return null;
//   }
//   let longestString = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i].length > longestString.length) {
//       longestString = arr[i];
//     }
//   }
//   return longestString;
// }
// const stringsArr = ['one', 'two', 'three'];
// const result = getLongestString(stringsArr);

// console.log(result)