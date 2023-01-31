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
	if (event.target === lightboxClose || event.target === lightbox) {
		toggleLightbox();
	}
})