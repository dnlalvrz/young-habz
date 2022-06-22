// function that makes a call to each of the player's URL and saves
// the returned data in an array of objects called "response"
export const fetchData = async () => {
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

// function that creates the <p> elements with stats inside
export const displayStats = async () => {
  const playerData = await fetchData();
  console.log(playerData);
  playerData.forEach((element, index) => {
    console.log(element.people[0].primaryNumber);
  });
};
