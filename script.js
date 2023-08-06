"use strict";

document.addEventListener("keydown", pressed);

function pressed(e) {
    console.log(`${e.key} is clicked!`);
    let myArr = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G"];
    if (myArr.includes(e.key.charAt(0).toUpperCase())) {
        console.log(`${e.key} is clicked!`);
        let clickedVal = e.key.charAt(0).toUpperCase();
        let buttons = document.querySelectorAll(".btnStyle");
        for (let i = 0; i < buttons.length; i++) {
            if (buttons[i].textContent === clickedVal) {
                buttons[i].style.opacity = "0.6";
            }
        }
    }
}