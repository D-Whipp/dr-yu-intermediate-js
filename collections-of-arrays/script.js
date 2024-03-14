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

if (guestList.includes(userName)) {
    alert('Welcome ' + userName + '.');
} else {
    alert('Your name is not on the list.');
}
