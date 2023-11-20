const mainnav = document.querySelector('.navigation');
const hamButton = document.querySelector('#menu');

hamButton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hamButton.classList.toggle('show');
});

function addAttr() {
     
    hamButton.setAttribute("alt", "hamburger-menu-button");

};

addAttr();