// CHALLENGE 1

'use strict';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1
const [players1, players2] = game.players;
console.log(players1);
console.log(players2);

// 2
const [gk, ...fieldPlayers] = players1;
console.log(gk);
console.log(fieldPlayers);

// 3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4
const players1Final = [...allPlayers, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// 5
const { team1, x: draw, team2 } = game.odds;
//or
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
console.log(team1, draw, team2);

// 6
const printGoals = function (...playerNames) {
  console.log(`${playerNames.length} goals were scored by:`);
  for (let i = 0; i < playerNames.length; i++) {
    console.log(`${playerNames[i]}`);
  }
};
printGoals(...game.scored);

// 7
team1 < team2 && team1 < draw && console.log('Team 1 wins');
team2 < team1 && team2 < draw && console.log('Team 2 wins');
draw < team1 && draw < team2 && console.log('It was a draw');

// CHALLENGE 2

// 1
for (const [i, player] of game.scored.entries())
  console.log(`Goal ${i + 1}: ${player}`);

// 2
let avgOdd = 0;
for (const odd of Object.values(game.odds)) avgOdd += odd;
console.log(`Average odd is: ${avgOdd / Object.values(game.odds).length}`);

// 3
for (const [teamName, odds] of Object.entries(game.odds))
  console.log(`Odds of ${game[teamName] ?? 'draw'}: ${odds}`);

// 4
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);

// CHALLENGE 3

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

//eventSet.size
//eventSet.has('item')
//eventSet.add('item')
//eventSet.delete('item')
//gameEvents.set('9','something else')
//gameEvents.get('9') // returns 'something else'
//gameEvents.keys()
//gameEvents.entries()
//gameEvents.values()

// 1
const [...events] = new Set(gameEvents.values());
// or
// const events = [...new Set(gameEvents.values()]
console.log(events);

// 2
gameEvents.delete(64);
console.log(gameEvents);

// 3
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);
// or
// console.log(`blah ${[...gameEvents.keys()].pop() / gameEvents.size}`);

// 4
let [...gameKeys] = gameEvents.keys();
for (let i = 0; i < gameKeys.length; i++) {
  console.log(
    `[${gameKeys[i] <= 45 ? 'FIRST' : 'SECOND'} HALF] ${
      gameKeys[i]
    } : ${gameEvents.get(gameKeys[i])}`
  );
}
// or
//for (const [min, event] of gameEvents) {
// const half = min <= 45 ? 'FIRST' : 'SECOND';
// console.log(`[${half} HALF] ${min}: ${event}`);
//}

// CHALLENGE 4
const camelCase = function (varName) {
  let processedName = varName.toLowerCase().trim().split('_');
  return (
    processedName[0] +
    processedName[1].replace(
      processedName[1][0],
      processedName[1][0].toUpperCase()
    )
  );
};

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

let text;

document.querySelector('button').addEventListener('click', function () {
  text = document.querySelector('textarea').value.split('\n');
  for (const i in text) {
    console.log(
      `${camelCase(text[i]).padEnd(25)} ${'✅'.repeat(Number(i) + 1)}`
    );
  }
});
