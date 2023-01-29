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


// Questions Accordion
const accordionItem = document.querySelectorAll(".questions__item");

accordionItem.forEach((item) => {
	const accordionHeader = item.querySelector(".questions__header");

	accordionHeader.addEventListener("click", () => {
		const openItem = document.querySelector(".accordion-open");

		toggleItem(item);

		if (openItem && openItem !== item) {
			toggleItem(openItem)
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


// Lightbox Gallery
const productItems = document.querySelectorAll(".product__img");
const totalProductItems = productItems.length;
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox__img");
const lightboxClose = document.querySelector(".lightbox__close");
const lightboxCounter = document.querySelector(".caption__counter");

let itemIndex = 0;

for (let i = 0; i < totalProductItems; i++) {
	productItems[i].addEventListener("click", () => {
		itemIndex = i;

		changeItem();
		toggleLightbox();
	})
}

function prevItem() {
	if (itemIndex === 0) 
		itemIndex = totalProductItems - 1;
	else 
		itemIndex--;

	changeItem();
}

function nextItem() {
	if (itemIndex === totalProductItems - 1) 
		itemIndex = 0;
	else 
		itemIndex++;

	changeItem();
}

function toggleLightbox() {
	lightbox.classList.toggle("open");
}

function changeItem() {
	imgSrc = productItems[itemIndex].querySelector(".product__img img").getAttribute("src"); // Get clicked img's source
	lightboxImg.src = imgSrc; // Change present lightboxImg source with clicked img's source
	lightboxCounter.innerHTML = `${itemIndex + 1} of ${totalProductItems}`; // Rewrite lightbox counter
}

lightbox.addEventListener("click", () => {
	if(event.target === lightboxClose || event.target === lightbox) {
		toggleLightbox();
	}
})