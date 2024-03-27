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

fibonacci(7);
