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
    if(checkTop()  ||checkMiddle() || checkBottom() || checkDiagonal() || checkLeft() || checkCenter() || checkRight()) {
        return true;
    } else {
        return false;
    
}

function checkLeft() {
    if(cells[0].textContent === cells[3].textContent && cells[3].textContent === cells[6].textContent && !isEmpty(0, 3, 6)){
        gameOver = true;
        return true;
        
    }   else {
        return false;
    }
    
}

function checkCenter() {
    if(cells[1].textContent === cells[4].textContent && cells[4].textContent === cells[7].textContent && !isEmpty(1, 4, 7)){
        gameOver = true;
        return true;
        
    }   else {
        return false;
    }
    
}

function checkRight() {
    if(cells[2].textContent === cells[5].textContent && cells[5].textContent === cells[8].textContent && !isEmpty(2, 5, 8)){
        gameOver = true;
        return true;
        
    }   else {
        return false;
    }
    
}


}
 
function checkTop() {
    if( cells[0].textContent === cells[1].textContent && cells[1].textContent === cells[2].textContent && !isEmpty(0, 1, 2)){
        gameOver = true;
        return true;
        
    }   else {
        return false;
    }
}

function checkMiddle() {
    if( cells[3].textContent === cells[3].textContent && cells[4].textContent === cells[5].textContent && !isEmpty(3, 4, 5)){
        gameOver = true;
        return true;
        
    }   else {
        return false;
    }
}

function checkBottom() {
    if( cells[6].textContent === cells[6].textContent && cells[7].textContent === cells[8].textContent && !isEmpty(6, 7, 8)) {
        gameOver = true;
        return true;
        
    }   else {
        return false;
    }
}

function checkDiagonal() {
    if( cells[0].textContent === cells[4].textContent && cells[8].textContent === cells[8].textContent && !isEmpty(0, 4, 8)){
        gameOver = true;
        return true;
      
    }   else if( cells[2].textContent === cells[4].textContent && cells[2].textContent === cells[6].textContent && !isEmpty(2, 4, 6)) {
        gameOver = true;
        return true;
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