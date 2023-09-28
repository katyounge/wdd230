document.getElementById("year").innerHTML = new Date().getFullYear();
document.getElementById("lastModified").innerHTML = `Last Modification: ${new Date(document.lastModified)}`;


const mainnav = document.querySelector('.navigation');
const hamButton = document.querySelector('#menu');

hamButton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hamButton.classList.toggle('show');
});
	