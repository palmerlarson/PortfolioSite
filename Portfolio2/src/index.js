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
		})
};

window.onload = init;


let themeChange = () => {
	let light = document.querySelectorAll("a, span");
	let dark = document.querySelectorAll(".card");
	let cdn = document.getElementById("darkCDN");
	let icon = document.getElementById("btnSwitch");
	let navBottom = document.querySelector("nav");
	let burger = document.querySelector(".hamburger");
	let footerTop = document.querySelector(".footerTop");

	if (document.body.classList.contains('dark')) {
		burger.classList.remove("bg-white");
		footerTop.classList.remove("border-top-light");
		navBottom.classList.add('border-bottom-dark');
		navBottom.classList.remove('border-bottom-light');
		document.body.classList.remove('dark');
		icon.innerHTML = `<i class="fa-solid fa-moon"></i>`;
		cdn.href = ``;
		for (let i = 0; i < light.length; i++) {
			light[i].classList.remove('light');
		}
		for (let i = 0; i < dark.length; i++) {
			dark[i].classList.remove('darkDiv');
		}

	} else {
		document.body.classList.add('dark');
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
}

// theme switch
document.getElementById('btnSwitch').addEventListener('click', themeChange);



import * as bootstrap from 'bootstrap';
