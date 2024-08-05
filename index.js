const header = document.querySelector("header");
const navLinks = header.querySelectorAll(".header__menu-item");
const hiddenPart = header.querySelector(".header__hiddenpart");

// Add event listeners to nav links
navLinks.forEach((link) => {
	if (link.id === "collections") {
		link.addEventListener("mouseover", openMenu);
	}
});

function openMenu(event) {
	hiddenPart.classList.add("header__hiddenpart_opened");
	hiddenPart.addEventListener("mouseleave", closeMenu);
}

function closeMenu(event) {
	hiddenPart.classList.remove("header__hiddenpart_opened");
	hiddenPart.removeEventListener("mouseleave", closeMenu);
}
