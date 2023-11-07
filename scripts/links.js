const baseURL = "https://katyounge.github.io/wdd230/";

const linksURL = "https://katyounge.github.io/wdd230/data/links.json";

async function getLinkData(url) {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.lessons);
    displayLinks(data);
}

getLinkData(linksURL);

const displayLinks = (weeks) => {
    // linkList.innerHTML = '';
    let linkList = document.querySelector('.lesson-links');
    
}

weeks.forEach((week) => {
    
    let lessonItem = document.createElement('li');
    

    lessonItem.setAttribute("class", "linkItem");
    lessonItem.textContent = `Week ${week.lesson}: `

    
    weeks.links.forEach((activity) => {
        let linkURL = document.createElement('a');
        linkURL.settAttribute("href", activity.url);
        linkURL.textContent = `${activity.title} | `;
        lessonItem.textContent.append = linkURL;
    });

    
    linkList.appendChild(lessonItem);

});

