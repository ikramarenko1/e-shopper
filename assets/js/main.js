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
	if (this.scrollY > 50)
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