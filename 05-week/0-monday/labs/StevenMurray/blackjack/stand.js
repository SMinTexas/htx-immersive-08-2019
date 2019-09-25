//player hits the STAND button, check point total of dealer
//if dealer point total < 17, draw additional cards for the
//dealer until the total reaches 17 or more
//at that point, check for a game winner

//check for dealer total
function checkForDealerTotal() {
    return getCurrentPoints(dealerHand);
}

function showDealerCards() {
    flipFirstDealerCard(dealerHand[0], "dealer-hand");
    updatePointsDisplay(dealerHand, "dealer");
}

function getDealerCards() {
    playIsOngoing = false;
    showDealerCards();
    var dealerTotal = checkForDealerTotal();
    while (dealerTotal < 17) {
        dealToDealer();
        updatePointsDisplay(dealerHand, "dealer");
        dealerTotal = checkForDealerTotal();
    }

    gameWinner();
}

//listen for the click event on the STAND button
document.getElementById("stand-button").addEventListener("click", getDealerCards, false);

$('#stand-button').click(function() {
    // $(this).hide();
    // $('#hit-button').hide();
    // $('#play-again-button').show();
    hideHitStand();
    showPlayAgain();
});