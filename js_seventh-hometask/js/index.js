//******************** Seventh hometask *********************

//-------------------------------------Task 1-----------------------------
function openWin() {
  myWindow = window.open("", "", "width=300, height=300");
}

function resizeWin() {
  myWindow.resizeTo(500, 500);
}

function moveWin() {
  myWindow.moveTo(200, 200);
}

function closeWin() {
  myWindow.close();
}

setTimeout(() => {
    openWin();
    setTimeout(() => {
      resizeWin();
      setTimeout(() => {
        moveWin();
        setTimeout(() => {
          closeWin();
        }, 2000);
      }, 2000);
    }, 2000);
  }, 2000);

//-------------------------------------Task 2-----------------------------
function changeCSS() {
  text.style.color = "orange";
  text.style.fontSize = "20px";
  text.style.fontFamily = "Comic Sans MS";
}

//-------------------------------------Task 3-----------------------------
function changeBlue() {
  bckgrnd.style.backgroundColor = "lightblue";
}
function changePink() {
  bckgrnd.style.backgroundColor = "pink";
}
function changeBrown() {
  bckgrnd.style.backgroundColor = "#C4A484";
}
function changeWhite() {
  bckgrnd.style.backgroundColor = "white";
}
function changeYellow() {
  bckgrnd.style.backgroundColor = "yellow";
}

myBtn1.addEventListener("click", changeBlue);
myBtn2.addEventListener("dblclick", changePink);
myBtn3.addEventListener("mousedown", changeBrown);
myBtn3.addEventListener("mouseup", changeWhite);
myLink.addEventListener("mouseover", changeYellow);
myLink.addEventListener("mouseout", changeWhite);

//-------------------------------------Task 4-----------------------------
function removeListElem() {
  namesToDelete.removeChild(namesToDelete.selectedIndex);
}
deleteBtn.addEventListener("click", removeListElem);

//-------------------------------------Task 5-----------------------------

function createTextOnClick() {
  let newTag = document.createElement("div");
  let newText = document.createTextNode("I was pressed!");
  newTag.appendChild(newText);
  let element = document.getElementById("newElem");
  element.appendChild(newTag);
}
createBtn.addEventListener("click", createTextOnClick);

function createTextOnHover() {
  let newTag = document.createElement("div");
  let newText = document.createTextNode("Mouse on me!");
  newTag.appendChild(newText);
  let element = document.getElementById("newElem");
  element.appendChild(newTag);
}
createBtn.addEventListener("mouseover", createTextOnHover);

function createTextOnUnhover() {
  let newTag = document.createElement("div");
  let newText = document.createTextNode("Mouse is not on me!");
  newTag.appendChild(newText);
  let element = document.getElementById("newElem");
  element.appendChild(newTag);
}
createBtn.addEventListener("mouseout", createTextOnUnhover);

//-------------------------------------Task 6-----------------------------
function getWindowWidth() {
  let windowWidth = window.innerWidth;
  let result = windowWidth;
  windowWSize.innerHTML = "Width: " + result + ",";
}

function getWindowHeight() {
  let windowHeight = window.innerHeight;
  let result = windowHeight;
  windowHSize.innerHTML = "Height: " + result;
}

window.addEventListener("resize", getWindowWidth);
window.addEventListener("resize", getWindowHeight);

//-------------------------------------Task 7-----------------------------
function createGermanCitiesList() {
  let germanCities = ["Frankfurt", "Berlin", "Kohln"];
 
  let select = document.createElement("select");
  select.name = "gerCities";
  select.id = "gerCities"
 
  for (let gerCity of germanCities)
   {
    let option = document.createElement("option");
    option.value = gerCity;
    option.text = gerCity.charAt(0).toUpperCase() + gerCity.slice(1);
    select.appendChild(option);
    } 
  document.getElementById("cities").appendChild(select);
}

function createUSACitiesList() {
  let usaCities = ["New York", "Chicago", "Miami"];
 
  let select = document.createElement("select");
  select.name = "usaCities";
  select.id = "usaCities"
 
  for (let usaCity of usaCities)
   {
    let option = document.createElement("option");
    option.value = usaCity;
    option.text = usaCity.charAt(0).toUpperCase() + usaCity.slice(1);
    select.appendChild(option);
    } 
  document.getElementById("cities").appendChild(select);
}


function createUACitiesList() {
  let uaCities = ["Kyiv", "Lviv", "Odesa"];
 
  let select = document.createElement("select");
  select.name = "uaCities";
  select.id = "uaCities"
 
  for (let uaCity of uaCities)
   {
    let option = document.createElement("option");
    option.value = uaCity;
    option.text = uaCity.charAt(0).toUpperCase() + uaCity.slice(1);
    select.appendChild(option);
    } 
  document.getElementById("cities").appendChild(select);
}

if (document.body.firstElementChild.children[0].innerHTML == "Germany") {
    createGermanCitiesList();
}

if (document.body.firstElementChild.children[1].innerHTML == "USA") {
    createUSACitiesList();
}

if (document.body.firstElementChild.children[2].innerHTML == "Ukraine") {
    createUACitiesList();
}
