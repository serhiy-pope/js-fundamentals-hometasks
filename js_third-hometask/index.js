//******************** Third hometask *********************


//************************* task1 *************************

//for-loop
let forArr = [2, 3, 4, 5];
let total = 1;
for (i = 0; i < forArr.length; i++) {
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
    return arguments[Math.min];
  }
  findMin(12, 14, 4, -4, 0.2);
  console.log(findMin());
  