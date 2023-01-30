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

	// Когда скролл больше чем 15vh, добавить класс scroll-header в тэг header
	if (this.scrollY >= 15)
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
	});
}

// Спрятать логин форму
if (loginClose) {
	loginClose.addEventListener("click", () => {
		login.classList.remove("show-login");
	});
}


// Show Scroll Up
function scrollUp() {
	const scrollUp = document.getElementById("scroll-up");

	// Когда скролл больше чем 350, добавить класс show-scroll
	if (this.scrollY >= 350)
		scrollUp.classList.add("show-scroll");
	else
		scrollUp.classList.remove("show-scroll");
}
window.addEventListener('scroll', scrollUp);


// Questions Accordion
const accordionItem = document.querySelectorAll(".questions__item");

accordionItem.forEach((item) => {
	const accordionHeader = item.querySelector(".questions__header");

	accordionHeader.addEventListener("click", () => {
		const openItem = document.querySelector(".accordion-open");

		toggleItem(item);

		if (openItem && openItem !== item) {
			toggleItem(openItem);
		}
	})
})

const toggleItem = (item) => {
	const accordionContent = item.querySelector('.questions__content');
	const accordionIcon = item.querySelector(".questions__icon");

	if (item.classList.contains("accordion-open")) {
		accordionContent.removeAttribute("style");
		item.classList.remove("accordion-open");
	} else {
		accordionContent.style.height = accordionContent.scrollHeight + "px";
		item.classList.add("accordion-open");
	}
}


// Style Switcher
const styleSwitcher = document.querySelector(".style__switcher");
const styleSwitcherToggle = document.querySelector(".style__switcher-toggler");

styleSwitcherToggle.addEventListener("click", () => {
	styleSwitcher.classList.toggle("open");
});

// Hide Style Switcher On Scroll
window.addEventListener("scroll", () => {
	if (styleSwitcher.classList.contains("open"))
		styleSwitcher.classList.remove("open");
});

// Theme Colors
function themeColors() {
	const colorStyle = document.querySelector(".js-color-style");
	const themeColorsContainer = document.querySelector(".js-theme-colors");

	themeColorsContainer.addEventListener("click", ({target}) => { // target - объект по которому мы кликаем
		if (target.classList.contains("js-theme-color-item")) { // Вытягиваем только те target'ы, у которых есть класс js-theme-color-item
			localStorage.setItem("color", target.getAttribute("data-js-theme-color")); // Вытягиваем инфо с аттрибута data-js-theme-color и кладем в локальное хранилище
			setColors();
		}
	})

	function setColors() {
		let path = colorStyle.getAttribute("href").split("/"); // Достаём путь к css файлу и режем его на части между знаками /
		path = path.slice(0, path.length - 1); // Обрезаем часть с названием файла

		colorStyle.setAttribute("href", path.join("/") + "/" + localStorage.getItem("color") + ".css"); // Обновляем аттрибут href значение path, которое мы склеиваем символом /, добавляем символ / в конце, потом вытягиваем с локального хранилища переменную и дописываем .css
	}
}

themeColors();