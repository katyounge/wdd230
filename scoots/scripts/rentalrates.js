const rentalrateurl = 'https://katyounge.github.io/wdd230/scoots/data/rentals2.json';

const rentalTable = document.querySelector('.json-table');

async function getRentalRateData(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.rentals);
    displayRentalRateData(data.rentals);
}

getRentalRateData(rentalrateurl);

const displayRentalRateData = (rentals) => {
    let table = document.createElement('table');
    let caption = document.createElement("caption");
    caption.textContent = "Scoots Rental Pricing";
    table.appendChild(caption);

    let thead = document.createElement('thead');
    table.appendChild(thead);

    let tablerow1 = document.createElement('tr');
    tablerow1.setAttribute('class', 'tablehead1');
    let tablerow2 = document.createElement('tr');
    tablerow2.setAttribute('class', 'tablehead2');

    let head1 = document.createElement('th');
    let head2 = document.createElement('th');
    let head3 = document.createElement('th');

    head1.setAttribute('colspan', '2');
    head1.setAttribute('scope', 'colgroup');
    head1.setAttribute('class', 'blank');
    head1.textContent = "";

    head2.setAttribute('colspan', '2');
    head2.setAttribute('scope', 'colgroup');
    head2.setAttribute('class', 'reservationHead');
    head2.textContent = "Reservation";

    head3.setAttribute('colspan', '2');
    head3.setAttribute('scope', 'colgroup');
    head3.setAttribute('class', 'walkin');
    head3.textContent = "Walk-In";


    tablerow1.appendChild(head1);
    tablerow1.appendChild(head2);
    tablerow1.appendChild(head3);


    let head4 = document.createElement('th');
    let head5 = document.createElement('th');
    let head6 = document.createElement('th');
    let head7 = document.createElement('th');
    let head8 = document.createElement('th');
    let head9 = document.createElement('th');
    
    head4.setAttribute('scope', 'col');
    head4.setAttribute('class', 'rentaltype');
    head4.textContent = "Rental Type";

    head5.setAttribute('scope', 'col');
    head5.setAttribute('class', 'maxpersons');
    head5.textContent = "Max. Persons";

    head6.setAttribute('scope', 'col');
    head6.setAttribute('class', 'halfdayres');
    head6.textContent = "Half Day (3 hrs)";

    head7.setAttribute('scope', 'col');
    head7.setAttribute('class', 'fulldayres');
    head7.textContent = "Full Day";

    head8.setAttribute('scope', 'col');
    head8.setAttribute('class', 'halfdaywalk');
    head8.textContent = "Half Day (3 hrs)";

    head9.setAttribute('scope', 'col');
    head9.setAttribute('class', 'fulldaywalk');
    head9.textContent = "Full Day";

    tablerow2.appendChild(head4);
    tablerow2.appendChild(head5);
    tablerow2.appendChild(head6);
    tablerow2.appendChild(head7);
    tablerow2.appendChild(head8);
    tablerow2.appendChild(head9);
    
    thead.appendChild(tablerow1);
    thead.appendChild(tablerow2);

    let body = document.createElement('tbody');
    table.appendChild(body);




        rentals.forEach((rental) => {

            rental.vehicles.forEach((vehicle) => {
                let vehicleRow = document.createElement('tr');
                let vehicleHead = document.createElement('th');
                vehicleRow.appendChild(vehicleHead);
                
                vehicleHead.textContent = vehicle.name;

                let maxPersons = document.createElement('td');
                maxPersons.textContent = vehicle.capacity;
                vehicleRow.appendChild(maxPersons);

                let rentalPrice1 = document.createElement('td');
                rentalPrice1.textContent = vehicle.prices.reservation.halfday;
                vehicleRow.appendChild(rentalPrice1);

                let rentalPrice2 = document.createElement('td');
                rentalPrice2.textContent = vehicle.prices.reservation.fullday;
                vehicleRow.appendChild(rentalPrice2);

                let rentalPrice3 = document.createElement('td');
                rentalPrice3.textContent = vehicle.prices.walkin.halfday;
                vehicleRow.appendChild(rentalPrice3);

                let rentalPrice4 = document.createElement('td');
                rentalPrice4.textContent = vehicle.prices.walkin.fullday;
                vehicleRow.appendChild(rentalPrice4);

                

                body.appendChild(vehicleRow);  


            });

            

                        
        });
    
    rentalTable.appendChild(table);
}