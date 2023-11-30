const rentalcardurl = 'https://katyounge.github.io/wdd230/scoots/data/rentals2.json';

const rentalcards = document.querySelector('.rental-cards');

async function getRentalCardData(url) {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.members);
    displayRentalCardData(data.members);
}

getRentalCardData(rentalcardurl);

const displayRentalCardData = (rentals) => {
    rentals.forEach((rental) => {

        let card = document.createElement('section');
        let rentalName = document.createElement('h3');
        let capacity = document.createElement('h4');
        let price = document.createElement('p');
        let image = document.createElement('img');
        card.setAttribute("class", "rental-card");
        rentalName.textContent = `${rental.vehicles.name}`;
        capacity.textContent = `Capacity - ${rental.vehicles.capacity}`;
        price.textContent = `Prices starting at ${rental.vehicles.prices.reservation-type.reservation.half-day}`;
        image.setAttribute("src", rental.vehicles.image);
        image.setAttribute("alt", rental.vehicles.name);
        image.setAttribute("loading", "lazy");
        image.setAttribute("width", '1000');
        image.setAttribute("height", '650');
        card.appendChild(image);
        card.appendChild(rentalName);
        card.appendChild(capacity);
        card.appendChild(price);
        rentalcards.appendChild(card);

    });
}