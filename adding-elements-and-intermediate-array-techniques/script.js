console.log('Hello World!');

let output = [];
// let counter;

function fizzBuzz() {
    let counter = output.length + 1;
    while (counter <= 5) {
        if (counter % 3 === 0 && counter % 5 === 0) {
            output.push('FizzBuzz');
        } else if (counter % 5 === 0) {
            output.push('Buzz');
        } else if (counter % 3 === 0) {
            output.push('Fizz');
        } else {
            // output.push(output.length + 1);
            output.push(counter + 1);
        }
    }

    // counter++;
    console.log(output);
}

// function fizzBuzz() {
//     let counter = output.push(output.length + 1);

//     console.log(output);
//     console.log(counter);
// }

fizzBuzz();
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
