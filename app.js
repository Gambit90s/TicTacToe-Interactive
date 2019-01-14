let cells = document.querySelectorAll('.row div');
let gameOver = false;
let currentPlayer = 'X';
cells.forEach(function(cell){
    cell.addEventListener('click', cellClicked);
});

function cellClicked(e) {

    if(gameOver === true) {
        resetBoard();
    }

    if(e.target.textContent !== '') {
        return;
    }
    e.target.textContent = currentPlayer;
    checkGame();
    togglePlayer();
};

function checkGame() {
    if(checkTop()) {
        return true;
    } else {
        return false;
    
}

}
 
function checkTop() {
    if( cells[0].textContent === cells[1].textContent && cell[1].textContent === cell[2].textContent && isEmpty(0, 1, 2)){
        return true;
        gameOver = true;
    }   else {
        return false;
    }
}

function checkMiddle() {
    if( cells[3].textContent === cells[3].textContent && cell[4].textContent === cell[5].textContent && isEmpty(3, 4, 5)){
        return true;
        gameOver = true;
    }   else {
        return false;
    }
}

function checkBottom() {
    if( cells[6].textContent === cells[6].textContent && cell[7].textContent === cell[8].textContent && isEmpty(6, 7, 8)){
        return true;
        gameOver = true;
    }   else {
        return false;
    }
}

function checkDiagonal() {
    if( cells[0].textContent === cells[4].textContent && cell[8].textContent === cell[8].textContent && isEmpty(0, 4, 8)){
        return true;
        gameOver = true;
    }   else if( cells[2].textContent === cells[4].textContent && cell[2].textContent === cell[6].textContent && isEmpty(2, 4, 6)) {
        return true;
        gameOver = true;
    }   else {
        return false;
    }
}


function isEmpty(a, b, c) {
    if(cells[a].textContent === "" || cells[b].textContent === "" || cells[c].textContent === "") {
        return true;
    } else { 
        return false;
    }



}

function resetBoard() {
    cells.forEach(function(cell){
        cell.textContent = "";
    });
    gameOver = false;
};

function togglePlayer() {
    if(currentPlayer === 'X') {
        currentPlayer = 'O';
    } else { 
        currentPlayer = 'X';
    }
}