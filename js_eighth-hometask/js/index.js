//******************** Eighth hometask *********************

//-------------------------------------Task1-----------------------------
function upperCase(string) {
  let result = /[A-Z]/.test(string.charAt(0));
  if (result === true) {
    console.log("String's starts with uppercase character");
  } else {
    console.log("String's not starts with uppercase character");
  }
}
upperCase("regexp");
upperCase("RegExp");

//-------------------------------------Task2-----------------------------
function checkEmail(email) {
  let result = /\S+@\S+\.\S+/.test(email);
  console.log(result);
}
checkEmail("Qmail2@gmail.com");
checkEmail("Qmail2@gmail");
checkEmail("Qmail2gmail.com");

//-------------------------------------Task3-----------------------------
let str = "cdbBdbsbz";
let str1 = /d{1}b+d{1}|bd{1}|d{1}/i;
let result = str.match(str1);
console.log(result);

//-------------------------------------Task4-----------------------------
let changePlaces = "Java Script";
console.log(changePlaces.replace(/([\w ]+) ([\w ]+)/g, "$2, $1"));

//-------------------------------------Task5-----------------------------
function validateCardNumber() {
  let cardNumber = prompt("Enter your card number");
  let checkNumber = /^(?:[0-9]{16}|[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4})$/;
  if (checkNumber.test(cardNumber) === true) {
    console.log("Your card number is correct");
  } else {
    console.log("Your card number is not correct");
  }
}
validateCardNumber();

//-------------------------------------Task6-----------------------------
function checkEmail(emailAddress) {
  let validateEmail = /^[^-_#]\w+-{0,1}\w+@\w+\.\w+/;
  if (emailAddress.match(validateEmail)) {
    console.log("Email is correct!");
  } else {
    console.log("Email is not correct!");
  }
}

checkEmail("mymail@gmail.com");
checkEmail("my_mail@gmail.com");
checkEmail("my-mail@gmail.com");

checkEmail("#my_mail@gmail.com");
checkEmail("my_ma--il@gmail.com");
checkEmail("-my_mail@gmail.com");
checkEmail("my%mail@gmail.com");

//-------------------------------------Task7-----------------------------
function checkLogin(userLogin) {
  let validateLogin = /^[^\d]\w{2,10}/;

  let findDigits = /\d/;
  let result = userLogin.search(findDigits);
  console.log(result);

  if (userLogin.match(validateLogin)) {
    console.log(true);
  } else {
    console.log(false);
  }
}

checkLogin("ee1.1ret3");
checkLogin("ee1*1ret3");
