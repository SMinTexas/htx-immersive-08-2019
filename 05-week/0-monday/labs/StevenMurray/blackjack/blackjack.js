var deck = getDeck(); //open the deck of cards
var playerHand = []; //player's hand
var dealerHand = []; //dealer's hand
var playerWins = 0; //running total of games won by the player
var dealerWins = 0; //running total of games won by the dealer
var ties = 0; //running total of games ending in a tie
var playIsOngoing = true; //game is playing
shuffleDeck(deck); //shuffle the deck of cards