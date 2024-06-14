// Define the hands array
const hands = ['rock', 'paper', 'scissors'];

// Define the getHand function
function getHand() {
    return hands[parseInt(Math.random() * 10) % 3];
}

// Define two player objects
const player1 = {
    name: 'Player 1',
    getHand: getHand,
    wins: 0
};

const player2 = {
    name: 'Player 2',
    getHand: getHand,
    wins: 0
};

// Define the playRound function
function playRound(player1, player2) {
    // Get hands from each player
    const player1Hand = player1.getHand();
    const player2Hand = player2.getHand();
    
    // Log the hands played
    console.log(`${player1.name} played ${player1Hand}`);
    console.log(`${player2.name} played ${player2Hand}`);

    // Determine the winner
    let winner = null;
    if (player1Hand === player2Hand) {
        console.log("It's a tie");
    } else if (
        (player1Hand === 'rock' && player2Hand === 'scissors') ||
        (player1Hand === 'paper' && player2Hand === 'rock') ||
        (player1Hand === 'scissors' && player2Hand === 'paper')
    ) {
        winner = player1;
        console.log(`${player1.name} wins this round!`);
        player1.wins += 1;
    } else {
        winner = player2;
        console.log(`${player2.name} wins this round!`);
        player2.wins += 1;
    }

    // Return the winner object (null if no winner)
    return winner;
}


function playGame(player1, player2, playUntil) {
    player1.wins = 0;
    player2.wins = 0;

    while (player1.wins < playUntil && player2.wins < playUntil) {
        playRound(player1, player2);
    }

    let winner = player1.wins === playUntil ? player1 : player2;
    console.log(`${winner.name} wins the game!`);
    return winner;
}

// Define the playTournament function
function playTournament(players, playUntil) {
    const firstGame = playGame(players[0], players[1], playUntil);
    const secondGame = playGame(players[2], players[3], playUntil);
    
    const tournamentWinner = playGame(firstGame, secondGame, playUntil);
    console.log(`${tournamentWinner.name} is the world champion!`);
}

// Example of how to use playTournament
const player3 = {
    name: 'Player 3',
    getHand: getHand,
    wins: 0
};

const player4 = {
    name: 'Player 4',
    getHand: getHand,
    wins: 0
};

playTournament([player1, player2, player3, player4], 3);

