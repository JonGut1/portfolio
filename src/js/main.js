/* page content */
class Content {
	constructor() {
		this.format = 'jpg';
		this.completedProjects = {
			footballApp: {
				title: 'Football App',
				img: {
					src: `img/football_app.${this.format}`,
					alt: `An image of a table`,
				},
				date: 'Oct 08, 2018',
				description: {
					para1:`n this app you can insert scores into a database and the app will automatically fetch the results
					of the Football World Cup 2018 match and will insert into a leaderboard.`,
					para2: `This project is made using AngularJs, JavaScript CSS3 and HTML5, PHP.`,
				},
				githubLink: 'https://github.com/JonGut1/football-app',
				demo: null,
			},
			neighborhoodMap: {
				title: 'Neighborhood Map App',
				img: {
					src: `img/neighborhood_map.${this.format}`,
					alt: `An image of a neighborhood map app`,
				},
				date: 'Jul 30, 2018',
				description: {
					para1: `This is a neighborhood map project. \
				It let's you search for a location in a hard coded place. \
				Also you can filter the results by typing a letter or selecting an option from a filter list. \
				If you want to get more info about a certain place you can click on a marker on the map. \
				Focus is also managed for easier use with a keyboard`,
					para2: `This project was made as part of the Udacity Front-End Nanodegree course assignment.`,
					para3: `This app was built using HTML5, CSS3 and JavaScript, React library. \
					Also Google Maps api and Foursquare Places api was used in this project`,
				},
				githubLink: `https://github.com/JonGut1/NeighborhoodMapApp`,
				demo: `https://jongut1.github.io/NeighborhoodMapApp/`,
			},
			myReads: {
				title: 'MyReads App',
				img: {
					src: `img/myreads.${this.format}`,
					alt: `An image of a book app`,
				},
				date: 'Jul 14, 2018',
				description: {
					para1: `This is a book app that let's you manage your read books, or the books that you want to read. \
				Also let's you search for new books through a "https://reactnd-books-api.udacity.com" api. \
				Routing is also implemented so that a user could bookmark a page`,
					para2: `This project was made as part of the Udacity Front-End Nanodegree course assignment.`,
					para3: `This app was built using HTML5, CSS3 and JavaScript and React library`,
				},
				githubLink: `https://github.com/JonGut1/MyReads`,
				demo: `https://jongut1.github.io/MyReads/`,
			},
			restaurantReviewsapp: {
				title: 'Restaurant Reviews App',
				img: {
					src: `img/restaurant_reviews.${this.format}`,
					alt: `An image of a restaurant reviews web page`,
				},
				date: 'Jun 25, 2018',
				description: {
					para1: `This is a styling project. \
				The styling was converted by me, from an unresponsive web page to a responsive one. \
				Also a service worker is implemented for offline use. \
				Focus is also managed for easier use with a keyboard`,
					para2: `This project was made as part of the Udacity Front-End Nanodegree course assignment. \
					The project was assigned to practice styling and responsive web design skills`,
					para3: `This app was built using HTML5, CSS3 and JavaScript`,
				},
				githubLink: `https://github.com/JonGut1/mws-restaurant-stage-1`,
				demo: null,
			},
			jasmineTesting: {
				title: 'Testing App',
				img: {
					src: `img/jasmine.${this.format}`,
					alt: `A web page of done tests`,
				},
				date: 'May 25, 2018',
				description: {
					para1: `This is a testing project. \
				It tests whether some of the functions of the page are operational. \
				Such as a side menu is hidden by default, or whether it opens and closes on click. \
				Checks whether the asynchronous feed has loaded at least one element, etc.`,
					para2: `This project was made as part of the Udacity Front-End Nanodegree course assignment.`,
					para3: `The testing was done using jasmine which is done by using JavaScript`,
				},
				githubLink: `https://github.com/JonGut1/jasmine-testing`,
				demo: null,
			},
			classicFrogger: {
				title: 'Classic Frogger Clone',
				img: {
					src: `img/frogger_clone.${this.format}`,
					alt:`An image of a few of menu buttons with a street tile background`,
				},
				date: 'May 18, 2018',
				description: {
					para1:`This game is a classic frogger game clone.
					The game is played out by navigating the character to the river at the top of the screen.
					The movement is done by the arrow keys on the keyboard or on the screen if the player plays it on a mobile device.
					The game counts score and the player can log his score into the local storage.`,
					para2: `This game was made as part of the Udacity Front-End Nanodegree course assignment.`,
					para3: `This project was made using JavaScript CSS3 and HTML5 and HTML5 canvas.
					Most of the code was written by me, though a recource.js file and a basic game loop was provided by the course.`,
				},
				githubLink: `https://github.com/JonGut1/frogger-clone`,
				demo: `https://jongut1.github.io/frogger-clone/`,
			},
			cardGame: {
				title: 'Matching Game',
				img: {
					src:`img/memory_game.${this.format}`,
					alt:`An image 4 by 4 face down cards`,
				},
				date: 'May 3, 2018',
				description: {
					para1:`This is a matching game.
					The player has to match two cards in order to progress through the game.
					The players compete by matching the cards as fast as possible in order to gain more score.
					Also players can save there scores in a local storage.`,
					para2: `The game was programmed as part of the Udacity Front-End Nanodegree course assignment.`,
					para3: `This project was made using JavaScript CSS3 and HTML5.
					All of the code was researched and written by me, excluding one function that is responsible for shuffling cards.
					This function was provided by the course`,
				},
				githubLink: `https://github.com/JonGut1/memory-game`,
				demo: `https://jongut1.github.io/memory-game/`,
			},
			storyGame: {
				title: 'Story Game',
				img: {
					src:`img/story_game.${this.format}`,
					alt:`A person stands near a window in a shadowy room`,
				},
				date: 'Jun 15, 2017',
				description: {
					para1:`This is a story game which requires to answer question and proceed to the next level if answered correctly.
					Some of the questions are timed, and if the time runs out you might lose the game.`,
					para2: `The game was done as part of the Game Design and Development course.
					The requirements were to use the haxe language and use a local database so that all of the information and the questions would be loaded from it.`,
					para3: `The game was made using Haxe programming language. Also some of the code regarding the screen switcher was provided by the course.`,
				},
				githubLink: `https://github.com/JonGut1/story-game`,
				demo: null,
			},
		};
		this.inProgressProjects = {
			universeGame: {
				title: 'Universe Game',
				img: {
					src: `img/universe_game.${this.format}`,
					alt: `An image of a couple of circles flouting`,
				},
				date: '-',
				description: {
					para1:`The core of this game will be to experience gravity and various cosmic objects by controlling them in a gravity driven environtment.
					The game is still in early development, thus there are no gameplay features that could be shown off.`,
					para2: `This project will be made using JavaScript CSS3 and HTML5 and HTML5 canvas.`,
				},
				githubLink: 'https://github.com/JonGut1/jonas-universe',
				demo: 'https://jongut1.github.io/jonas-universe/',
			},
		}

		this.about = {
			description: `Hello, my name is Jonas. I'm a starting Front End Web Developer and this is my portfolio page. \
			Here you can find  all of the programming projects that I have been involved in. \
			All of the projects contain a short description, with the links to the git repositories and demos. \
			You can click on the links for more detailed information regarding all the hows and whys. \
			If you'd like to test and play around with the projects, feel free to clone my git repositories. \
			Hope you'll enjoy it. Also feedback is always welcome`,
		};
	}
}

/* adding everything to the DOM*/
class DOM extends Content {
	constructor() {
		super();
		this.main = document.querySelector('main');
		this.nav = document.querySelector('nav');
		this.body = document.querySelector('body');
		this.expand = true;
		this.currentPage;
	}

	clearDOM() {
		this.main.innerHTML = '';
	}

	loadProjects() {
		this.currentPage = 'Projects';
		this.selected(this.currentPage);
		const completedProjects = JSON.parse(JSON.stringify(this.completedProjects));
		const inProgressProjects = JSON.parse(JSON.stringify(this.inProgressProjects));
		this.clearDOM();
		this.insertProjects(inProgressProjects, 'In Progress Projects', 'in-progress-projects');
		this.insertProjects(completedProjects, 'Completed Projects', 'completed-projects');
	}

	loadIntro() {
		this.currentPage = 'About';
		this.selected(this.currentPage);
		this.clearDOM();
		this.insertAbout();
	}

	selected(type) {
		let list;
		if (this.nav.querySelectorAll('li').length > 0) {
			list = this.nav.querySelectorAll('li');
		} else {
			list = this.body.querySelector('#pop-menu');
			list = list.querySelectorAll('li');
		}

		for (let i = 0; i < list.length; i++) {
			if (list[i].hasAttribute('selected')) {
				list[i].removeAttribute('selected', '');
			}
			if (list[i].textContent === type) {
				list[i].setAttribute('selected', '');
			}
		}
		if (this.body.querySelector('#pop-menu') && this.body.querySelector('#pop-menu').hasAttribute('open')) {
			events.openMenu();
		}

	}

	getProjects(proj) {
		let DOMelements = '';
		const projects = proj;
		let proje = {};
		let readyDescription = '';
		for (let project in projects) {
			for (let info in projects[project]['description']) {
				if (projects[project]['description'][info]) {
					readyDescription += `<p>${projects[project]['description'][info]}</p>`;
				}
			}
			DOMelements = `<div class="title-cont"><h2>${projects[project]['title']}</h2></div>
			<div class="image-cont">
			<img src=${projects[project]['img']['src']} alt=${projects[project]['img']['alt']}>
			</div>
			<div tabindex="1" aria-label='description' class="info-cont">
			<div tabindex="1" class="date-cont"><span>${projects[project]['date']}<span></div>
			<div tabindex="1" class="description-cont">${readyDescription}</div>
			</div>
			<div tabindex='1' aria-label='project links' class="links-cont"><a tabindex="1" href=${projects[project]['githubLink']}>GitHub</a>${projects[project]['demo'] ? `<a tabindex="1" href=${projects[project]['demo']}>Demo</a>` : `<a></a>`}<a id="${project}">Expand --></a></div>`
			readyDescription = [];
			proje[project] = DOMelements;

		}
		return proje;
	}

	setExpandOptions(el, attr) {
		const selectedElement = document.querySelector(`.${el}`);
		if (attr === 'expand') {
			this.body.style.overflow = 'hidden';
			selectedElement.setAttribute(attr, '');
			selectedElement.insertAdjacentHTML('beforebegin', '<div class="clone"></div>')
			selectedElement.firstChild.insertAdjacentHTML('afterbegin', '<div class="exit-button-cont"><button tabindex="1" aria-label="close" class="glyphicon glyphicon-remove"></button></div>');
		} else if (attr === 'colapse') {
			this.body.style.overflow = 'auto';
			const clone = document.querySelector('.clone');
			clone.parentElement.removeChild(clone);
			const exitBut = document.querySelector('.exit-button-cont');
			exitBut.parentElement.removeChild(exitBut);
			selectedElement.removeAttribute('expand', '');
		}
		events.setExpandViewListener();
	}

	insertProjects(content, title, id) {
		const projects = this.getProjects(content);
		this.main.insertAdjacentHTML('afterbegin', `<div class="title"><h1>${title}</h1></div><section><ul tabindex="1" aria-label=${title} id=${id}></ul></section>`);
		for (let project in projects) {
			document.querySelector(`#${id}`).insertAdjacentHTML('beforeend', `<li tabindex="1" class="${project}"><div class="project-card-cont">${projects[project]}</div></li>`);
		}
	}

	getAbout() {
		const about = Object.assign({}, this.about);
		about.description = `<p>${about.description}</p>`;
		return about;
	}

	insertAbout() {
		const about = this.getAbout();
		this.main.insertAdjacentHTML('afterbegin', `<div class="title"><h1>About</h1></div><section class='about-content'><div tabindex="1" role="dialog" class="about-cont">${about.description}</div></section>`)
	}

	manageNavScroll() {
		const offsetTop = this.nav.offsetTop
		window.addEventListener('scroll', () => {
		if (window.pageYOffset >= offsetTop) {
			this.nav.setAttribute('fixed', 'true');
			this.main.setAttribute('fixed', '');
		} else {
			this.main.removeAttribute('fixed', '');
			this.nav.removeAttribute('fixed', 'false');
		}
	});
	}

	deleteNavContent() {
		this.nav.innerHTML = '';
	}

	addNavMenu(hamburger) {
		if (hamburger && !this.body.querySelector('#pop-menu')) {
			this.body.insertAdjacentHTML('afterbegin', `<ul role='nav' id=pop-menu><li tabindex="1" class="listAb" aria-label="About" role="link">About</li><li tabindex="1" class="listPr" role='link'>Projects</li></ul>`);
			this.nav.insertAdjacentHTML('afterbegin', `<button id="hamburger"><span class='glyphicon glyphicon-menu-hamburger'></span></button>`);
		} else {
			const menu = document.querySelector('#pop-menu');
			if (menu) {
				menu.parentElement.removeChild(menu);
			}
			this.nav.insertAdjacentHTML('afterbegin', `<ul class="uList">
				<li class="listAbout">About</li>
				<li class="listProj">Projects</li>
			</ul>`);
		}
	}

	manageNav() {
		let pastWidth;

		if (window.innerWidth <= 700) {
			this.deleteNavContent();
			this.addNavMenu(true);
			this.nav.setAttribute('menu', '');
			events.manageNavEvents('ham');
			events.removeHamburgerEvents();
			events.addHamburgerEvents();
		} else {
			this.deleteNavContent();
			this.addNavMenu(null);
			this.nav.removeAttribute('menu', '');
			events.manageNavEvents('bar');
			events.removeHamburgerEvents();
		}
		window.addEventListener('resize', () => {
			if (window.innerWidth <= 700) {
				if (pastWidth > 700) {
					this.deleteNavContent();
					this.addNavMenu(true);
					this.nav.setAttribute('menu', '');
					events.manageNavEvents('ham');
					events.removeHamburgerEvents();
					events.addHamburgerEvents();
				}
				this.selected(this.currentPage);
				pastWidth = window.innerWidth;
			} else {
				events.removeHamburgerEvents();
				pastWidth = window.innerWidth;
				this.deleteNavContent();
				this.addNavMenu(null);
				this.nav.removeAttribute('menu', '');
				events.manageNavEvents('bar');
				this.selected(this.currentPage);
			}
		});
	}
}

const addToDOM = new DOM();

/* page events */
class Events extends DOM {
	constructor() {
		super();
		this.disableScroll = false;
	}
	openMenu() {
		const menu = document.querySelector('#pop-menu');
		if (menu.hasAttribute('open')) {
			this.disableScroll = false;
			this.nav.removeAttribute('open', '');
			menu.removeAttribute('open', '');
		} else {
			this.disableScroll = true;
			this.nav.setAttribute('open', '');
			menu.setAttribute('open', '');
		}
	}

	addHamburgerEvents() {
		document.querySelector('#hamburger').addEventListener('click', this.openMenu.bind(this));
	}

	removeHamburgerEvents() {
		if (document.querySelector('#hamburger')) {
			document.querySelector('#hamburger').removeEventListener('click', this.openMenu.bind(this));
		}
	}

	manageNavEvents(type) {
		const popMenu = document.querySelector('#pop-menu');
		if (type === 'bar') {
			this.nav.addEventListener('click', this.navEvents);
		} else if (type === 'ham') {
 			this.nav.removeEventListener('click', this.navEvents);
			popMenu.addEventListener('click', this.navEvents);
		}
	}

	navEvents(e) {
		if (e.target.className === 'listProj' || e.target.className === 'listPr') {
			addToDOM.loadProjects();
		} else if (e.target.className === 'listAbout' || e.target.className === 'listAb') {
			addToDOM.loadIntro();
		}
	}

	setExpandViewListener() {
		this.main.addEventListener('click', this.expandView.bind(this))
	}

	expandView(e) {
		if (this.expand) {
			if (e.target.textContent === 'Expand -->') {
				this.disableScroll = true;
				this.expand = null;
				this.setExpandOptions(e.target.parentElement.parentElement.parentElement.className, 'expand');
			}
		} else if (e.target.parentElement.className === 'exit-button-cont') {
			this.disableScroll = false;
			this.expand = true;
			this.setExpandOptions(e.target.parentElement.parentElement.parentElement.className, 'colapse');
		}
	}

	createScrollEvent(checker) {
			this.body.addEventListener('touchmove', (e) => {
				if (e.target.parentElement.className !== 'description-cont') {
					if (this.disableScroll === true) {
						e.preventDefault();
					}
				}
			}, {passive: false});
	}
}

const events = new Events();

/* check the current url to navigate to a correct page */
(function init() {
	addToDOM.manageNavScroll();
	addToDOM.manageNav();
	addToDOM.loadIntro();
	events.setExpandViewListener();
	events.createScrollEvent();
}());

/* adds routing to the page */
class Routing {
	constructor() {

	}
}