import "./hero.scss";

export async function loadHero() {
	const response = await fetch("./src/js/modules/sections/hero/hero.html");
	const content = await response.text();
	document.getElementById("hero-section").innerHTML = content;
}
