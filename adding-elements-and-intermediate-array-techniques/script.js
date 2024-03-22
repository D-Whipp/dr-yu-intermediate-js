console.log('Hello World!');

var output = [];
var count = 1;

function fizzBuzz() {
    while (count <= 100) {
        if (count % 3 === 0 && count % 5 === 0) {
            output.push('Fizzbuss');
        } else if (count % 3 === 0) {
            output.push('Fizz');
        } else if (count % 5 === 0) {
            output.push('Buzz');
        } else {
            output.push(count);
        }
        count++;
    }

    console.log('Output: ', output);
}

// fizzBuzz();

// ************* MY CODE **************

let myOutput = [];
// let myCounter;

function myFizzBuzz() {
    // console.log('My output: ', myOutput);
    let myCounter = myOutput.length + 1;
    console.log('My Counter: ', myCounter);
    while ( myOutput.length <= 100) {
        // console.log('myCounter: ', myCounter);
        if (myOutput.length % 3 === 0 && myOutput.length % 5 === 0) {
            myOutput.push('FizzBuzz');
            // console.log('Modulo Both: ', myOutput);
        } else if (myOutput.length % 5 === 0) {
            myOutput.push('Buzz');
            // console.log('Modulo 5: ', myOutput);
        } else if (myOutput.length % 3 === 0) {
            myOutput.push('Fizz');
        } else {
            myOutput.push(myOutput.length);
            // myOutput.push(myCounter + 1);
            // console.log('No Modulo: ', myOutput);
            myCounter = myCounter + 1;
        }
    }

    // myCounter++;
    console.log('My Output: ', myOutput);
}

myFizzBuzz();

// function fizzBuzz() {
//     let counter = output.push(output.length + 1);

//     console.log(output);
//     console.log(counter);
// }

// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
// fizzBuzz();
