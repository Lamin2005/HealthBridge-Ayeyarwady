
const scrollButton = document.getElementById("scrollToTop");

// Show/hide button on scroll
window.addEventListener("scroll", () => {
	if (window.scrollY > 300) {
		scrollButton.classList.add("show");
	} else {
		scrollButton.classList.remove("show");
	}
});

// Scroll to top function
function scrollToTop() {
	window.scrollTo({
		top: 0,
		behavior: "smooth"
	});
}