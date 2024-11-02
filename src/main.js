import "./styles/global.scss";

import { loadHeader } from "./js/modules/widgets/layout/header/header";
import { loadFooter } from "./js/modules/widgets/layout/footer/footer";
import { loadHero } from "./js/modules/sections/hero/hero";

document.addEventListener("DOMContentLoaded", () => {
	loadHeader();
	loadFooter();
	loadHero();
	// Load other components as needed
});
