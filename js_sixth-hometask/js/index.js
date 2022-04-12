//******************** Sixth hometask *********************

//-------------------------------------Task 1-----------------------------

function changeCSS(event) {
  let btn = document.getElementById("text");
  btn.addEventListener("click", changeCSS);
  event.target.style.backgroundColor = "orange";
}
