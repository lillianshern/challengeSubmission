function Game() {
	var die1;
	var die2;
	var areDiceRolled = false;

	this.rollDice = function() {
		die1 = Math.floor(Math.random() * 6) + 1;
		die2 = Math.floor(Math.random() * 6) + 1;
		areDiceRolled = true;
	};

	this.resetDice = function() {
		areDiceRolled = false;
	};

	this.next = function() {
		if (areDiceRolled && doublecount === 0) {
			play();
		} else {
			roll();
		}
	};

	this.getDie = function(die) {
		if (die === 1) {
			return die1;
		} else {
			return die2;
		}
	};
}

var game;

function Player(name, color) {
	this.name = name;
	this.color = color;
	this.position = 0;
	this.creditor = -1;
	this.money = 10000;
	this.jail = false;
	this.jailroll = 0;

	this.pay = function (amount) {
		if (amount <= this.money) {
			this.money -= amount;

			updateMoney();

			return true;
		}
	};
}

var player = [];
var pcount;
var turn = 0, doublecount = 0;
// Overwrite an array with numbers from one to the array's length in a random order.
Array.prototype.randomize = function(length) {
	length = (length || this.length);
	var num;
	var indexArray = [];
	for (var i = 0; i < length; i++) {
		indexArray[i] = i;
	}

	for (var i = 0; i < length; i++) {
		// Generate random number between 0 and indexArray.length - 1.
		num = Math.floor(Math.random() * indexArray.length);
		this[i] = indexArray[num] + 1;
		indexArray.splice(num, 1);
	}
};

function addAlert(alertText) {
	$alert = $("#alert");
		// Animate scrolling down alert element.
		$alert.stop().animate({"scrollTop": $alert.prop("scrollHeight")}, 1000);
	$(document.createElement("div")).text(alertText).appendTo($alert);
}

function updatePosition() {
	// Reset borders
	document.getElementById("jail").style.border = "1px solid black";
	
	for (var i = 0; i < 40; i++) {
		document.getElementById("cell" + i).style.border = "1px solid black";
		document.getElementById("cell" + i + "positionholder").innerHTML = "";
	}

	//position of the pawns
	var left, top;

	for (var x = 0; x < 40; x++) {
		left = 0;
		top = 0;

		for (var y = turn; y <= pcount; y++) {
			if (player[y].position == x && !player[y].jail) {
				document.getElementById("cell" + x + "positionholder").innerHTML += "<div class='cell-position' title='" + player[y].name + "' style='background-color: " + player[y].color + "; left: " + left + "px; top: " + top + "px;'></div>";
				if (left == 36) {
					left = 0;
					top = 12;
				} else
					left += 12;
			}
		}

		for (var y = 1; y < turn; y++) {
			if (player[y].position == x && !player[y].jail) {
				document.getElementById("cell" + x + "positionholder").innerHTML += "<div class='cell-position' title='" + player[y].name + "' style='background-color: " + player[y].color + "; left: " + left + "px; top: " + top + "px;'></div>";
				if (left == 36) {
					left = 0;
					top = 12;
				} else
					left += 12;
			}
		}
	}
	p = player[turn];
}

function updateMoney() {
	var p = player[turn];

	document.getElementById("pmoney").innerHTML = "$" + p.money;
	$(".money-bar-row").hide();

	for (var i = 1; i <= pcount; i++) {
		p_i = player[i];

		$("#moneybarrow" + i).show();
		document.getElementById("p" + i + "moneybar").style.border = "2px solid " + p_i.color;
		document.getElementById("p" + i + "money").innerHTML = p_i.money;
		document.getElementById("p" + i + "moneyname").innerHTML = p_i.name;
	}

	document.getElementById("quickstats").style.borderColor = p.color;
}

function updateDice() {
	var die0 = game.getDie(1);
	var die1 = game.getDie(2);

	$("#die0").show();
	$("#die1").show();

	if (document.images) {
		var element0 = document.getElementById("die0");
		var element1 = document.getElementById("die1");
		element0.classList.remove("die-no-img");
		element1.classList.remove("die-no-img");

		if (element0.firstChild) {
			element0 = element0.firstChild;
		} else {
			element0 = element0.appendChild(document.createElement("img"));
		}
		element0.src = "images/Die_" + die0 + ".png";
		element0.alt = die0;

		if (element1.firstChild) {
			element1 = element1.firstChild;
		} else {
			element1 = element1.appendChild(document.createElement("img"));
		}
		element1.src = "images/Die_" + die1 + ".png";
		element1.alt = die0;

	} else {
		document.getElementById("die0").textContent = die0;
		document.getElementById("die1").textContent = die1;
	}
}

function land() {
	
	var p = player[turn];
	var s = square[p.position];

	$("#landed").show();
	document.getElementById("landed").innerHTML = "You landed on " + s.name + ".";
	s.landcount++;
	addAlert(p.name + " landed on " + s.name + ".");

	// Go to jail. Go directly to Jail. Do not pass GO. Do not collect $200.
	if (p.position === 30) {
		updateMoney();
		updatePosition();

		return;
	}

	
	updateMoney();
	updatePosition();
	lose();
}

function lose() {
	var p = player[turn];
	var property = square[p.position];
	var cost = property.price;

	
		p.pay(cost);

		property.owner = turn;
		updateMoney();
		addAlert("Because " + p.name + " is under " + property.name + ", "+ p.name + " need to pay " + cost + ".");

		$("#landed").hide();

}

function roll() {
	var p = player[turn];
	document.getElementById("nextbutton").focus();
	document.getElementById("nextbutton").value = "End turn";

	game.rollDice();
	var die1 = game.getDie(1);
	var die2 = game.getDie(2);

	doublecount++;

	if (die1 == die2) {
		addAlert(p.name + " rolled " + (die1 + die2) + " - doubles.");
	} else {
		addAlert(p.name + " rolled " + (die1 + die2) + ".");
	}

	if (die1 == die2 && !p.jail) {
		updateDice(die1, die2);

		if (doublecount < 3) {
			document.getElementById("nextbutton").value = "Roll again";

		// If player rolls doubles three times in a row, send to jail
		} else if (doublecount === 3) {
			p.jail = true;
			doublecount = 0;
			addAlert(p.name + " rolled doubles three times in a row.");
			updateMoney();
			popup("You rolled doubles three times in a row. Go to jail.", gotojail);
			return;
		}
	} else {
		document.getElementById("nextbutton").value = "End turn";
		doublecount = 0;
	}

	updatePosition();
	updateMoney();

	if (p.jail === true) {
		p.jailroll++;

		updateDice(die1, die2);
		if (die1 == die2) {
			document.getElementById("jail").style.border = "1px solid black";
			document.getElementById("cell11").style.border = "2px solid " + p.color;
			$("#landed").hide();

			p.jail = false;
			p.jailroll = 0;
			p.position = 10 + die1 + die2;
			doublecount = 0;

			addAlert(p.name + " rolled doubles to get out of jail.");

			land();
		} else {
			if (p.jailroll === 3) {
				popup("<p>You must pay the $50 fine.</p>", function() {
					payfifty();
					player[turn].position=10 + die1 + die2;
					land();
				});
			} else {
				$("#landed").show();
				document.getElementById("landed").innerHTML = "You are in jail.";
			}
		}
	} else {
		updateDice(die1, die2);
		// Move player
		p.position += die1 + die2;
		// Collect $200 salary as you pass GO
		if (p.position >= 40) {
			p.position -= 40;
			p.money += 200;
			addAlert(p.name + "collected a $200 salary for passing GO.");
		}
		land();
	}
}

function play() {

	turn++;
	if (turn > pcount) {
		turn -= pcount;
	}

	var p = player[turn];
	game.resetDice();

	document.getElementById("pname").innerHTML = p.name;
	addAlert("It is " + p.name + "'s turn.");

	// Check for bankruptcy.
	p.pay(0, p.creditor);

	$("#landed, #option, #manage").hide();
	$("#board, #control, #moneybar").show();

	doublecount = 0;

	document.getElementById("nextbutton").focus();
	document.getElementById("nextbutton").value = "Roll Dice";

	$("#die0").hide();
	$("#die1").hide();

	if (p.jail) {
		$("#landed").show();
		document.getElementById("landed").innerHTML = "You are in jail.<input type='button' title='Pay $50 fine to get out of jail immediately.' value='Pay $50 fine' onclick='payfifty();' />";
	}

	updateMoney();
	updatePosition();

	$(".money-bar-arrow").hide();
	$("#p" + turn + "arrow").show();
}

function setup() {
	pcount = parseInt(4, 10);

	var playerArray = new Array(pcount);
	var p;

	playerArray.randomize();

	for (var i = 1; i <= pcount; i++) {
		p = player[playerArray[i - 1]];
		p.color = document.getElementById("player" + i + "color").value.toLowerCase();
		p.name = document.getElementById("player" + i + "name").value;
	}

	$("#board, #moneybar").show();
	$("#setup").hide();

	if (pcount === 2) {
		document.getElementById("stats").style.width = "454px";
	} else if (pcount === 3) {
		document.getElementById("stats").style.width = "686px";
	}

	document.getElementById("stats").style.top = "0px";
	document.getElementById("stats").style.left = "0px";

	play();
}

this.bankruptcy = function() {
	var p = player[turn];
	var pcredit = player[p.creditor];
	var bankruptcyUnmortgageFee = 0;

	if (p.money >= 0) {
		return;
	}

	if (p.creditor !== 0) {
		pcredit.money += p.money;
	}

	addAlert(p.name + " is bankrupt.");
	updateMoney();

	if (pcount === 2 || bankruptcyUnmortgageFee === 0 || p.creditor === 0) {
		game.eliminatePlayer();
	}

};

this.eliminatePlayer = function() {
	var p = player[turn];

	for (var i = p.index; i < pcount; i++) {
		player[i] = player[i + 1];
		player[i].index = i;

	}

	for (var i = 0; i < 40; i++) {
		if (square[i].owner >= p.index) {
			square[i].owner--;
		}
	}

	pcount--;
	turn--;

	if (pcount === 2) {
		document.getElementById("stats").style.width = "454px";
	} else if (pcount === 3) {
		document.getElementById("stats").style.width = "686px";
	}

	if (pcount === 1) {
		updateMoney();
		$("#control").hide();
		$("#board").hide();

		popup("<p>Congratulations, " + player[1].name + ", you have won the game.</p><div>");

	} else {
		play();
	}
};

window.onload = function() {
	game = new Game();

	for (var i = 0; i <= 8; i++) {
		player[i] = new Player("", "");
		player[i].index = i;
	}

	$("#nextbutton").click(game.next);
	$("#setup").show();

	var currentCell;
	var currentCellAnchor;
	var currentCellPositionHolder;
	var currentCellName;

	for (var i = 0; i < 40; i++) {
		s = square[i];

		currentCell = document.getElementById("cell" + i);

		currentCellAnchor = currentCell.appendChild(document.createElement("div"));
		currentCellAnchor.id = "cell" + i + "anchor";
		currentCellAnchor.className = "cell-anchor";

		currentCellPositionHolder = currentCellAnchor.appendChild(document.createElement("div"));
		currentCellPositionHolder.id = "cell" + i + "positionholder";
		currentCellPositionHolder.className = "cell-position-holder";
		currentCellPositionHolder.enlargeId = "enlarge" + i;

		currentCellName = currentCellAnchor.appendChild(document.createElement("div"));
		currentCellName.id = "cell" + i + "name";
		currentCellName.className = "cell-name";
		currentCellName.textContent = s.name;
	}

};

function Square(name, price) {
	this.name = name;
	this.price = (price || 0);
}

var square = [];

square[0] = new Square("GO", 200);
square[1] = new Square("Spring Event", 100);
square[2] = new Square("Sports Day", 1000);
square[3] = new Square("Education Fair", 10);
square[4] = new Square("Basketball Game", 50);
square[5] = new Square("Essay Planning", 100);
square[6] = new Square("Writing Essay", 200);
square[7] = new Square("Reviewing Essay", 300);
square[8] = new Square("Choosing College List", 400 );
square[9] = new Square("SAT Preparation", 2000);
square[10] = new Square("SAT Subject Test", 1000);
square[11] = new Square("SAT official", 40);
square[12] = new Square("AP Classroom", 5000);
square[13] = new Square("AP Classes", 1000);
square[14] = new Square("Add and Frop", 40);
square[15] = new Square("AP Seminar/ Research", 6000);
square[16] = new Square("Mid term", 700);
square[17] = new Square("AP Presentation", 10);
square[18] = new Square("College Essay Final Draft", 500);
square[19] = new Square("Applying for college", 600);
square[20] = new Square("Sending Rec Letters", 900);
square[21] = new Square("Asking for extensions", 300);
square[22] = new Square("Asking for exam retakes", 200);
square[23] = new Square("Catching up homeworks", 500);
square[24] = new Square("Winter Break", 500);
square[25] = new Square("Birthday", 900);
square[26] = new Square("Typhoon - normal school day", 1000);
square[27] = new Square("Pandemic - normal virtual school", 10);
square[28] = new Square("Returning ID card", 500);
square[29] = new Square("Returning graduation gown", 20);
square[30] = new Square("MUN Delegation fee", 400);
square[31] = new Square("MUN Application", 599);
square[32] = new Square("MUN Trip fee", 1400);
square[33] = new Square("Textbooks", 100);
square[34] = new Square("Yearbook", 200);
square[35] = new Square("Diploma", 900);
square[36] = new Square("College Application - Transcript", 700);
square[37] = new Square("Entrance fee for Graduation", 300);
square[38] = new Square("Take Photo from PAS Photobooth", 600);
square[39] = new Square("Graduate", 100000);