function cityWeather() {
    const locationInput = document.getElementById('cityInput').value;
    console.log(locationInput);
    fetch(`http://api.weatherstack.com/current?access_key=23f8f4774a653bfdb515c61d101f5805&query=${locationInput}`)
        .then((res) => res.json())
        .then((resJson) => {
                console.log(resJson.current);
                document.getElementById('weather_content').style.display = 'block';
                document.getElementById('weather_content').innerHTML = "<h2>Current weather in " + resJson.location.name + ", " +  resJson.location.region + ", " + resJson.location.country + ":</h2><br>";
                document.getElementById('weather_content').innerHTML += "Temperature: " + resJson.current.temperature + "<br>";
                document.getElementById('weather_content').innerHTML += "Rain: " + resJson.current.precip + "<br>";
                document.getElementById('weather_content').innerHTML += "Wind Speed: " + resJson.current.wind_speed + "<br>";
                document.getElementById('weather_content').innerHTML += "Humidity: " + resJson.current.humidity;
        })
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

window.onload = load();
