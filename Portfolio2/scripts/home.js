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
