import '../css/style.scss';

import '../images/page_icon.png';
import '../images/1.jpg';
import '../images/4005523.svg';

const mobileMenuBTN = document.querySelector('#mobile-menu-btn');
const closeMenuBTN = document.querySelector('#close-menu-btn');
const mobileMenu = document.querySelector('#mobile-menu');

const helper = document.querySelector('#helper');
const helperSpans = document.querySelectorAll('#helper-spans span');

const darkmode = document.querySelector('#darkmode');

const sideNavWeb = document.querySelector('#side-nav-web');
const sideNavBTN = document.querySelector('#side-nav-btn');
const closeSiteNavBTN = document.querySelector('#close-site-nav-btn');

const sideNavApp = document.querySelector('#side-nav-apps');
const sideNavAppBTN = document.querySelector('#side-nav-apps-btn');
const closeSiteNavAppBTN = document.querySelector('#close-app-nav-btn');
// mobileMenu
mobileMenuBTN.addEventListener('click', () => {
	mobileMenu.classList.toggle('-translate-x-full');
});
closeMenuBTN.addEventListener('click', () => {
	mobileMenu.classList.toggle('-translate-x-full');
});
// Helper BTN
helper.addEventListener('click', () => {
	helperSpans[0].classList.toggle('-translate-y-14');
	helperSpans[1].classList.toggle('-translate-y-28');
	helperSpans[2].classList.toggle('-translate-y-42');
});
// DarkMode
darkmode.addEventListener('click', () => {
	document.querySelector('html').classList.toggle('dark');
	darkmode.classList.toggle('bg-red-800');
});
// WEB SITES
sideNavBTN.addEventListener('click', () => {
	if (sideNavApp.classList !== '-translate-x-full') {
		sideNavApp.classList.add('-translate-x-full');
	}
	sideNavWeb.classList.toggle('-translate-x-full');
});
closeSiteNavBTN.addEventListener('click', () => {
	sideNavWeb.classList.toggle('-translate-x-full');
});
// WEP APPS
sideNavAppBTN.addEventListener('click', () => {
	if (sideNavWeb.classList !== '-translate-x-full') {
		sideNavWeb.classList.add('-translate-x-full');
	}
	sideNavApp.classList.toggle('-translate-x-full');
});
closeSiteNavAppBTN.addEventListener('click', () => {
	sideNavApp.classList.toggle('-translate-x-full');
});
