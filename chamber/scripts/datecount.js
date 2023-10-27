
// 

// let visitArray = getDateInfo() || [];

// let visitArray = [];

// let today = new Date();

// visitMessage.textContent = today
// visitCount.textContent = numVisits

// let numVisits = Number(window.localStorage.getItem('numVisits-ls')) || 0;

// if (numVisits == 0) {
//     visitCount.textContent = 'Welcome! Let us know if you have any questions.'
// } else if (numVisits > 0 && )



function setLastVisitDate() {
    localStorage.setItem('lastVisitDate', JSON.stringify(currentVisitDate));
};

function getLastVisitDate() {
    return JSON.parse(localStorage.getItem('lastVisitDate'));
};

let currentVisitDate = Date.now();
const visitMessage = document.querySelector('.visit-message');
let lastVisitDate = getLastVisitDate();



if (lastVisitDate == 0) {
    visitMessage.textContent = "Welcome! Let us know if you have any questions.";
} else {
    let dayMs = 86400000
    let dif = currentVisitDate - lastVisitDate;
    console.log(dif);
    let days = dif / dayMs;
    console.log(days);
    if (dif < dayMs) {
        visitMessage.textContent = "Back so soon! Awesome!";
    } else {
        visitMessage.textContent = `You last visited ${days} days ago`;
    }
};


const visitCount = document.querySelector('.visit-count');
let numVisits = Number(window.localStorage.getItem('numVisits-ls')) || 0;

if (numVisits == 0) {
    visitCount.textContent = `This is your first visit. 🥳 Welcome!`;
	
} else {
	visitCount.textContent = numVisits;
}

numVisits++;

setLastVisitDate();

localStorage.setItem('numVisits-ls', numVisits);
