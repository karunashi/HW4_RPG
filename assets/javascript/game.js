// Pseudo Code
// 1. Create variables, set properties for each character, and setup basic outline of HP/AP/CAP
// 2. Have user select one of four characters.
// 3. Selected character placed on left. Remaining stay on the left.
// 4. Allow user to select opponent, and move opponent to right. Remaining stay at center.
// 5. Once selected opponent loses, user may pick again.

var player = ""


var kazuma = {
	name: "Kazuma",
	healthpoints: 200,
	attackpower: 20,
	counterattack: 10,
	isAlive: true,
	isSelected: false,
}
var aqua = {
	name: "Aqua",
	healthpoints: 200,
	attackpower: 20,
	counterattack: 10,
	isAlive: true,
	isSelected: false,
}
var megumin = {
	name: "Megumin",
	healthpoints: 200,
	attackpower: 20,
	counterattack: 10,
	isAlive: true,
	isSelected: false,
}
var darkness = {
	name: "Darkness",
	healthpoints: 200,
	attackpower: 20,
	counterattack: 10,
	isAlive: true,
	isSelected: false,
}

//User gets to select character.

$(".char1").on("click", function() {
	$(".selectedChar").append("(.char1)");
});