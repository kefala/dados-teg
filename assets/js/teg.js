// CONSTANTES
var App 			= {},
	Game 			= {},
	DomHelper 		= {};

function Dice () {
	this.number = Math.floor(Math.random() * 6) + 1;
}

Game.turn = 0;

Game.getDice = function() {
	var dice = new Dice();
	return dice;
};
Game.toogleTurn = function () {
	Game.turn = (Game.turn) ? 0 : 1;
};
Game.dicesP1 = 0;
Game.dicesP2 = 0;


DomHelper.getButtonClean = function () {
	return document.getElementById('clean-button');
};
DomHelper.getButtonAddP1 = function () {
	return document.querySelector('.player-1 .plus');
};
DomHelper.getButtonAddP2 = function () {
	return document.querySelector('.player-2 .plus');
};
DomHelper.cleanAllDices = function () {
	var dicesBoxes = document.querySelectorAll('.dice');
	dicesBoxes.forEach(function (item) {
		item.querySelector('.number').textContent = '';
		item.classList.remove('active');
	});
};
DomHelper.addDice = function (player, number) {
	var dice = Game.getDice(),
		diceBox = document.querySelector('.player-' + player + ' .dice-' + number + ' .number');
	document.querySelector('.player-' + player + ' .dice-' + number).classList.add('active');
	diceBox.textContent = dice.number.toString();
};

App.init = function () {
	var buttonClean = DomHelper.getButtonClean(),
		buttonAddP1 = DomHelper.getButtonAddP1(),
		buttonAddP2 = DomHelper.getButtonAddP2();

	buttonClean.addEventListener('click', function() {
		Game.dicesP1 = 0;
		Game.dicesP2 = 0;
		console.log("Clean");
		DomHelper.cleanAllDices();
	});

	buttonAddP1.addEventListener('click', function() {
		if (Game.dicesP1 < 3) {
			Game.dicesP1++;
			DomHelper.addDice(1, Game.dicesP1);
		}
	});

	buttonAddP2.addEventListener('click', function() {
		if (Game.dicesP2 < 3) {
			Game.dicesP2++;
			DomHelper.addDice(2, Game.dicesP2);
		}
	});
};

document.addEventListener('DOMContentLoaded', App.init);