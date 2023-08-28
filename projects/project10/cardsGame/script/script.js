const cards = [
    'images/appleBloom.webp', 'images/appleBloom.webp',
    'images/applejack.webp', 'images/applejack.webp',
    'images/fluttershy.webp', 'images/fluttershy.webp',
    'images/scootaloo.png', 'images/scootaloo.png',
    'images/sweetiebelle.png', 'images/sweetiebelle.png',
];

const gameContainer = document.querySelector('.game-container');
const resetButton = document.getElementById('reset-button');
const timerElement = document.getElementById('timer');
const pairsGuessedElement = document.getElementById('pairs-guessed');

let flippedCards = [];
let matchedPairs = 0;
let timer = 0;
let isFlipping = false;

function flipCard() {
    if (isFlipping || flippedCards.length >= 2 || this.classList.contains('matched')) {
        return;
    }

    // מבטל את אפשרות הלחיצה
    gameContainer.removeEventListener('click', flipCard);

    this.classList.add('flip');
    flippedCards.push(this);

    if (flippedCards.length === 2) {
        isFlipping = true;
        setTimeout(checkForMatch, 1000);
    }
}

function checkForMatch() {
    const [card1, card2] = flippedCards;
    const image1 = card1.querySelector('.back').style.backgroundImage;
    const image2 = card2.querySelector('.back').style.backgroundImage;

    if (image1 === image2) {
        card1.classList.add('matched');
        card2.classList.add('matched');
        matchedPairs++;
        pairsGuessedElement.textContent = `Pairs Guessed: ${matchedPairs}`;

        if (matchedPairs === cards.length / 2) {
            clearInterval(timerInterval);
            confetti()
        }
    } else {
        setTimeout(() => {
            card1.classList.remove('flip');
            card2.classList.remove('flip');
            // מחזיר את אפשרות הלחיצה
            gameContainer.addEventListener('click', flipCard);
        }, 1000);
    }

    flippedCards = [];
    isFlipping = false;
}


function startTimer() {
    timerInterval = setInterval(() => {
        timer++;
        timerElement.textContent = `Timer: ${timer} sec`;
    }, 1000);
}

function resetGame() {
    gameContainer.innerHTML = '';
    matchedPairs = 0;
    pairsGuessedElement.textContent = 'Pairs Guessed: 0';
    timer = 0;
    timerElement.textContent = 'Timer: 0 sec';
    flippedCards = [];
    isFlipping = false;

    clearInterval(timerInterval);
    startTimer();
    createCards();
}

function createCards() {
    cards.sort(() => Math.random() - 0.5);
    for (let i = 0; i < cards.length; i++) {
        const card = document.createElement('div');
        card.classList.add('card');
        
        const frontFace = document.createElement('div');
        frontFace.classList.add('front');
        
        const backFace = document.createElement('div');
        backFace.classList.add('back');
        backFace.style.backgroundImage = `url('${cards[i]}')`;

        card.appendChild(frontFace);
        card.appendChild(backFace);

        card.addEventListener('click', flipCard);
        gameContainer.appendChild(card);
    }
}

resetButton.addEventListener('click', resetGame);

startTimer();
createCards();
