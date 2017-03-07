//var cardOne = "queen";
//var cardTwo = "queen";
//var cardThree = "king";
//var cardFour = "king";

var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];
var board = document.getElementById('game-board');

function createBoard(){
	for (var i = 0; i < cards.length; i++) {
	 // creating card element for gameboard
	 var cardElement = document.createElement('div');
	 
	   // this will set the card's 'data-card' to be the element of the array
	  // data — attributes are meant to store data about an element that is not
	  // tied to a style,
	  // i.e., 'king'.
	  cardElement.className = 'card';
	  cardElement.setAttribute('data-card', cards[i]);
	  // add card's style
	 
	  cardElement.addEventListener('click', isTwoCards)
	  board.appendChild(cardElement);
	  
	}

}
function reset(){

	alert("reset");
}

//checks to see if there are cards in play
function isTwoCards() {

  // add card to array of cards in play
  // 'this' hasn't been covered in this pre-work, but
  // for now, just know it gives you access to the card the user clicked on
  cardsInPlay.push(this.getAttribute('data-card'));
  // set card image
  if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src='http://i.imgur.com/bnuv5Im.png'>"; // king
	} else {
		this.innerHTML = "<img src='http://i.imgur.com/v6buNt2.png'>"; //queen
	}
  // if you have two cards in play, check for a match
  if (cardsInPlay.length === 2) {

    // pass the cardsInPlay as an argument to the isMatch function
    isMatch(cardsInPlay);

    // clear cards in play array for your next try
    cardsInPlay = [];

  }

}

function isMatch(cards) {
  // alert winning message
  if (cards[0] === cards[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");

  }
}
createBoard();
