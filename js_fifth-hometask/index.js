//******************** Fifth hometask *********************

//-------------------------------------Task 1-----------------------------

function propsCount(currentObject) {
  let result;
  result = Object.keys(currentObject).length;
  return result;
}

//----------------------

function propsCount(currentObject) {
  return Object.keys(currentObject).length;
}
propsCount(mentor);

//-------------------------------------Task 2-----------------------------

let vinylRecord = {
  recordType: "LP",
  recordName: "A Kind Of Magic",
  recordPerformer: "Queen",
  releaseYear: 1986,
  recordPrice: 22,
};

function showProps(obj) {
  return Object.keys(obj);
}

function showProps(obj) {
  return Object.values(obj);
}

//-------------------------------------Task 3-----------------------------

class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  showFullName() {
    console.log(this.name + " " + this.surname);
  }
}
let myPerson = new Person("Petro", "Petrenko");
myPerson.showFullName();

class Student extends Person {
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
  }
  showFullName(middleName) {
    console.log(this.name + " " + this.surname + " " + middleName);
    //super.showFullName();
  }
  showCourse() {
    let currentYear = new Date().getFullYear();
    let currentCourse = currentYear - this.year;
    return currentCourse;
  }
}

let stud1 = new Student("Petro", "Petrenko", 2019);
stud1.showFullName("Petrovych");
stud1.showCourse();

//-------------------------------------Task 4-----------------------------
let workersList = [];

class Worker {
  #experience = 1.2;
  get showExp() {
    return this.#experience;
  }
  set setExp(value) {
    this.#experience = value;
  }

  constructor(fullName, dayRate, workingDays) {
    this.fullName = fullName;
    this.dayRate = dayRate;
    this.workingDays = workingDays;
    workersList.push(this);
  }
  showSalary() {
    let salary = this.dayRate * this.workingDays;
    return this.fullName + " salary: " + salary;
  }
  showSalaryWithExperience() {
    let salaryExp = this.dayRate * this.workingDays * this.#experience;
    return this.fullName + " salary: " + salaryExp;
  }
  showSalaryWorker() {
    return `${this.dayRate * this.workingDays * this.#experience}`;
  }
  sortSalaries(workersArray) {
    let sortedSalary = workersArray.sort(function (a, b) {
      return a.showSalaryWorker() - b.showSalaryWorker();
    });
    for (let i = 0; i < sortedSalary.length; i++) {
      console.log(
        sortedSalary[i].fullName + ": " + sortedSalary[i].showSalaryWorker()
      );
    }
  }
}
let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);
worker1.showSalary();
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();
worker1.setExp = 1.5;
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();

let worker2 = new Worker("Tom Tompson", 48, 22);
console.log(worker2.fullName);
worker2.showSalary();
console.log("New experience: " + worker2.showExp);
worker2.showSalaryWithExperience();
worker2.setExp = 1.5;
console.log("New experience: " + worker2.showExp);
worker2.showSalaryWithExperience();

let worker3 = new Worker("Andy Anderson", 29, 23);
console.log(worker3.fullName);
worker3.showSalary();
console.log("New experience: " + worker3.showExp);
worker3.showSalaryWithExperience();
worker3.setExp = 1.5;
console.log("New experience: " + worker3.showExp);
worker3.showSalaryWithExperience();

//-------------------------------------Task 5-----------------------------

class GeometricFigure {
  getArea() {
    return 0;
  }
  toString() {
    return Object.getPrototypeOf(this).constructor.name;
  }
}

class Triangle extends GeometricFigure {
  constructor(base, height) {
    super();
    this.base = base;
    this.height = height;
  }

  getArea() {
    return (this.base * this.height) / 2;
  }
}

class Square extends GeometricFigure {
  constructor(a) {
    super();
    this.a = a;
  }
  getArea() {
    return this.a ** 2;
  }
}

class Circle extends GeometricFigure {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  getArea() {
    return Math.PI * this.radius ** 2;
  }
}

function handleFigures(figures) {
  return figures.reduce(function (sum, figure) {
    if (figure instanceof GeometricFigure) {
      console.log(
        `Geometric figure: ${figure.toString()} - area: ${figure.getArea()}`
      );
      return sum + figure.getArea();
    }
    throw Error("Bad argument figure");
  }, 0);
}
