const click = document.querySelector('.uList');
console.log(click);
const clicks = click.children;
const sideClicks = document.querySelector('.sideMenuUl').children;
const main = document.querySelector('main').children;
const side = document.querySelector('.sideMenu');
const mainName = document.querySelector('main');

click.addEventListener('click', function(ev) {
	if(document.querySelector('.trans') === null) {
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
		for (let i = 0; i < clicks.length; i++) {
			clicks[i].removeAttribute("active", "");
		}
		window.scrollTo(0, 0);
		ev.target.setAttribute("active", "");
	}
}
});
side.addEventListener('click', function(ev) {
	if(document.querySelector('.trans') === null) {
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
}
});
const hambu = document.querySelector('.menuButton');

hambu.addEventListener('click', function() {
	if(document.querySelector('.trans') === null) {
	if (mainName.className === "menuHidden content") {
		mainName.className = "content";
	} else {
		mainName.className = "menuHidden content";
	}
}
});
const nav = document.querySelector('.navBar');
const navOff = nav.offsetTop;
const sideMenu = document.querySelector('.sideMenu');
const sideOff = sideMenu.offsetTop;
window.addEventListener('scroll', function(e) {
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
	const modal = document.createElement('modal');
	const body = document.querySelector('body');
	modal.classList.add('modal');
	body.appendChild(modal);
}

const contArr = {
	storyImage: 'story',
	cardImage: 'card',
	froggerImage: 'frog',
	jasmineImage: 'jasm',
	universeImage: 'univ',
	formImage: 'for',
};
const expand = document.querySelectorAll('.more');
const projects = document.querySelector('.projects');
projects.addEventListener('click', modalClick);
projects.addEventListener('click', more);

function more(el) {
	if (el.target.className === "more") {
		const naming = el.target.parentElement.parentElement.parentElement.children[0];
		el.target.style.visibility = "hidden";
		naming.click();
	}
}


function modalClick(e) {
	if(document.querySelector('.trans') === null) {
		if (e.target.className === "coming") {
			e.target.parentElement.click();
		}
	if (contArr[e.target.className] != undefined) {
		e.target.parentElement.children[1].children[1].children[2].style.visibility = "hidden";
		const before = document.createElement('div');
		before.classList.add('before');
		const container = document.querySelector('.' + contArr[e.target.className]);
		container.className = `trans ${contArr[e.target.className]}`;
		if (document.querySelector('.before') === null) {
			container.insertBefore(before, container.children[0]);
		}
		if (mainName.className === "content") {
			mainName.className = "menuHidden content";
		}
		if (document.querySelector('.trans') != null) {
			const button  = document.createElement('div');
			button.className = 'glyph glyphicon glyphicon-remove';
			if (document.querySelector('.glyph') === null) {
				container.children[1].insertBefore(button, container.children[1].children[0]);
			}
			button.addEventListener('click', function() {
				container.className = "implode";
				before.remove();
				button.remove();
				e.target.parentElement.children[1].children[1].children[2].style.visibility = "visible";

				setTimeout(function() {
					container.className = contArr[e.target.className];
				}, 500);
			});
		}
	}
}
}





















