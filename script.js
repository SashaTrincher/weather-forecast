// weather script

function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = '185dbcc57e27f9315a49d3f1c762ebd7';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const image = document.getElementById('wether-icon');
    const temperatureElement = document.getElementById('temperature');
    const windSpeedElement = document.getElementById('windSpeed');
    const humidityElement = document.getElementById('humidity');
    const descriptionElement = document.getElementById('description');
    const humTxt = document.getElementById('humTxt');
    const wndSpdTxt = document.getElementById('windSpeedTxt');
    const wndSpdImg = document.querySelector('.fa-wind');
    const humImg = document.querySelector('.hum-img');

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {

            const temperature = Math.floor(data.main.temp);
            const windSpeed = data.wind.speed;
            const humidity = data.main.humidity;
            const description = data.weather[0].description;

            temperatureElement.textContent = `${temperature}°C`;
            humidityElement.textContent = `${humidity}%`;
            windSpeedElement.textContent = `${windSpeed}Km/h`;
            descriptionElement.textContent = `${description}`;
            humTxt.textContent = 'Humidity';
            wndSpdTxt.textContent = 'Wind Speed';
            wndSpdImg.classList.remove('inactive');
            humImg.classList.remove('inactive');

                switch (data.weather[0].main) { 
                    case 'Clear':
                        image.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Weather-clear.svg/1200px-Weather-clear.svg.png';
                        break;

                    case 'Rain':
                        image.src = 'https://cdn-icons-png.flaticon.com/512/4150/4150897.png';
                        image.classList.replace('inactive', 'active');
                        break;

                    case 'Snow':
                        image.src = 'https://cdn-icons-png.flaticon.com/512/1291/1291679.png';
                        image.classList.replace('inactive', 'active');
                    break;

                    case 'Clouds':
                        image.src = 'https://cdn-icons-png.flaticon.com/512/5903/5903939.png';
                        image.classList.replace('inactive', 'active');
                        break;

                    case 'Haze':
                        image.src = 'https://cdn-icons-png.flaticon.com/512/4005/4005901.png';
                        image.classList.replace('inactive', 'active');
                        break;

                    default:
                        image.src = '';
                }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
    };