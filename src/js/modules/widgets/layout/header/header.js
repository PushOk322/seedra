import "./header.scss";

export async function loadHeader() {
	const response = await fetch(
		"./src/js/modules/widgets/layout/header/header.html"
	);
	const content = await response.text();
	document.getElementById("header-section").innerHTML = content;

	const search = document.querySelector(".header__search");
	const socials = document.querySelector(".header__socials");
	const burgerMenu = document.querySelector(".header__burger-menu");
	const burgerIcon = document.querySelector(".header__burger-icon");

	function handleResize() {
		const rightContainer = document.querySelector(
			".header__right-container"
		);
		const utils = document.querySelector(".header__utils");

		if (window.innerWidth <= 1050) {
			if (!burgerMenu.contains(search)) {
				burgerMenu.prepend(search);
			}
			if (!burgerMenu.contains(socials)) {
				burgerMenu.appendChild(socials);
			}
		} else {
			if (burgerMenu.contains(search)) {
				burgerMenu.removeChild(search);
			}
			if (burgerMenu.contains(socials)) {
				burgerMenu.removeChild(socials);
			}

			rightContainer.insertBefore(socials, utils);
			rightContainer.insertBefore(search, utils);
		}
	}

	function burgerClick() {
		if (burgerIcon.classList.contains("active")) {
			burgerIcon.classList.remove("active");
			burgerMenu.classList.remove("active");
			document.removeEventListener(
				"click",
				closeBurgerOnClickOutside
			);
		} else {
			burgerIcon.classList.add("active");
			burgerMenu.classList.add("active");
			document.addEventListener(
				"click",
				closeBurgerOnClickOutside
			);
		}
	}

	function closeBurgerOnClickOutside(event) {
		if (
			!burgerMenu.contains(event.target) &&
			!burgerIcon.contains(event.target)
		) {
			burgerIcon.classList.remove("active");
			burgerMenu.classList.remove("active");
			document.removeEventListener(
				"click",
				closeBurgerOnClickOutside
			);
		}
	}

	window.addEventListener("resize", handleResize);
	burgerIcon.addEventListener("click", burgerClick);
	handleResize();
}
