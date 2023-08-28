const board = document.querySelector('.board');
const cells = document.querySelectorAll('.cell');
const Status = document.getElementById('status');
const resetButton = document.getElementById('reset-button');
let currentPlayer = 'X';
let boardState = ['', '', '', '', '', '', '', '', ''];
let gameover = false;

Status!.textContent = `Player ${currentPlayer}'s turn`;

cells.forEach((cell) => {
    cell.addEventListener('click', handleClick);
});

resetButton?.addEventListener('click', resetGame);

function handleClick(event: { target: any; }) {
const cell = event.target;
    const cellIndex = Number(cell.getAttribute('data-index'));

    if (!gameover && boardState[cellIndex] === '') {
        boardState[cellIndex] = currentPlayer;
        cell.textContent = currentPlayer;
        cell.classList.add(currentPlayer);

        if (checkWin(currentPlayer)) {
            Status!.textContent = `${currentPlayer} wins!`;
            gameover = true;
        } else if (boardState.every((cell) => cell !== '')) {
            Status!.textContent = "It's a draw!";
            gameover = true;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            Status!.textContent = `Player ${currentPlayer}'s turn`;
        }
    }}

function checkWin(player: string) {
    const winCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    return winCombinations.some((combination) =>
        combination.every((index) => boardState[index] === player)
    );}

function resetGame() {
    boardState = ['', '', '', '', '', '', '', '', ''];
    cells.forEach((cell) => {
        cell.textContent = '';
        cell.classList.remove('X', 'O');
    });
    gameover = false;
    currentPlayer = 'X';
    Status!.textContent = `Player ${currentPlayer}'s turn`;
}
