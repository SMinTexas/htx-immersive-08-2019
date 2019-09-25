function resetGame() {
    hidePlayAgain();
    showButtonGroup();
    playIsOngoing = true;
    updateMessage("");
    updateDisplay();
}

function updateDisplay() {
    $('#player').text("Player: ");
    $('#dealer').text("Dealer: ");
    $('img').remove();
    playerHand.splice(0, playerHand.length + 1);
    dealerHand.splice(0, dealerHand.length + 1);
}

//listen for the click event on the PLAY-AGAIN button
document.getElementById("play-again-button").addEventListener("click", resetGame, false);

function resetScores() {
    playerWins = 0;
    dealerWins = 0;
    ties = 0;
    var score = getElement("footer");
    score.innerText = "";
}

function quitGame() {
    hidePlayAgain();
    showButtonGroup();
    playIsOngoing = false;
    updateMessage("");
    updateDisplay();
    resetScores();
}

//listen for the click event on the QUIT button
document.getElementById("quit-button").addEventListener("click", quitGame, false);