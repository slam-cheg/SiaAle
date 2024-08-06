const header = document.querySelector("header");
const headerLogo = header.querySelector(".header__logo");
const navLinks = header.querySelectorAll(".header__menu-item");
const hiddenParts = header.querySelectorAll(".header__hiddenpart");
const pageBlur = document.querySelector(".page-blur");
const burger = header.querySelector(".header__burger");
const burgerMenu = document.querySelector(".header__mobile");
const closeBurger = burgerMenu.querySelector(".header__mobile-close");
const main = document.querySelector("main");
const mainImage = main.querySelector(".main__image");
const imageDesktop = mainImage.querySelector("#main-img-desktop");
const imageMobile = mainImage.querySelector("#main-img-mobile");
const imageDesktopAdditional = mainImage.querySelector("#main-img-desktop-additional");
//const ImageDesktopSource = document.querySelector(".main-image-desktop").querySelector("img").dataset.original;
//const ImageMobileSource = document.querySelector(".main-image-mobile").querySelector("img").dataset.original;
//const logoHeaderSource = document.querySelector(".header-logo-shoko").querySelector("img").dataset.original;

//imageDesktop.srcset = ImageDesktopSource
//imageMobile.srcset = ImageMobileSource
//imageDesktopAdditional.src = imageDesktop.srcset;
//headerLogo.src = logoHeaderSource;

burger.addEventListener("click", openBurgerMenu);
closeBurger.addEventListener("click", closeBurgerMenu);

function openBurgerMenu() {
	burgerMenu.classList.add("header__mobile_opened");
	pageBlur.classList.add("page-blur_opened");
	pageBlur.addEventListener("click", closeBurgerMenu);
}

function closeBurgerMenu() {
	burgerMenu.classList.remove("header__mobile_opened");
	pageBlur.classList.remove("page-blur_opened");
	pageBlur.removeEventListener("click", closeBurgerMenu);
}

// Add event listeners to nav links
navLinks.forEach((link) => {
	if (link.id === "collections") {
		link.addEventListener("mouseover", () => {
			openMenu(link.id);
		});
	}
	if (link.id === "recomendations") {
		link.addEventListener("mouseover", () => {
			openMenu(link.id);
		});
	}
	if (link.id === "information") {
		link.addEventListener("mouseover", () => {
			openMenu(link.id);
		});
	}
});

function openMenu(navId) {
	if (header.querySelector(".header__hiddenpart_opened")) {
		closeMenu();
	}
	const submenu = [...hiddenParts].find((part) => part.id === `${navId}-hiddenpart`);
	submenu.classList.add("header__hiddenpart_opened");
	submenu.addEventListener("mouseleave", closeMenu);
	pageBlur.classList.add("page-blur_opened");
}

function closeMenu() {
	const openedSubmenu = header.querySelector(".header__hiddenpart_opened");
	openedSubmenu.classList.remove("header__hiddenpart_opened");
	openedSubmenu.removeEventListener("mouseleave", closeMenu);
	pageBlur.classList.remove("page-blur_opened");
}
