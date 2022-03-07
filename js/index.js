/*                              // First Hometask:
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
alert(secondsInOneMonth); */

// Second Hometask:

//task1
let x = 1;
let y = 2;
let res1 = String(x) + y;
console.log(res1);
console.log(typeof res1);

let res2 = Boolean(x) + String(y);
console.log(res2);
console.log(typeof res2);

let res3 = Boolean(x < y);
console.log(res3);
console.log(typeof res3);

let res4 = isNaN(x) / isNaN(y);
console.log(res4);
console.log(typeof res4);

//task2
let someNumber;
someNumber = prompt(
  "Check if number is: a) Even positive; b) Multiple of seven",
  "Enter number here"
);
console.log(someNumber % 2 < 1 && someNumber >= 0);
console.log(someNumber % 7 === 0);

//task3
let myArr = [1, "space", true, null];
alert(myArr.length);

let enterVal = prompt("Enter any number to add it to the array");
myArr.push(enterVal);
console.log(myArr[4]);

myArr.pop([4]);
console.log(myArr);

//task4
let cities = ["Rome", "Lviv", "Warsaw"];
let citiesStr = cities.toString();
console.log(citiesStr);

//task5
let enteredAge = prompt("What is Your Age?", "Enter your age here");
if (enteredAge < 18) {
  alert("You are too young");
} else {
  alert("You have reached the age of majority");
}

//task6
let side1 = prompt("Enter side1: ", "Enter value here");
let side2 = prompt("Enter side2: ", "Enter value here");
let side3 = prompt("Enter side3: ", "Enter value here");
let triangleSemPer = (side1 + side2 + side3) / 2;
let triangleArea = Math.sqrt(
  triangleSemPer *
    (triangleSemPer - side1) *
    (triangleSemPer - side2) *
    (triangleSemPer - side3)
);
triangleArea = triangleArea.toFixed(3);
if (side1 > 0 && side2 > 0 && side3 > 0) {
  console.log("The triangle area is " + triangleArea);
} else {
  console.log("Incorrect data");
}
if (side3 ** 2 === side1 ** 2 + side2 ** 2) {
  console.log("This is the right triangle");
} else {
  console.log("This isn't the right triangle");
}

//task7
//first method
let currHour = new Date().getHours();
let greetMessage;
if (currHour >= 23 && currHour < 5) {
  greetMessage = "Good night";
} else if (currHour >= 5 && currHour < 11) {
  greetMessage = "Good morning";
} else if (currHour >= 11 && currHour < 17) {
  greetMessage = "Good day";
} else if (currHour >= 17 && currHour < 23) {
  greetMessage = "Good evening";
}
alert(greetMessage);

//second method
let currHour2 = new Date().getHours();
let greetMessage2;
currHour2 >= 23 && currHour2 < 5
  ? (greetMessage2 = "Good night")
  : currHour2 >= 5 && currHour2 < 11
  ? (greetMessage2 = "Good morning")
  : currHour2 >= 11 && currHour2 < 17
  ? (greetMessage2 = "Good day")
  : (greetMessage2 = "Good evening");
alert(greetMessage2);
