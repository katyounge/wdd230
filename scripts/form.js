const pass1 = document.querySelector('#password');
const pass2 = document.querySelector('#password2');

const msg = document.querySelector('#formmsg');

pass2.addEventListener('focusout', checkSame);

function checkSame() {
    if (pass1.value == pass2.value) {
        msg.style.display = 'none';
        pass2.style.backgroundColor = 'white';
        pass2.style.color = '#000';
    } else {
        msg.textContent = '❗Passwords DO NOT MATCH';
        msg.style.visibility = 'show';
        pass2.style.backgroundColor = '#fff0f3';
        pass2.value = '';
        pass2.focus() || pass1.focus();

    }
}


const rangevalue = document.getElementById('rangevalue');
const range = document.getElementById('range');

range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}