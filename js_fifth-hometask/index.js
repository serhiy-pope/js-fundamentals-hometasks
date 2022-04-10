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
    let currentYear = 2020;
    let currentCourse = currentYear - this.year;
    return currentCourse;
  }
}

let stud1 = new Student("Petro", "Petrenko", 2015);
stud1.showFullName("Petrovych");
stud1.showCourse();

//-------------------------------------Task 4-----------------------------

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
  }
  showSalary() {
    let salary = this.dayRate * this.workingDays;
    return this.fullName + " salary: " + salary;
  }
  showSalaryWithExperience() {
    let salaryExp = this.dayRate * this.workingDays * this.#experience;
    return this.fullName + " salary: " + salaryExp;
  }
}

//-------------------------------------Task 4-----------------------------

class GeometricFigure {
  getArea() {
    return 0;
  }
  toString() {
    return Object.getPrototypeOf(this).constructor.name;
  }
}

class Triangle {
  constructor () {

  }
}

class Square {}

class Circle {}
