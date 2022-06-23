import { roster } from "./scripts/roster.js";
import { fetchData, parsedStats } from "./scripts/fetch.js"

console.log(roster);

const body = document.querySelector("body");
let date = new Date();
date = date.toDateString();
document.getElementById("date").innerHTML =
  "Stats for Habs' kids as of " + date;


//function should iterate through each player in "roster"
// to begin, let's display their full name and picture
const showInfo = async () => {
    await fetchData();
    const stats = await parsedStats();
  console.log(stats);
  roster.forEach((player) => {
    if (player.id % 2 === 0) {
      // console.log(`I'm ${player.name} and I am even numbered`);
        const container = document.querySelector('.container');
        const div1 = document.createElement('div');
        div1.classList.add('row', 'justify-content-center', 'no-gutters', 'mb-5', 'mb-lg-0', 'box');
        container.appendChild(div1); 
        const div2 = document.createElement("div");
        div2.classList.add("col-lg-6", "my-auto");
        div1.appendChild(div2);
        const image = document.createElement("img");
        image.className = "img-fluid";
        image.src = `${player.image}`;
        div2.appendChild(image);
        const div3 = document.createElement("div");
        div3.classList.add("col-lg-6");
        div1.appendChild(div3);
        const div4 = document.createElement("div");
        div4.classList.add("bg-black", "text-center", "h-100", "box");
        div3.appendChild(div4);
        const div5 = document.createElement("div");
        div5.classList.add("d-flex", "h-100");
        div5.id = "stats";
        div4.appendChild(div5);
        const div6 = document.createElement("div");
        div6.classList.add(
            "project-text",
            "w-100",
            "my-auto",
            "text-center",
            "text-lg-left",
        );
        div6.id = `${player.id}`;
        div5.appendChild(div6);

        const name = document.createElement("h4");
        name.classList.add("text-white");
        name.innerText = `${player.name}`;
        const born = document.createElement("p");
        born.classList.add("text-white");
        born.innerText = `Home town: ${stats[player.id - 1].birthPlace}`;
        const age = document.createElement("p");
        age.classList.add("text-white");
        age.innerText = `Age: ${stats[player.id - 1].age}`;
        const position = document.createElement("p");
        position.classList.add("text-white");
        position.innerText = `Position: ${stats[player.id - 1].position}`;
        const games = document.createElement("p");
        games.classList.add("text-white");
        games.innerText = `Career games: ${stats[player.id - 1].stats.games}`;
        const goals = document.createElement("p");
        goals.classList.add("text-white");
        goals.innerText = `Career goals: ${stats[player.id - 1].stats.goals}`
        const points = document.createElement("p");
        const sumOfPoints = stats[player.id - 1].stats.goals + stats[player.id - 1].stats.assists;
        points.classList.add("text-white");
        points.innerText = `Career points: ${sumOfPoints}`
        const plusMinus = document.createElement("p");
        plusMinus.classList.add("text-white");
        plusMinus.innerText = `+/-: ${stats[player.id - 1].stats.plusMinus}`
        const timeOnIce = document.createElement("p");
        const averageTimePerGame = stats[player.id - 1].stats.iceTime / stats[player.id - 1].stats.games;
        timeOnIce.classList.add("text-white");
        timeOnIce.innerText = `Avg minutes per game: ${averageTimePerGame.toFixed(2)}`


        div6.append(name,
            born,
            age,
            position,
            games,
            goals,
            points,
            plusMinus,
            timeOnIce
        )
    } else {
      // console.log(`I'm ${player.name} and I am odd numbered`)
        const container = document.querySelector('.container');
        const div1 = document.createElement('div');
        div1.classList.add('row', 'justify-content-center', 'no-gutters', 'mb-5', 'mb-lg-0', 'box');
        container.appendChild(div1);    
        const div2 = document.createElement("div");
        div2.classList.add("col-lg-6");
        div1.appendChild(div2);
        const image = document.createElement("img");
        image.className = "img-fluid";
        image.src = `${player.image}`;
        div2.appendChild(image);
        const div3 = document.createElement("div");
        div3.classList.add("col-lg-6", "order-lg-first");
        div1.appendChild(div3);
        const div4 = document.createElement("div");
        div4.classList.add("bg-black", "text-center", "h-100", "box");
        div3.appendChild(div4);
        const div5 = document.createElement("div");
        div5.classList.add("d-flex", "h-100");
        div5.id = "stats";
        div4.appendChild(div5);
        const div6 = document.createElement("div");
        div6.classList.add(
            "player-stats",
            "project-text",
            "w-100",
            "my-auto",
            "text-center",
            "text-lg-right"
        );
        div6.id = `${player.id}`;
        div5.appendChild(div6);

        const name = document.createElement("h4");
        name.classList.add("text-white");
        name.innerText = `${player.name}`;
        const born = document.createElement("p");
        born.classList.add("text-white");
        born.innerText = `Home town: ${stats[player.id - 1].birthPlace}`;
        const age = document.createElement("p");
        age.classList.add("text-white");
        age.innerText = `Age: ${stats[player.id - 1].age}`;
        const position = document.createElement("p");
        position.classList.add("text-white");
        position.innerText = `Position: ${stats[player.id - 1].position}`;
        const games = document.createElement("p");
        games.classList.add("text-white");
        games.innerText = `Career games: ${stats[player.id - 1].stats.games}`;
        const goals = document.createElement("p");
        goals.classList.add("text-white");
        goals.innerText = `Career goals: ${stats[player.id - 1].stats.goals}`
        const points = document.createElement("p");
        const sumOfPoints = stats[player.id - 1].stats.goals + stats[player.id - 1].stats.assists;
        points.classList.add("text-white");
        points.innerText = `Career points: ${sumOfPoints}`
        const plusMinus = document.createElement("p");
        plusMinus.classList.add("text-white");
        plusMinus.innerText = `+/-: ${stats[player.id - 1].stats.plusMinus}`
        const timeOnIce = document.createElement("p");
        const averageTimePerGame = stats[player.id - 1].stats.iceTime / stats[player.id - 1].stats.games;
        timeOnIce.classList.add("text-white");
        timeOnIce.innerText = `Avg minutes per game: ${averageTimePerGame.toFixed(2)}`


        div6.append(name,
            born,
            age,
            position,
            games,
            goals,
            points,
            plusMinus,
            timeOnIce
        )
        }
    });
};

showInfo();
