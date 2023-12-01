function setLastVisitDate() {
    localStorage.setItem('lastVisitDate', JSON.stringify(currentVisitDate));
};

function getLastVisitDate() {
    return JSON.parse(localStorage.getItem('lastVisitDate'));
};

let currentVisitDate = Date.now();
const visitMessage = document.querySelector('.visit-message');
let lastVisitDate = getLastVisitDate();



if (lastVisitDate == null) {
    visitMessage.textContent = "Welcome! Let us know if you have any questions.";
} else {
    let dayMs = 86400000
    let dif = currentVisitDate - lastVisitDate;
    let days = dif / dayMs;
    if (dif < dayMs) {
        visitMessage.textContent = "Back so soon! Awesome!";
    } else {
        visitMessage.textContent = `You last visited ${days} days ago`;
    }
};


setLastVisitDate();

