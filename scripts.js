window.addEventListener("load", makeAccusations());

function makeAccusations() {
	var friendNames = ["Zach", "Julia", "Matt", "Sam", "Josh"];
	var locationNames = [
		"study",
		"pool room",
		"library",
		"living room",
		"hallway",
		"bedroom",
		"office",
		"weight room",
		"kitchen",
		"bathroom",
	];
	var weaponNames = [
		"wrench",
		"orange",
		"candlestick",
		"ruler",
		"glaive",
		"ballista",
		"playing card",
		"butter",
		"ramo",
		"spoon",
		"weights",
		"picture frame",
		"phone",
		"embarassment",
		"speaker",
		"mug",
		"frying pan",
		"water bottle",
		"league",
		"knife",
	];

	for (var i = 0; i < 100; i++) {
		var weapon = weaponNames[i % 20];
		var location = locationNames[i % 10];
		var friend = friendNames[i % 5];
		var h3 = document.createElement("h3");
		h3.innerHTML = `Accusation ${i + 1}`;
		h3.setAttribute("id", `acc-${i + 1}`);
		document.body.appendChild(h3);
		h3.addEventListener("click", AccusationFactory(friend, weapon, location));
	}
}

function AccusationFactory(friend, weapon, location) {
	return function () {
		alert(`I accuse ${friend}, with the ${weapon} in the ${location}!`);
	};
}
