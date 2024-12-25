//Change color Light /Dark

let dataTheme;
let themeStateMem = localStorage.getItem("DarkTheme");
const btnDarkLight = document.getElementById("dark-theme");
const titlesCard = document.querySelectorAll(".changeColor");
const bodyPage = document.getElementsByTagName("body")[0];

function toDarkTheme() {
  btnDarkLight.classList.remove("bi-lightbulb");
  btnDarkLight.classList.add("bi-lightbulb-fill");
  bodyPage.style.background = "#000000";
  titlesCard.forEach((titles) => {
    titles.classList.add("text-white");
  });
}

function toLightTheme() {
  console.log(dataTheme);
  btnDarkLight.classList.remove("bi-lightbulb-fill");
  btnDarkLight.classList.add("bi-lightbulb");
  bodyPage.style.background = "white";
  titlesCard.forEach((titles) => {
    titles.classList.remove("text-white");
  });
}

function addCookieTheme() {
  if(localStorage.getItem("DarkTheme") === null || localStorage.getItem("DarkTheme") === undefined) {
    dataTheme = false;
    localStorage.setItem("DarkTheme", dataTheme);
    console.log(themeStateMem);
  }
  else {
    dataTheme = localStorage.getItem("DarkTheme");
  }
}

function changeTheme() { 
  console.log(dataTheme);
  localStorage.setItem("DarkTheme", dataTheme);
   if(dataTheme === "true" || dataTheme === true) {
    console.log(dataTheme);
      toDarkTheme();
   }
   else if(dataTheme === "false" || dataTheme === false) {
     toLightTheme();
   }
   return themeStateMem;
   
  
}

btnDarkLight.addEventListener("click", (e) => {
  e.preventDefault();
   dataTheme = !dataTheme;
   changeTheme();
});

document.body.onload = () => {
  console.log(dataTheme);
  addCookieTheme();
  changeTheme();
};


