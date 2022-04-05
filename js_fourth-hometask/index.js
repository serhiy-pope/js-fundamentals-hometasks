//******************** Fourth hometask *********************

//************************* task1 *************************
function calcRectangleArea(width, height) {
  if (isNaN(width) || isNaN(height)) {
    throw Error("Incorrect data");
  } else {
    return width * height;
  }
}
try {
  calcRectangleArea(5, "e");
} catch (error) {
  alert(error);
}

//************************* task2 *************************
function checkAge(userAge) {
  userAge = prompt("Enter your age");
  if (userAge > 14) {
    alert("You are allowed to see this movie. Click 'Ok' to continue!");
  } else if (userAge == "") {
    throw Error("The field is empty! Please enter your age.");
  } else if (userAge < 14) {
    throw Error("You haven't reached the age of 14.");
  } else {
    throw Error("Entered value is not a number.");
  }
}
try {
  checkAge();
} catch (Error) {
  alert(Error);
}

//************************* task3 *************************

//************************* task4 *************************
function showUser(id) {
  if (id < 0) {
    throw Error("ID must not be negative: " + id);
  } else {
    return { userID: id };
  }
}

function showUsers(ids) {
  let arrOfObjects = [];
  ids.forEach(function(id) {
    try {
      let user = showUser(id);
      arrOfObjects.push(user);
    } catch (Error) {
      console.log(Error);
    }
  });
  console.log(arrOfObjects);
}
showUsers([7, -12, 44, 22]);
