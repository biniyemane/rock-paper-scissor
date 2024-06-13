// Define the hands array
const hands = ['rock', 'paper', 'scissors'];

//A function to get a hand
const getHand = () => {return hands[parseInt(Math.random() * 10) % 3];}

//Defining two objects for two players
const tedy = {
    name: "Tedy",
    getHand: getHand
};

const bini = {
    name: "Bini",
    getHand: getHand,
};

//Function to determine the winner of the round
const playRound = (tedy, bini) => {
    const tedyHand = tedy.getHand();
    const biniHand = bini.getHand();

    console.log(`${tedy.name} played ${tedyHand}`);
    console.log(`${bini.name} played ${biniHand}`);


if (tedyHand === biniHand) {
    console.log("It's a tie!");
    return null;
} else if (
    (tedyHand === 'rock' && biniHand === 'scissors') ||
    (tedyHand === 'paper' && biniHand === 'rock') ||
    (tedyHand === 'scissors' && biniHand === 'paper')
) {
    console.log(`${tedy.name} wins!`);
    return tedy;
} else {
    console.log(`${bini.name} wins!`);
    return bini;
}
}
// Play a round
playRound(tedy, bini);
