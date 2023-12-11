const rentalcardurl = 'https://katyounge.github.io/wdd230/scoots/data/rentals2.json';

const rentalcards = document.querySelector('.rental-cards');

async function getRentalCardData(url) {
    const response = await fetch(url);
    const data = await response.json();
    displayRentalCardData(data.rentals);
}

getRentalCardData(rentalcardurl);

const displayRentalCardData = (rentals) => {
    rentals.forEach((rental) => {

        rental.vehicles.forEach ((vehicle) => {
            let card = document.createElement('section');
            let rentalName = document.createElement('h3');
            let capacity = document.createElement('h4');
            let price = document.createElement('p');
            let image = document.createElement('img');
            card.setAttribute("class", "rental-card");
            rentalName.textContent = `${vehicle.name}`;
            capacity.textContent = `Capacity - ${vehicle.capacity}`;
            price.textContent = `Prices starting at ${vehicle.prices.reservation.halfday}`;
            image.setAttribute("src", vehicle.image);
            image.setAttribute("alt", vehicle.name);
            image.setAttribute("loading", "lazy");
            image.setAttribute("width", '1000');
            image.setAttribute("height", '650');
            card.appendChild(image);
            card.appendChild(rentalName);
            card.appendChild(capacity);
            card.appendChild(price);
            rentalcards.appendChild(card);

        });


    });
}