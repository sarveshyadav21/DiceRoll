const dice1 = document.getElementById('dice1');
const dice2 = document.getElementById('dice2');
const resultText = document.getElementById('result-text');
const rollOneDiceButton = document.getElementById('roll-one-dice');
const rollTwoDiceButton = document.getElementById('roll-two-dice');

// Dice faces Unicode characters
const diceFaces = [
    "⚀", "⚁", "⚂", "⚃", "⚄", "⚅"
];

// Function to roll a dice
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

// Function to show dice rolling animation
function animateDice(dice, value) {
    dice.style.opacity = '0';
    setTimeout(() => {
        dice.textContent = diceFaces[value - 1];
        dice.style.opacity = '1';
    }, 300);
}

// Roll one dice
rollOneDiceButton.addEventListener('click', () => {
    const diceValue = rollDice();
    animateDice(dice1, diceValue);
    dice2.style.opacity = '0'; // Hide second dice if rolling one
    resultText.textContent = `You rolled a ${diceValue}!`;
});

// Roll two dice
rollTwoDiceButton.addEventListener('click', () => {
    const diceValue1 = rollDice();
    const diceValue2 = rollDice();
    animateDice(dice1, diceValue1);
    animateDice(dice2, diceValue2);
    resultText.textContent = `You rolled a ${diceValue1} and a ${diceValue2}!`;
});
