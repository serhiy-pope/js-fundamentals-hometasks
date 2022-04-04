/* //******************** Third hometask *********************

//************************* task1 *************************

//for-loop
let forArr = [2, 3, 4, 5];
let total = 1;
for (let i = 0; i < forArr.length; i++) {
  total *= forArr[i];
}
console.log(total);

//while-loop
let whileArr = [2, 3, 4, 5];
let total1 = 1;
let i = 0;
while (i < whileArr.length) {
  total *= whileArr[i];
  i++;
}
console.log(total);

//************************* task2 *************************
let oddEvenArr = [];
for (let i = 0; i < 16; i++) {
  oddEvenArr.push(i);
  if (oddEvenArr[i] % 2 === 0) {
    alert(i + " is even");
  } else {
    alert(i + " is odd");
  }
}
console.log(oddEvenArr);

//************************* task3 *************************

//first-method
let k = [];
for (let i = 0; i < 5; i++) {
  k.push(i);
  function randArray(k) {
    return Math.floor(Math.random() * 500);
  }
  k[i] = randArray(k);
}
console.log(k);

//second-method
function randArray(k) {
  return Math.floor(Math.random() * 500);
}
let k1 = [];
for (let i = 0; i < 5; i++) {
  k1.push(i);
  k1[i] = randArray(k1);
}
console.log(k1);

//************************* task4 *************************
function raiseToDegree(a, b) {
  a = prompt("Enter a number to raise to degree");
  b = prompt("Enter a degree value");
  return a ** b;
}
console.log(raiseToDegree());

//************************* task5 *************************
function findMin() {
  minimum = arguments[0];
  for (let i = 0; i < arguments.length; i++) {
    if (minimum > arguments[i]) {
      minimum = arguments[i];
    }
  }
  return minimum;
}
findMin(12, 14, 4, -4, 0.2);

//************************* task6 *************************
//first method
function findUnique() {
  let k = 0;
  for (let i = 0; i < arguments.length; i++) {
    for (let j = 0; j < arguments.length; j++) {
      if (arguments[i] == arguments[j]) {
        k++;
      }
    }
  }
  if (k == arguments.length) {
    return true;
  } else {
    return false;
  }
}
//second method
function findUnique(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        return false;
      }
    }
  }
  return true;
}

//************************* task7 *************************
function lastElem(arr, count) {
  if (count == null) {
    console.log(arr.pop());
  } else {
    console.log(arr.slice(-count));
  }
}
console.log(lastElem([3, 4, 10, -5]));
console.log(lastElem([3, 4, 10, -5], 2));
console.log(lastElem([3, 4, 10, -5], 8));

//************************* task8 *************************
function bigFirstLetters(str) {
  const newArray = str.split(" ");
  const newArray1 = [];
  for (i = 0; i < newArray.length; i++) {
    newArray1.push(newArray[i].charAt(0).toUpperCase() + newArray[i].slice(1));
  }
  return newArray1.join(" ");
}
console.log(bigFirstLetters("i love java script"));
 */