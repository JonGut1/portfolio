'use strict';

var click = document.querySelector('.uList');
console.log(click);
var main = document.querySelector('main').children;
console.log(main);
var side = document.querySelector('.sideMenu');
click.addEventListener('click', function (ev) {
	if (ev.target.className === "listAbout") {
		for (var i = 1; i < main.length; i++) {
			main[i].style.display = "none";
			console.log(main);
		}
		main[1].style.display = "block";
	}
	if (ev.target.className === "listProj") {
		for (var _i = 1; _i < main.length; _i++) {
			main[_i].style.display = "none";
		}
		main[2].style.display = "block";
	}
	if (ev.target.className === "listExp") {
		for (var _i2 = 1; _i2 < main.length; _i2++) {
			main[_i2].style.display = "none";
		}
		main[3].style.display = "block";
	}
});
side.addEventListener('click', function (ev) {
	if (ev.target.className === "listAbout") {
		for (var i = 1; i < main.length; i++) {
			main[i].style.display = "none";
		}
		main[1].style.display = "block";
	}
	if (ev.target.className === "listProj") {
		for (var _i3 = 1; _i3 < main.length; _i3++) {
			main[_i3].style.display = "none";
		}
		main[2].style.display = "block";
	}
	if (ev.target.className === "listExp") {
		for (var _i4 = 1; _i4 < main.length; _i4++) {
			main[_i4].style.display = "none";
		}
		main[3].style.display = "block";
	}
	if (ev.target.className === "listAbout" || ev.target.className === "listProj" || ev.target.className === "listExp") {
		side.className = "menuHidden sideMenu";
	}
});
var hambu = document.querySelector('.menuButton');

hambu.addEventListener('click', function () {
	if (side.className === "menuHidden sideMenu") {
		console.log(side);
		side.className = "sideMenu";
	} else {
		side.className = "menuHidden sideMenu";
	}
});