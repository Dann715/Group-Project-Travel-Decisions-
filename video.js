function cityWeather() {
    const locationInput = document.getElementById('cityInput').value;
    console.log(locationInput);
    fetch(`http://api.weatherstack.com/current?access_key=23f8f4774a653bfdb515c61d101f5805&query=${locationInput}`)
        .then((res) => res.json())
        .then((resJson) => {
                console.log(resJson.current);
                document.getElementById('weather_content').style.display = 'block';
                document.getElementById('weather_content').innerHTML = "<h2>Current weather in " + resJson.location.name + ", " +  resJson.location.region + ", " + resJson.location.country + ":</h2><br>";
                document.getElementById('weather_content').innerHTML += "Temperature: " + resJson.current.temperature + " °C<br>";
                document.getElementById('weather_content').innerHTML += "Rain: " + resJson.current.precip + " MM<br>";
                document.getElementById('weather_content').innerHTML += "Wind Speed: " + resJson.current.wind_speed + " KPH<br>";
                document.getElementById('weather_content').innerHTML += "Humidity: " + resJson.current.humidity + " %";
        })

  
// Nominatim api call to get coordinates for open-meteo API

    fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${locationInput}`)
        .then((res) => res.json())
        .then((geoData) => {
            if (geoData.length > 0) {
                const latitude = geoData[0].lat;
                const longitude = geoData[0].lon;
                createMap(latitude, longitude);
                // Backend fetch (Open-Meteo API Call Future Weather Forecast)
                fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min`)
                    .then((res) => res.json())
                    .then((data) => {
                        document.getElementById('weather_content').innerHTML += `
                            <h3>Tomorrows Forecast:</h3>
                            Max Temp Tomorrow: ${data.daily.temperature_2m_max[0]} °C<br>
                            Min Temp Tomorrow: ${data.daily.temperature_2m_min[0]} °C<br>
                        `;
                    })
                    .catch((error) => console.error("Error fetching forecast data:", error));
            } else {
                document.getElementById('weather_content').innerHTML += "Location not found. Please enter a valid city.<br>";
            }
        })
        .catch((error) => console.error("Error fetching coordinates:", error));

}

const planeImages = [
    'https://images.unsplash.com/photo-1436491865332-7a61a109cc05',
    'https://images.unsplash.com/photo-1544016768-982d1554f0b9',
    'https://images.unsplash.com/photo-1570710891163-6d3b5c47248b',
    'https://images.unsplash.com/photo-1517429128955-67ff5c1e29da',
    'https://images.unsplash.com/photo-1483304528321-0674f0040030'
];

const vacationImages = [
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1',
    'https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a',
    'https://images.unsplash.com/photo-1519046904884-53103b34b206'
];

const slider = document.getElementById('imageSlider');
let currentSlide = 0;

function loadAbout() {
    if (document.URL.includes("index.html")) {
        planeImages.forEach((src, index) => {
            const img = document.createElement('img');
            img.src = src;
            img.classList.add('slide');
            if (index === 0) img.classList.add('active');
            slider.appendChild(img);
        });
    } else {
        vacationImages.forEach((src, index) => {
            const img = document.createElement('img');
            img.src = src;
            img.classList.add('slide');
            if (index === 0) img.classList.add('active');
            slider.appendChild(img);
        });
    } 
}

function nextSlide() {
    const slides = document.querySelectorAll('.slide');
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

function load() {
    loadAbout();
    setInterval(nextSlide, 3000);
}

function createMap(lat, long) {
    const map = L.map('map').setView([lat, long], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
}

window.onload = load();
