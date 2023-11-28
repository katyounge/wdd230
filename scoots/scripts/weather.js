const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#weather-description');



const url = 'https://api.openweathermap.org/data/2.5/weather?lat=47.74&lon=-121.99&units=imperial&appid=ee2dc236cfc7a44e4ed19315866fcc64';
const urlForecast = 'https://api.openweathermap.org/data/2.5/forecast?lat=47.74&lon=-121.99&units=imperial&appid=ee2dc236cfc7a44e4ed19315866fcc64';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }

    
}

apiFetch();

async function apiFetch2() {
    try {
        const response = await fetch(urlForecast);
        if (response.ok) {
            const data2 = await response.json();
            displayResults2(data2);
            
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }

    
}

apiFetch2();

function displayResults(data) {
     
    currentTemp.innerHTML = `${data.main.temp.toFixed(0)}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    const capDesc = desc.charAt(0).toUpperCase() + desc.slice(1);
    captionDesc.textContent = capDesc;
    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", desc);

};



function displayResults2(data2) {
    const oneDayData = document.querySelector('#oneday');
    const twoDayData = document.getElementById('twoday');
    const threeDayData = document.getElementById('threeday');
    oneDayData.innerHTML = `${data2.list[8].main.feels_like.toFixed(0)} &deg;F average`;
    twoDayData.innerHTML = `${data2.list[16].main.feels_like.toFixed(0)} &deg;F average`;
    threeDayData.innerHTML = `${data2.list[24].main.feels_like.toFixed(0)} &deg;F average`;
}
