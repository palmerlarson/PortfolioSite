const init = () => {
    //initial check for dark desktop
	if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
		themeChange();
	}
    //if user swithces to dark mode via personal desktop
	window.matchMedia('(prefers-color-scheme: dark)')
		.addEventListener('change', event => {
			if (event.matches) {
				themeChange();
			}
		});

};

window.onload = init;


const themeChange = () => {
	if (document.body.classList.contains('dark')) {
		lightMode();
	} else {
		darkMode();
	}
}

const lightMode = () => {
	let light = document.querySelectorAll("a, span");
	let dark = document.querySelectorAll(".card");
	let cdn = document.getElementById("darkCDN");
	let icon = document.getElementById("btnSwitch");
	let navBottom = document.querySelector("nav");
	let burger = document.querySelector(".hamburger");
	let footerTop = document.querySelector(".footerTop");

	document.body.classList.remove('dark');
	localStorage.setItem("darkMode", "false");
	burger.classList.remove("bg-white");
	footerTop.classList.remove("border-top-light");
	navBottom.classList.add('border-bottom-dark');
	navBottom.classList.remove('border-bottom-light');
	icon.innerHTML = `<i class="fa-solid fa-moon"></i>`;
	cdn.href = ``;
	for (let i = 0; i < light.length; i++) {
		light[i].classList.remove('light');
	}
	for (let i = 0; i < dark.length; i++) {
		dark[i].classList.remove('darkDiv');
	}
}

const darkMode = () => {
	let light = document.querySelectorAll("a, span");
	let dark = document.querySelectorAll(".card");
	let cdn = document.getElementById("darkCDN");
	let icon = document.getElementById("btnSwitch");
	let navBottom = document.querySelector("nav");
	let burger = document.querySelector(".hamburger");
	let footerTop = document.querySelector(".footerTop");

	document.body.classList.add('dark');
	localStorage.setItem("darkMode", "true");
	burger.classList.add("bg-white");
	footerTop.classList.add("border-top-light");
	navBottom.classList.add('border-bottom-light');
	navBottom.classList.remove('border-bottom-dark');
	cdn.href = `https://unpkg.com/github-activity-feed@latest/dist/github-activity.dark.min.css`;
	icon.innerHTML = `<i class="fa-solid fa-sun text-warning"></i>`;
	for (let i = 0; i < light.length; i++) {
		light[i].classList.add('light');
	}

	for (let i = 0; i < dark.length; i++) {
		dark[i].classList.add('darkDiv');
	}
}

// theme switch
document.getElementById('btnSwitch').addEventListener('click', themeChange);

import * as bootstrap from 'bootstrap';
