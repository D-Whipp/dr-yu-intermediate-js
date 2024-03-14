console.log('Hello World!');

let guestList = [
    'Tim',
    'Jon',
    'Ben',
    'Liv',
    'Tom',
    'Nik',
    'Liz',
    'Sam',
    'Jan',
    'Sky',
    'Noa',
    'Cam',
    'Des',
    'Kim',
    'Ron',
    'Jim',
    'Don',
    'Kit',
];

// console.log(guestList.includeLs('Tim'));

let askName = 'What is your name?';
let userName = prompt(askName);

for (let i = 0; i <= guestList.length; i++) {
    console.log(guestList[i]);
    console.log(userName);
    if (guestList[i] === userName) {
        alert('Welcome ' + userName + '.');
    } else {
        console.log('Scram!');
    }
}
