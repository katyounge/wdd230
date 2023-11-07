const baseURL = "https://katyounge.github.io/wdd230/";

const linksURL = "https://katyounge.github.io/wdd230/data/links.json";

async function getLinkData(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.lessons);
    // displayProphets(data.prophets);
}

getLinkData(linksURL);