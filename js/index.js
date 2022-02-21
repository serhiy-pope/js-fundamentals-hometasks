//task2

alert("Pop");

//task3
let redFlower; 
redFlower = "Poppy";
let yellowFlower;
yellowFlower = "Sunflower";
console.log(redFlower);
console.log(yellowFlower);
redFlower = yellowFlower;
console.log(redFlower);
console.log(yellowFlower);

//task4

let myNewObj = {
    "String": "5",
    "Number": 5,
    "Boolean": true,
    "Undefined": undefined,
    "Null": null 
};

//task5

let isAdult = confirm("Are you an adult?");
alert( isAdult );

//task6

const myFirstname = "Serhiy";
const myLastname = "Pop";
const myStudyGroup = "Lv-678.JS Core";
const myBirthYear = 1987;

let myMaritalStatus = "Married";
myMaritalStatus = true;

console.log(typeof myBirthYear);
console.log(typeof myMaritalStatus);
console.log(typeof myFirstname);
console.log(typeof myLastname);
console.log(typeof myStudyGroup);

let recordType = "LP";
recordType = null;

let playerType;

console.log(typeof recordType);
console.log(typeof playerType);

//task7

let name; 
prompt("Dear ", "User");
prompt("Your email is ", "usermail@gmail.com");
prompt("Your password is ", "qwerty");
name = "Dear User, your email is usermail@gmail.com, your password is qwerty";
alert(name);

//task8

let secondsInOneHour = 60 * 60;
alert(secondsInOneHour);

let secondsIn24Hours = 60* 60 * 24;
alert(secondsIn24Hours);

let secondsInOneMonth = 60 * 60 * 24 * 30;
alert(secondsInOneMonth);