'use strict';

var click = document.querySelector('.uList');
console.log(click);
var clicks = click.children;
var sideClicks = document.querySelector('.sideMenuUl').children;
var main = document.querySelector('main').children;
console.log(main);
var side = document.querySelector('.sideMenu');
var mainName = document.querySelector('main');

click.addEventListener('click', function (ev) {
	if (document.querySelector('.trans') === null) {
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
		if (ev.target.className === "listAbout" || ev.target.className === "listProj" || ev.target.className === "listExp") {
			for (var _i3 = 0; _i3 < clicks.length; _i3++) {
				clicks[_i3].removeAttribute("active", "");
			}
			window.scrollTo(0, 0);
			ev.target.setAttribute("active", "");
		}
	}
});
side.addEventListener('click', function (ev) {
	if (document.querySelector('.trans') === null) {
		if (ev.target.className === "listAbout") {
			for (var i = 1; i < main.length; i++) {
				main[i].style.display = "none";
			}
			main[1].style.display = "block";
		}
		if (ev.target.className === "listProj") {
			for (var _i4 = 1; _i4 < main.length; _i4++) {
				main[_i4].style.display = "none";
			}
			main[2].style.display = "block";
		}
		if (ev.target.className === "listExp") {
			for (var _i5 = 1; _i5 < main.length; _i5++) {
				main[_i5].style.display = "none";
			}
			main[3].style.display = "block";
		}
		if (ev.target.className === "listAbout" || ev.target.className === "listProj" || ev.target.className === "listExp") {
			for (var _i6 = 0; _i6 < sideClicks.length; _i6++) {
				sideClicks[_i6].removeAttribute("active", "");
			}
			window.scrollTo(0, 0);
			ev.target.setAttribute("active", "");
			mainName.className = "menuHidden content";
		}
	}
});
var hambu = document.querySelector('.menuButton');

hambu.addEventListener('click', function () {
	if (document.querySelector('.trans') === null) {
		if (mainName.className === "menuHidden content") {
			console.log(side);
			mainName.className = "content";
		} else {
			mainName.className = "menuHidden content";
		}
	}
});
var nav = document.querySelector('.navBar');
var navOff = nav.offsetTop;
var sideMenu = document.querySelector('.sideMenu');
var sideOff = sideMenu.offsetTop;
window.addEventListener('scroll', function (e) {
	console.log(window.pageYOffset);
	if (window.pageYOffset >= navOff) {
		nav.setAttribute("active", "");
	} else {
		nav.removeAttribute("active", "");
	}
	if (window.pageYOffset >= sideOff - 53) {
		sideMenu.setAttribute("active", "");
	} else {
		sideMenu.removeAttribute("active", "");
	}
});

function modal(el) {
	var modal = document.createElement('modal');
	var body = document.querySelector('body');
	modal.classList.add('modal');
	body.appendChild(modal);
}

var contArr = {
	storyImage: 'story',
	cardImage: 'card',
	froggerImage: 'frog',
	jasmineImage: 'jasm'
};
var projects = document.querySelector('.projects');
projects.addEventListener('click', modalClick);

function modalClick(e) {
	if (document.querySelector('.trans') === null) {
		if (contArr[e.target.className] != undefined) {
			var before = document.createElement('div');
			before.classList.add('before');
			var container = document.querySelector('.' + contArr[e.target.className]);
			container.className = 'trans ' + contArr[e.target.className];
			if (document.querySelector('.before') === null) {
				container.insertBefore(before, container.children[0]);
			}
			if (mainName.className === "content") {
				mainName.className = "menuHidden content";
			}
			if (document.querySelector('.trans') != null) {
				var button = document.createElement('div');
				button.className = 'glyph glyphicon glyphicon-remove';
				console.log(container.children[1]);
				if (document.querySelector('.glyph') === null) {
					container.children[1].insertBefore(button, container.children[1].children[0]);
				}
				button.addEventListener('click', function () {
					container.className = "implode";
					before.remove();
					button.remove();
					setTimeout(function () {
						container.className = contArr[e.target.className];
					}, 500);
				});
			}
		}
	}
}