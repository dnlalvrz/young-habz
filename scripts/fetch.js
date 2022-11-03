import { roster } from "./roster.js";

// function that makes a call to each of the player's URL and saves
// the returned data in an array of objects called "response"
const fetchData = async () => {
  try {
    const response = await Promise.all(
      roster.map((player) => fetch(player.url).then((res) => res.json()))
    );
    // console.log(response);
    return response;
  } catch (error) {
    console.log("Error", error);
  }
};

// parse the response
export const parsedStats = async () => {
  const playerArray = [];
  const stats = await fetchData();

  stats.forEach((player) => {
    const yearlyStats = [];
    player.people[0].stats[0].splits.forEach((season) => {
      if (season.league.id === 133) yearlyStats.push(season);
    });
    playerArray.push({
      id: player.people[0].id,
      name: player.people[0].fullName,
      birthPlace: `${player.people[0].birthCity}, ${player.people[0].birthCountry}`,
      age: player.people[0].currentAge,
      position: player.people[0].primaryPosition.name,
      // stats: yearlyStats,
      stats: {
        games: yearlyStats.reduce((accum, item) => accum + item.stat.games, 0),
        goals: yearlyStats.reduce((accum, item) => accum + item.stat.goals, 0),
        assists: yearlyStats.reduce(
          (accum, item) => accum + item.stat.assists,
          0
        ),
        plusMinus: yearlyStats.reduce(
          (accum, item) => accum + item.stat.plusMinus,
          0
        ),
        iceTime: yearlyStats.reduce(
          (accum, item) => accum + parseInt(item.stat.timeOnIce),
          0
        ),
      },
    });
  });
  return playerArray;
};
