const weatherMain = document.querySelector("#weather-main");
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#weather-description');
const humidity = document.querySelector('#current-humidity');

const forecastWeatherMain = document.querySelector("#forecast-weather-main");
const forecastCurrentTemp = document.querySelector('#forecast-current-temp');
const forecastWeatherIcon = document.querySelector('#forecast-weather-icon');
const forecastCaptionDesc = document.querySelector('#forecast-weather-description');
const forecastHumidity = document.querySelector('#forecast-current-humidity');

const now = new Date();
const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
const timestamp = startOfDay / 1000;
const forecastTimestamp = timestamp + 140400;

const maxTemp = document.querySelector("#max-temp");




const url = 'https://api.openweathermap.org/data/2.5/weather?lat=20.42&lon=-88.92&units=imperial&appid=ee2dc236cfc7a44e4ed19315866fcc64';
const urlForecast = 'https://api.openweathermap.org/data/2.5/forecast?lat=20.42&lon=-88.92&units=imperial&appid=ee2dc236cfc7a44e4ed19315866fcc64';

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
    weatherMain.innerHTML = data.weather[0].main;
    humidity.innerHTML = `${data.main.humidity.toFixed(0)}% humidity`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    const capDesc = desc.charAt(0).toUpperCase() + desc.slice(1);
    captionDesc.textContent = capDesc;
    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", desc);

    maxTemp.innerHTML = `${data.main.temp_max.toFixed(0)}&deg;F`

};



function displayResults2(data) {


    forecastWeatherMain.innerHTML =  data.list[8].weather[0].main;
    forecastCurrentTemp.innerHTML =  `${data.list[8].main.temp.toFixed(0)}&deg;F`
    const forecastIconSrc = `https://openweathermap.org/img/w/${data.list[8].weather[0].icon}.png`  
    

    let forecastDesc = data.list[8].weather[0].description;
    const forecastCapDesc = forecastDesc.charAt(0).toUpperCase() + forecastDesc.slice(1);
    
    forecastCaptionDesc.textContent = forecastCapDesc; 
    forecastHumidity.innerHTML = `${data.list[8].main.humidity.toFixed(0)}% humidity`;

    forecastWeatherIcon.setAttribute("src", forecastIconSrc);
    forecastWeatherIcon.setAttribute("alt", forecastDesc);


    
}
