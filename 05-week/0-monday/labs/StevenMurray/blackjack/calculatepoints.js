function getElement(elementId) {
    return document.getElementById(elementId);
}

function assignPoints(hand) {
    var pts = 0;

    for (var i = 0; i < hand.length; i++) {
        for (var j = 0; j < values.length; j++) {
            if (hand[i].Value == values[j]) {
                pts += points[j];
            }
        }
    }
    return pts;
}

function updatePointsDisplay(hand, elementId) {
    var participant = getElement(elementId);
    var partLabel;
    if (elementId == "player") {
        partLabel = "Player: ";
    } else if (elementId == "dealer") {
        partLabel = "Dealer: ";
    }
    var pts = assignPoints(hand);
    partLabel += " " + pts;
    participant.innerText = partLabel;
}

function getCurrentPoints(hand) {
    return currentPoints = assignPoints(hand);
}

function updateMessage(msgString) {
    var msg = getElement("messages");
    msg.innerText = msgString;
}

function updateRunningScore() {
    var score = getElement("footer");
    score.innerText = "Player: " + playerWins +
        " | Dealer: " + dealerWins +
        " | Ties: " + ties;

}

function gameWinner() {
    var playerPoints = getCurrentPoints(playerHand);
    var dealerPoints = getCurrentPoints(dealerHand);

    if (playerPoints > 21) {
        updateMessage("The dealer wins!");
        dealerWins += 1;
        showDealerCards();
        hideHitStand();
        showPlayAgain();
    } else if (dealerPoints > 21) {
        updateMessage("The Player wins!!");
        playerWins += 1;
        hideHitStand();
        showPlayAgain();
    } else if (playerPoints == 21) {
        updateMessage("The Player wins!");
        playerWins += 1;
        showDealerCards();
        hideHitStand();
        showPlayAgain();
    } else if (dealerPoints == 21) {
        updateMessage("The Dealer wins!");
        dealerWins += 1;
        hideHitStand();
        showPlayAgain();
    } else if (playerPoints > dealerPoints && !playIsOngoing) {
        updateMessage("The player out-duels the dealer!");
        playerWins += 1;
        hideHitStand();
        showPlayAgain();
    } else if (dealerPoints > playerPoints && !playIsOngoing) {
        updateMessage("The dealer out-duels the player!");
        dealerWins += 1;
        hideHitStand();
        showPlayAgain();
    } else if (playerPoints == dealerPoints && !playIsOngoing) {
        updateMessage("Game results in a draw.");
        ties += 1;
        hideHitStand();
        showPlayAgain();
    }
    //update footer
    updateRunningScore();
}