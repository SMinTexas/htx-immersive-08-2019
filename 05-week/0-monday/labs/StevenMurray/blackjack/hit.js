//check for player total
function checkForPlayerTotal() {
    return getCurrentPoints(playerHand);
}

//deal a single card to the player
function dealToPlayer() {
    playerCard = dealCard(deck);
    showCard(playerCard, "player-hand");
    playerHand.push(playerCard);

    updatePointsDisplay(playerHand, "player");

    if (checkForPlayerTotal() == 21) {
        showDealerCards();
    }

    //checkForWinnerOrLoser();
    gameWinner();
}

//deal a single card to the dealer
function dealToDealer() {
    dealerCard = dealCard(deck);
    showCard(dealerCard, "dealer-hand");
    dealerHand.push(dealerCard);
}

//listen for the click event on the HIT button
document.getElementById("hit-button").addEventListener("click", dealToPlayer, false);