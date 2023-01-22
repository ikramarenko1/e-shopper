// Initialize Home Swiper
var homeSwiper = new Swiper(".home-swiper", {
	spaceBetween: 30,
	loop: "true",

	pagination: {
	  el: ".swiper-pagination",
	  clickable: true,
	},
});


// Change background header
function scrollHeader() {
	const header = document.getElementById("header");

	// Когда скролл больше чем 50vh, добавить класс scroll-header в тэг header
	if (this.scrollY >= 50)
		header.classList.add("scroll-header");
	else 
		header.classList.remove("scroll-header");
}
window.addEventListener('scroll', scrollHeader);


// Initialize New Arrivals Swiper
var newSwiper = new Swiper(".new-swiper", {
	spaceBetween: 16,
	centeredSlides: true,
	slidesPerView: "auto",
	loop: "true",

	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
});


// Show Menu
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

// Показать корзину
if (navToggle) {
	navToggle.addEventListener("click", () => {
		navMenu.classList.add("show-menu");
	})
}

// Спрятать корзину
if (navClose) {
	navClose.addEventListener("click", () => {
		navMenu.classList.remove("show-menu");
	})
}


// Show Cart
const cart = document.getElementById('cart');
const cartShop = document.getElementById('cart-shop');
const cartClose = document.getElementById('cart-close');

// Показать корзину
if (cartShop) {
	cartShop.addEventListener("click", () => {
		cart.classList.add("show-cart");
	})
}

// Спрятать корзину
if (cartClose) {
	cartClose.addEventListener("click", () => {
		cart.classList.remove("show-cart");
	})
}


// Show Login
const login = document.getElementById('login');
const loginButton = document.getElementById('login-toggle');
const loginClose = document.getElementById('login-close');

// Показать логин форму
if (loginButton) {
	loginButton.addEventListener("click", () => {
		login.classList.add("show-login");
	})
}

// Спрятать логин форму
if (loginClose) {
	loginClose.addEventListener("click", () => {
		login.classList.remove("show-login");
	})
}


// Show Scroll Up
function scrollUp() {
	const scrollUp = document.getElementById("scroll-up");
	
	// Когда скролл больше чем 350vh, добавить класс show-scroll
	if (this.scrollY >= 350)
		scrollUp.classList.add("show-scroll");
	else 
		scrollUp.classList.remove("show-scroll");
}
window.addEventListener('scroll', scrollUp);