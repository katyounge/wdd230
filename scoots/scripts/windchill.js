const windSpeed = document.querySelector('.speed').innerHTML;
const temperature = document.querySelector('.temp').innerHTML;
const windChill = document.querySelector('.windchill');

console.log(windSpeed);
console.log(temperature);


if (windSpeed > 3.0 && temperature <= 50){
    chillNumber = 35.74 + 0.6215 * temperature - 35.75 * windSpeed**0.16 + 0.4275 * temperature * windSpeed**0.16;
    
} else {
    chillNumber = "N/A";
}

windChill.innerText = `${chillNumber.toFixed(4)} °F`;
console.log(chillNumber);
