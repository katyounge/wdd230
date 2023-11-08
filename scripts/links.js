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

        let isFirst = true;
        let lessonItem = document.createElement('li');
        lessonItem.setAttribute("class", "linkItem");
        lessonItem.innerHTML = `Week ${week.lesson}: `;

        week.links.forEach((activity) => {
            let url = activity.url;
            let name = activity.title;

            if (isFirst === true) {
                isFirst = false;

            } else {
                lessonItem.innerHTML += ` |`;
            }

            lessonItem.innerHTML += ` <a href="${url}" title="${name}">${name}</a>`;
            
        });

        linkList.appendChild(lessonItem);


    });
    
}


