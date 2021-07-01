let toggleDarkModeBtn = document.querySelector("#toggleDarkModeBtn");
let btnSwitch = document.querySelector(".switch");


function toggleDarkMode(){
    if(btnSwitch.classList.contains("darkModeActive")){
        btnSwitch.classList.remove("darkModeActive");

    }else{
        btnSwitch.classList.add("darkModeActive");
    }

}


function init(){
    toggleDarkModeBtn.addEventListener("click", toggleDarkMode);


}


window.onload = init();