console.log('Hello world!');

// let n = Math.random();
// n = n * 6;
let loveScore = Math.floor(Math.random() * 100) + 1;
console.log('Love Score: ', loveScore);

if (loveScore === 100) {
    console.log('Perfect match!');
} else if (loveScore <= 99 && loveScore >= 80) {
    console.log('Give it a shot!');
} else if (loveScore <= 79 && loveScore >= 61) {
    console.log('It could work.');
} else if (loveScore <= 60 && loveScore >= 50) {
    console.log('It could be worse.');
} else if (loveScore >= 30 && loveScore <= 49) {
    console.log("It couldn\'t be worse!");
} else {
    console.log("It\'s worse!");
}
