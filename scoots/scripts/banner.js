const bannerToggle = document.querySelector('.banner-exit');
const wholeBanner = document.querySelector('.banner');




bannerToggle.addEventListener('click', () => {
	wholeBanner.setAttribute("id","hide-banner");
});

const currentDay = new Date().getDay();


if(currentDay === 0 || currentDay === 4 || currentDay === 5 || currentDay === 6 ) {
    wholeBanner.setAttribute("id","hide-banner");
};