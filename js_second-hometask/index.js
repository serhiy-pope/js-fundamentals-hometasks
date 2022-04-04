/* //******************** Second Hometask ********************

//************************* task1 *************************
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

//************************* task2 *************************
let someNumber = prompt("Choose a number");
if (someNumber % 2 === 0 && someNumber > 0) {
  console.log("Your number is even positive");
} else if (someNumber % 7 === 0) {
  console.log("Your number is multiple of 7");
} else {
  console.log("Your number is odd, has negative value, or it's not a number");
}

//************************* task3 *************************
let myArr = [];
myArr.push(1, "space", true, null);
console.log(myArr.length);
myArr[4] = prompt("Enter any number to add it to the array");
console.log(myArr[4]);
myArr.shift();
console.log(myArr);

//************************* task4 *************************
let cities = ["Rome", "Lviv", "Warsaw"];
cities = cities.join(" * ");
console.log(cities);

//************************* task5 *************************
let enteredAge = prompt("What is Your Age?", "Enter your age here");
if (enteredAge < 18) {
  alert("You are too young");
} else {
  alert("You have reached the age of majority");
}

//************************* task6 *************************
let side1 = parseInt(prompt("Enter side1: ", "Enter value here"));
let side2 = parseInt(prompt("Enter side2: ", "Enter value here"));
let side3 = parseInt(prompt("Enter side3: ", "Enter value here"));

let p = (side1 + side2 + side3) / 2;
let triangleArea = Math.sqrt(p * (p - side1) * (p - side2) * (p - side3));
if (side1 > 0 && side2 > 0 && side3 > 0) {
  console.log("The triangle area is " + triangleArea.toFixed(3));
} else {
  console.log("Incorrect data");
}

if (
  side1 ** 2 === side2 ** 2 + side3 ** 2 ||
  side2 ** 2 === side1 ** 2 + side3 ** 2 ||
  side3 ** 2 === side1 ** 2 + side2 ** 2
) {
  console.log("The triangle is right-angled");
} else {
  console.log("The triangle isn't right-angled");
}

//************************* task7 *************************

//first method
let currHour = new Date().getHours();
if (currHour >= 23 || currHour < 5) {
  alert("Good night");
} else if (currHour >= 5 && currHour < 11) {
  alert("Good morning");
} else if (currHour >= 11 && currHour < 17) {
  alert("Good day");
} else if (currHour >= 17 && currHour < 23) {
  alert("Good evening");
}
alert(greetMessage);

//second method
let currHour2 = new Date().getHours();
currHour2 >= 23 || currHour2 < 5
  ? (alert("Good night"))
  : currHour2 >= 5 && currHour2 < 11
  ? (alert("Good morning"))
  : currHour2 >= 11 && currHour2 < 17
  ? alert("Good day")
  : (alert("Good evening"));
 */