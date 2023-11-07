const baseURL = "https://katyounge.github.io/wdd230/";

const linksURL = "https://katyounge.github.io/wdd230/data/links.json";

let linkList = document.querySelector('.lesson-links');
linkList.innerHTML = '';

async function getLinkData(url) {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.lessons);
    displayLinks(data.lessons);
}

getLinkData(linksURL);

const displayLinks = (weeks) => {


    
    weeks.forEach((week) => {

        
        let lessonItem = document.createElement('li');
        let linkData = `<a href="${week.links.url}" title="${week.links.title}">${week.links.title}</a>`

        lessonItem.setAttribute("class", "linkItem");
        lessonItem.innerHTML = `Week ${week.lesson}: ${linkData}`;

        weeks.links.forEach((activity) => {
            let linkURL = document.createElement('a');
            linkURL.settAttribute("href", activity.url);
            linkURL.textContent = `${activity.title} | `;
            lessonItem.textContent.append(linkURL);
            
        });


        linkList.appendChild(lessonItem);


    });
    
}


const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let portrait = document.createElement('img');
        let dob = document.createElement('p');
        let pob = document.createElement('p');
        card.setAttribute("class", "prophet-card");
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        dob.textContent =  `Date of Birth: ${prophet.birthdate}`;
        pob.textContent =  `Place of Birth: ${prophet.birthplace}`;
        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", '340');
        portrait.setAttribute("height", '440');
        card.appendChild(fullName);
        card.appendChild(dob);
        card.appendChild(pob);
        card.appendChild(portrait);
        cards.appendChild(card);

    });
}