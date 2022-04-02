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
    userAge = prompt ("Enter your age");
    if (userAge > 14) {
        alert("You are allowed to see this movie. Click 'here' to continue!")
    } else {
        alert("The field is empty! Please enter your age")
    } 
}
try {
    checkAge();
} catch (error) {
    alert("SyntaxError")
}

/* try {
    checkAge();
} catch (error) {
    if(userAge != Number) {
        alert("Error! The value is Not a number.")
}
}
try {
    checkAge();
} catch (error) {
    if(userAge < 14) {
        alert("You haven't reached the of 14")
    }
} */