const bannerToggle = document.querySelector('.banner-exit');
const wholeBanner = document.querySelector('.banner');




bannerToggle.addEventListener('click', () => {
	wholeBanner.setAttribute("id","hide-banner");
});

