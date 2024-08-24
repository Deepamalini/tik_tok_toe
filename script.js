let x = true;
let cells = document.querySelectorAll('.cell'); 
let gameActive = true; 

cells.forEach((cell) => {
    cell.addEventListener('click', () => {
        if (!gameActive || cell.textContent) return; 

        if (x) {
            cell.textContent = 'X'; 
        } else {
            cell.textContent = 'O'; 
        }
        
        x = !x; 
        cell.disabled = true; 

        checkWinner(); 
    });
});

function checkWinner() {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    let cellsArray = Array.from(cells); 
    for (let [a, b, c] of winningCombinations) {
        if (cellsArray[a].textContent && 
            cellsArray[a].textContent === cellsArray[b].textContent && 
            cellsArray[a].textContent === cellsArray[c].textContent) {
            alert(`Player ${cellsArray[a].textContent} wins!`); 
            gameActive = false; 
            return;
        }
    }

    if (Array.from(cells).every(cell => cell.textContent)) {
        alert("It's a tie!");
        gameActive = false; 
    }
}

function resetGame() {
    cells.forEach(cell => {
        cell.textContent = ''; 
        cell.disabled = false; 
    });
    x = true; 
    gameActive = true; 
}
document.querySelector('.reset-button').addEventListener('click', resetGame);
