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

	if (document.body.classList.contains('dark')) {
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
		cdn.href = `https://unpkg.com/github-activity-feed@latest/dist/github-activity.dark.min.css`;
		icon.innerHTML = `<i class="fa-solid fa-sun"></i>`;
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

var typed = new Typed('#typed', {
	stringsElement: '#typed-strings',
	typeSpeed: 40,
	backSpeed: 20,
	backDelay: 3000,
	loop: true
});

GitHubActivity.feed({
	username: "palmerlarson",
	selector: "#feed",
	limit: 20
});



import * as bootstrap from 'bootstrap';
