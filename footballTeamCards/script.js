let footballTeam = {
  team : "Team Horry Sheet",
  year : 2003,
  headCoach : 'Horry Sheet',
  players : [
    {
      name:"Player 1",
      position: "forward",
      isCaptain: true    
    },
    {name:"Player 2",
      position: "midfielder",
      isCaptain: false },
    {name:"Player 3",
      position: "defender",
      isCaptain: false },
    {name:"Player 4",
      position: "goalkeeper",
      isCaptain: false },
    {name:"Player 5",
      position: "defender",
      isCaptain: false },
    {name:"Player 6",
      position: "midfielder",
      isCaptain: false },
  ],
 
};

const teams = document.getElementById('team');
const years = document.getElementById('year');
const headCoachs= document.getElementById('head-coach');

teams.innerHTML = footballTeam.team;
years.innerHTML = footballTeam.year;
headCoachs.innerHTML = footballTeam.headCoach;

const select = document.getElementById('players');
const cardsDiv = document.getElementById('player-cards');

function showPlayerCards(playerPosition){
  const players = 
    playerPosition === "all" 
    ? footballTeam.players 
    : footballTeam.players.filter( 
      ({position}) => position == playerPosition
    );

  function playerCaptain(arr){
    if (arr.isCaptain == true){
      arr.isCaptain = false;
        return `
      <div class="player-card">
        <h2>(Captain) ${arr.name}</h2>
        <p>Position: ${arr.position}</p>
      </div>`
        
    }

    return `
      <div class="player-card">
        <h2>${arr.name}</h2>
        <p>Position: ${arr.position}</p>
      </div>`
  }

  return (players.map(playerCaptain)).join('')  

}
 
select.addEventListener('change', () =>{
  cardsDiv.innerHTML = showPlayerCards(select.value)
})