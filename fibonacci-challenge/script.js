console.log('Hello World!');

let fibArray = [];
let fibNum = 0;

console.log(fibArray.length);

function fibonacci(param) {
    for (let i = 0; i <= param; i++) {
        if (fibArray.length < 3) {
            fibArray.push(0);
            fibArray.push(1);
            fibArray.push(1);
        } else {
            fibNum =
                fibArray[fibArray.length - 1] +
                fibArray[fibArray.length - 2];
            fibArray.push(fibNum);
        }
    }
    console.log('Array: ' + fibArray);
    console.log('Number: ' + fibNum);
}

fibonacci(1);

// function fibonacciGenerator (n) {
//     //Do NOT change any of the code above 👆
//         let fibArray = [];
//         let fibNum = 0;
//         //Write your code here:

//           for (let i = 0; i <= n; i++) {
//             if (fibArray.length < 3) {
//                 fibArray.push(0);
//                 return fibArray;
//             } else if (fibArray.length > 1 && fibArray.length < 3) {
//                 fibArray.push(0);
//                 fibArray.push(1);
//                 fibArray.push(1);
//             } else {
//                 fibNum =
//                     fibArray[fibArray.length - 1] +
//                     fibArray[fibArray.length - 2];
//                 fibArray.push(fibNum);
//             }
//         }
//         // console.log('Array: ' + fibArray);
//         // console.log('Number: ' + fibNum);
//         return fibArray;

//         //Return an array of fibonacci numbers starting from 0.

//     //Do NOT change any of the code below 👇
//     // }

// Your code passed this test

// Your code failed this test
// Error details
// Expected '0' to equal '0,1'.

// Your code failed this test
// Error details
// Expected '0' to equal '0,1,1,2,3,5,8,13,21,34,55,89,144,233,377'.
