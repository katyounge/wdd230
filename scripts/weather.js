const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#weather-description');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=47.74&lon=-121.99&units=imperial&appid=ee2dc236cfc7a44e4ed19315866fcc64';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }

    
}

apiFetch();

function displayResults(data) {
     
    currentTemp.innerHTML = `${data.main.temp.toFixed(2)}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    const capDesc = desc.charAt(0).toUpperCase() + desc.slice(1);
    captionDesc.textContent = capDesc;
    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", desc);

};
