const click = document.querySelector('.uList');
console.log(click);
const clicks = click.children;
const sideClicks = document.querySelector('.sideMenuUl').children;
const main = document.querySelector('main').children;
console.log(main);
const side = document.querySelector('.sideMenu');
const mainName = document.querySelector('main');

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
	if (ev.target.className === "listAbout" || ev.target.className === "listProj"
		|| ev.target.className === "listExp") {
		for (let i = 0; i < clicks.length; i++) {
			clicks[i].removeAttribute("active", "");
		}
		window.scrollTo(0, 0);
		ev.target.setAttribute("active", "");
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
		for (let i = 0; i < sideClicks.length; i++) {
			sideClicks[i].removeAttribute("active", "");
		}
		window.scrollTo(0, 0);
		ev.target.setAttribute("active", "");
		mainName.className = "menuHidden content";
	}
});
const hambu = document.querySelector('.menuButton');

hambu.addEventListener('click', function() {
	if (mainName.className === "menuHidden content") {
		console.log(side);
		mainName.className = "content";
	} else {
		mainName.className = "menuHidden content";
	}
});
const nav = document.querySelector('.navBar');
	const navOff = nav.offsetTop;
window.addEventListener('scroll', function(e) {
	console.log(window.pageYOffset);
	if (window.pageYOffset >= navOff) {
		nav.setAttribute("active", "");
	} else {
		nav.removeAttribute("active", "");
	}
});