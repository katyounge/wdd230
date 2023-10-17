const mainnav = document.querySelector('.navigation');
const hamButton = document.querySelector('#menu');

hamButton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hamButton.classList.toggle('show');
});

const toggleSwitch = document.querySelector('#switch');
const main = document.querySelector("main");

toggleSwitch.addEventListener('click', () => {
	// toggleSwitch.classList.toggle('active');
	console.log(toggleSwitch)
	toggleSwitch.classList.toggle('on');
	if (toggleSwitch.input.value == "true") {
		toggleSwitch.input.value = "false";
		main.style.background = "#000";
		main.style.color = "#fff";
	}
	else {
		toggleSwitch.input.value = "true";
		main.style.background = "#fff";
		main.style.color = "#000";
	}
});



// toggleSwitch.addEventListener('click', () => {
// 	if(toggleSwitch.classList.toggle('on')) {
// 		main.style.background = "#000";
// 		main.style.color = "#fff";
// 	}
// })



    // toggleSwitch.addEventListener('click', () => {
    //   toggle.classList.toggle('on');
	//   document.getElementsByTagName('main').style.color = "white";
    // });

