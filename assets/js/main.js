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