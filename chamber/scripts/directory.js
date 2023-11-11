const url = 'https://katyounge.github.io/wdd230/chamber/data/members.json';

const cards = document.querySelector('.cards');

async function getMemberData(url) {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.members);
    displayMemberData(data.members);
}

getMemberData(url);

const displayMemberData = (members) => {
    members.forEach((member) => {

        let card = document.createElement('section');
        let busName = document.createElement('h3');
        let membership = document.createElement('h4');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('p');
        let image = document.createElement('img');
        let contact = document.createElement('p');
        card.setAttribute("class", "member-card");
        busName.textContent = `${member.name}`;
        membership.textContent = `Membership Level - ${member.membership}`;
        address.textContent = member.address;
        phone.textContent = `Phone: ${member.phone}`;
        website.innerHTML = `<a href="${member.url} title="${member.name}>${member.url}</a>`;
        contact.textContent = `Main Contact: ${member.contact}`;

        image.setAttribute("src", member.image);
        image.setAttribute("alt", `Business Ad for ${member.name}`);
        image.setAttribute("loading", "lazy");
        image.setAttribute("width", '320');
        image.setAttribute("height", '400');
        card.appendChild(image);
        card.appendChild(busName);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(contact);
        card.appendChild(website);
        cards.appendChild(card);

    });
}

const gridButton = document.querySelector('#grid-view');
const listButton = document.querySelector('#list-view');
const cardSection = document.querySelector('.cards');

listButton.addEventListener('click', () => {
    cardSection.setAttribute("id","listview");
});

gridButton.addEventListener('click', () => {
    cardSection.removeAttribute("id");
});
