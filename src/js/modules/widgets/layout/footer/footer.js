import "./footer.scss";

export async function loadFooter() {
	const response = await fetch(
		"./src/js/modules/widgets/layout/footer/footer.html"
	);
	const content = await response.text();
	document.getElementById("footer-section").innerHTML = content;
}
