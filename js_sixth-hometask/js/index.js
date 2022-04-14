//******************** Sixth hometask *********************

//-------------------------------------Task 1-----------------------------
let id = (document.getElementById("test").innerHTML = "Last");
alert(id);

document.body.children[0].innerHTML = "Last1111";
alert(document.body.children[0].innerHTML);

//-------------------------------------Task 2-----------------------------
let img = (document.body.getElementsByClassName("image").src =
  "/js_sixth-hometask/img/cat.jpeg");
alert(img);

//-------------------------------------Task 3-----------------------------
let pArr = [];
let p = document.querySelectorAll("#text > p");
for (let i = 0; i < p.length; i++) {
  pArr.push(p[i]);
  console.log("Selector text " + [i] + ": " + pArr[i].innerHTML);
}

//-------------------------------------Task 4-----------------------------
//fistMethod
console.log(document.getElementById("list").firstElementChild.innerHTML);
console.log(document.getElementById("list").lastElementChild.innerHTML);
console.log(
  document.getElementById("list").firstElementChild.nextElementSibling.innerHTML
);
console.log(
  document.getElementById("list").lastElementChild.previousElementSibling
    .innerHTML
);
console.log(document.getElementById("list").children[2].innerHTML);

//secondMethod
console.log(document.getElementById("list").children[0].innerHTML);
console.log(document.getElementById("list").children[4].innerHTML);
console.log(document.getElementById("list").children[1].innerHTML);
console.log(document.getElementById("list").children[3].innerHTML);
console.log(document.getElementById("list").children[2].innerHTML);

//-------------------------------------Task 5-----------------------------
document.body.children[6].style.backgroundColor = "yellowgreen";

myDiv.firstElementChild.style.fontWeight = "bold";

myDiv.children[1].style.color = "red";

myDiv.children[2].style.textDecoration = "underline";

myDiv.children[3].style.fontStyle = "italic";

document.body.children[9].style.display = "none";

//-------------------------------------Task 6-----------------------------
let input1 = prompt();
document.getElementById("input1").value = input1;

let input2 = prompt();
document.getElementById("input2").value = input2;

function changePlaces(a, b) {
  a = document.getElementById("input2").value = input1;
  input1 = a;
  b = document.getElementById("input1").value = input2;
  input2 = b;
}
changePlaces(input1, input2);

//-------------------------------------Task 7-----------------------------
