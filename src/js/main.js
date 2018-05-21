const click = document.querySelector('.uList');
console.log(click);
const main = document.querySelector('main').children;
console.log(main);
const side = document.querySelector('.sideMenu');
click.addEventListener('click', function(ev) {
	if (ev.target.className === "listAbout") {
		for (let i = 1; i < main.length; i++) {
			main[i].style.display = "none";
			console.log(main);
		}
		main[1].style.display = "block";
	}
	if (ev.target.className === "listProj") {
		for (let i = 1; i < main.length; i++) {
			main[i].style.display = "none";
		}
		main[2].style.display = "block";
	}
	if (ev.target.className === "listExp") {
		for (let i = 1; i < main.length; i++) {
			main[i].style.display = "none";
		}
		main[3].style.display = "block";
	}
});
side.addEventListener('click', function(ev) {
	if (ev.target.className === "listAbout") {
		for (let i = 1; i < main.length; i++) {
			main[i].style.display = "none";
		}
		main[1].style.display = "block";
	}
	if (ev.target.className === "listProj") {
		for (let i = 1; i < main.length; i++) {
			main[i].style.display = "none";
		}
		main[2].style.display = "block";
	}
	if (ev.target.className === "listExp") {
		for (let i = 1; i < main.length; i++) {
			main[i].style.display = "none";
		}
		main[3].style.display = "block";
	}
	if (ev.target.className === "listAbout" || ev.target.className === "listProj"
		|| ev.target.className === "listExp") {
		side.className = "menuHidden sideMenu";
	}
});
const hambu = document.querySelector('.menuButton');

hambu.addEventListener('click', function() {
	if (side.className === "menuHidden sideMenu") {
		console.log(side);
		side.className = "sideMenu";
	} else {
		side.className = "menuHidden sideMenu";
	}
});