function startGame(deck) {
    //deal the player's first card
    playerFirstCard = dealCard(deck);
    showCard(playerFirstCard, "player-hand");
    playerHand.push(playerFirstCard); //add card to player's hand

    //deal the dealer's first card
    dealerFirstCard = dealCard(deck);
    showFirstDealerCard("dealer-hand");
    dealerHand.push(dealerFirstCard); //add card to dealer's hand

    //deal the player's second card
    playerSecondCard = dealCard(deck);
    showCard(playerSecondCard, "player-hand");
    playerHand.push(playerSecondCard); //add card to player's hand

    //deal the dealer's second card
    dealerSecondCard = dealCard(deck);
    showCard(dealerSecondCard, "dealer-hand");
    dealerHand.push(dealerSecondCard); //add card to dealer's hand

    //show the player points
    updatePointsDisplay(playerHand, "player");

    //determine if we have a winner/loser after the initial deal
    gameWinner();
}

function getCardImage(card) {
    return "images/" + card.Value + "_of_" + card.Suit + ".png";
}

function showFirstDealerCard(elementId) {
    var img = document.createElement("img");
    img.src = "images/topside.png";
    img.alt = "Red Card";
    img.height = 100; //set the height of the card to fit in the card display area
    var hand = document.getElementById(elementId);
    hand.appendChild(img);
}

function flipFirstDealerCard(card, elementId) {
    var hand = document.getElementById(elementId);
    var img = hand.children[0];
    var specificCard = getCardImage(card);
    var oldPic = img.src;
    if (oldPic.includes("topside")) {
        img.src = specificCard;
        img.alt = specificCard;
    }
}

function showCard(card, elementId) {
    var specificCard = getCardImage(card);
    var img = document.createElement("img");
    img.src = specificCard;
    img.alt = specificCard;
    img.height = 100; //set the height of the card to fit in the card display area
    var hand = document.getElementById(elementId);
    hand.appendChild(img);
}

function dealCard(deck) {
    return this.deck.pop();
}

//listen for the click event on the DEAL button
document.getElementById("deal-button").addEventListener("click", startGame, false);

$('#deal-button').click(function() {
    //$(this).hide();
    hideDeal();
});