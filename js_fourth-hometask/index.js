//******************** Fourth hometask *********************

//************************* task1 *************************
function calcRectangleArea(width, height) {
  return width * height;
}
try {
  calcRectangleArea(5, e);
} catch (error) {
  alert("Incorrect data");
}

//************************* task2 *************************
function checkAge(userAge) {
  userAge = prompt("Enter your age");
  if (userAge > 14) {
    alert("You are allowed to see this movie. Click 'Ok' to continue!");
  } else {
    throw userAge;
  }
}
try {
  checkAge();
} catch (userAge) {
  if (userAge == "") {
    alert("The field is empty! Please enter your age.");
  } else if (userAge < 14) {
    alert("Error! You haven't reached the age of 14.");
  } else {
    alert("Error! Entered value is not a number.");
  }
}

//************************* task3 *************************

//************************* task4 *************************
function showUser(id) {
  if (id < 0) {
    alert("Error: ID must not be negative:" + id);
  } else {
    id = {
      userID: id,
    };
  }
  return id;
}

function showUsers(ids) {
  let arrOfObjects = [];
  for (let i = 0; i < ids.length; i++) {
    showUser(ids[i]);
    arrOfObjects.push(showUser());
  }
  console.log(arrOfObjects);
}
showUsers([12, 34, 56, 78]);

