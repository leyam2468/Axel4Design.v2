import '../styles/main.scss';

const Loading = document.querySelector('#Loading');

const mobileMenuBTN = document.querySelector('#mobile-menu-btn');
const closeMenuBTN = document.querySelector('#close-menu-btn');
const mobileMenu = document.querySelector('#mobile-menu');

const helper = document.querySelector('#helper');
const helperSpans = document.querySelectorAll('#helper-spans span');

const darkmode = document.querySelector('#darkmode');

const sideNavWeb = document.querySelector('#side-nav-web');
const sideNavBTN = document.querySelector('#side-nav-btn');
const closeSiteNavBTN = document.querySelector('#close-site-nav-btn');
const webSearch = document.querySelector('#web-search');

const sideNavApp = document.querySelector('#side-nav-apps');
const sideNavAppBTN = document.querySelector('#side-nav-apps-btn');
const closeSiteNavAppBTN = document.querySelector('#close-app-nav-btn');
const appSearch = document.querySelector('#app-search');

// scrolltotop
const ScrolToTop = document.querySelector('#scroltotop');

// Functions************************************

document.addEventListener('DOMContentLoaded', () => {
	Loading.remove();
});
// body &&html
document.addEventListener('click', (e) => {
	if (
		e.target.id !== 'side-nav-btn' &&
		e.target.id !== 'side-nav-web' &&
		e.target.id !== 'side-nav-apps-btn' &&
		e.target.id !== 'side-nav-apps'
	) {
		if (sideNavWeb.classList !== '-translate-x-80') {
			sideNavWeb.classList.add('-translate-x-80');
		}
		if (sideNavApp.classList !== '-translate-x-80') {
			sideNavApp.classList.add('-translate-x-80');
		}
	}
});

// Helper BTN
helper.addEventListener('click', () => {
	helperSpans[0].classList.toggle('-translate-y-14');
	helperSpans[1].classList.toggle('-translate-y-28');
	helperSpans[2].classList.toggle('-translate-y-42');
});

// DarkMode
if (
	localStorage.theme === 'dark' ||
	(!'theme' in localStorage &&
		window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
	document.querySelector('html').classList.add('dark');
} else if (localStorage.theme === 'dark') {
	document.querySelector('html').classList.add('dark');
}
darkmode.addEventListener('click', () => {
	let htmlClasses = document.querySelector('html').classList;
	if (localStorage.theme == 'dark') {
		htmlClasses.remove('dark');
		localStorage.removeItem('theme');
	} else {
		htmlClasses.add('dark');
		localStorage.theme = 'dark';
		darkmode.classList.toggle('bg-red-800');
	}
});

// ScrolToTOp
ScrolToTop.addEventListener('click', () => {
	var scrollToTop = window.setInterval(function () {
		var pos = window.pageYOffset;
		if (pos > 0) {
			window.scrollTo(0, pos - 20); // how far to scroll on each step
		} else {
			window.clearInterval(scrollToTop);
		}
	}, 16); // how fast to scroll (this equals roughly 60 fps)
});

// mobileMenu
mobileMenuBTN.addEventListener('click', () => {
	mobileMenu.classList.toggle('-translate-x-full');
});
closeMenuBTN.addEventListener('click', () => {
	mobileMenu.classList.toggle('-translate-x-full');
});

// WEB SITES
sideNavWeb.addEventListener('click', (e) => {
	e.stopPropagation();
});
sideNavBTN.addEventListener('click', (e) => {
	e.stopPropagation();
	if (sideNavApp.classList !== '-translate-x-80') {
		sideNavApp.classList.add('-translate-x-80');
	}
	sideNavWeb.classList.toggle('-translate-x-80');
});
closeSiteNavBTN.addEventListener('click', () => {
	sideNavWeb.classList.toggle('-translate-x-80');
});

webSearch.addEventListener('keyup', (e) => {
	const webSearchVal = e.target.value.toLowerCase();
	const webMenuItems = document.querySelectorAll('#side-nav-web nav a');

	webMenuItems.forEach((item) => {
		let itemname = item.textContent.toLowerCase();
		if (itemname.indexOf(webSearchVal) != -1) {
			item.style.display = '';
		} else {
			item.style.display = 'none';
		}
	});
});

// WEP APPS
sideNavApp.addEventListener('click', (e) => {
	e.stopPropagation();
});
sideNavAppBTN.addEventListener('click', (e) => {
	e.stopPropagation();
	if (sideNavWeb.classList !== '-translate-x-80') {
		sideNavWeb.classList.add('-translate-x-80');
	}
	sideNavApp.classList.toggle('-translate-x-80');
});
closeSiteNavAppBTN.addEventListener('click', () => {
	sideNavApp.classList.toggle('-translate-x-80');
});

appSearch.addEventListener('keyup', (e) => {
	const appSearchVal = e.target.value.toLowerCase();
	const appMenuItems = document.querySelectorAll('#side-nav-apps nav a');

	appMenuItems.forEach((item) => {
		let itemname = item.textContent.toLowerCase();
		if (itemname.indexOf(appSearchVal) != -1) {
			item.style.display = '';
		} else {
			item.style.display = 'none';
		}
	});
});
