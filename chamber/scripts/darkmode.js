const toggleSwitch = document.getElementById('engaged');
const callToAction = document.getElementById('call-to-action');

toggleSwitch.addEventListener('change', function () {
	if (this.checked) {
		document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
    }

    	
});

