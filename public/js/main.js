const mobileMenuBTN = document.querySelector('#mobile-menu-btn');
const closeMenuBTN = document.querySelector('#close-menu-btn');
const mobileMenu = document.querySelector('#mobile-menu');

mobileMenuBTN.addEventListener('click', () => {
	mobileMenu.classList.toggle('-translate-x-full');
	closeMenuBTN.classList.toggle('-translate-x-full');
});
closeMenuBTN.addEventListener('click', () => {
	mobileMenu.classList.toggle('-translate-x-full');
});
