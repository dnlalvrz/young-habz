import { roster } from "./scripts/roster.js";

console.log(roster);

const body = document.querySelector("body");
let date = new Date();
date = date.toDateString();
document.getElementById("date").innerHTML = "Stats for Habs' kids as of " + date; 

const array = [1,2,3,4,5,6,7]
const text = "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris..."

const square = document.createElement("div");
square.className = "square";

const row = document.getElementById("row");

roster.forEach(player => {
    const square = document.createElement("div");
    square.classList.add("square", "col-md-4");
    // square.innerHTML = `${player.name} + ${text}`;
    const image = document.createElement("img");
    image.className = "img-fluid";
    image.src = `${player.image}`;
    const information = document.createElement("div");
    information.innerHTML = `${player.name} + ${text}`;
    square.appendChild(image);
    square.appendChild(information);
    row.appendChild(square);
})
