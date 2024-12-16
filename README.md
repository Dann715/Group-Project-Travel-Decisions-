# Explore-More

## **Project Description**

**Explore More** is a travel recommendation system designed to help users make smart travel decisions. The app provides:

- **Destination Suggestions** based on user preferences.
- **Current and Future Weather Data** for selected cities.
- **Interactive Maps** to visualize locations.

Explore More uses APIs like **Supabase**, **WeatherStack**, **Nominatim**, and **Open-Meteo** to deliver personalized and dynamic travel information.

---

## **Target Browsers**

The application is optimized for:

- **iOS** (Safari, Chrome)
- **Android** (Chrome, Firefox)
- **Desktop** (Chrome, Firefox, Safari, Edge)

---


# Developer Manual

## **Installation Instructions**

### **Prerequisites**

Ensure you have the following installed:

- **Node.js** (v14 or higher) - [Download Node.js](https://nodejs.org/)
- **npm** (Node Package Manager) - comes with Node.js
- **Git** - [Download Git](https://git-scm.com/)

### **Clone the Repository**

```bash
git clone https://github.com/your-username/Explore-More.git
cd Explore-More
```

### **Install Dependencies**

```bash
npm install
```

This will install any required dependencies, including:

- **Supabase Client** for database access.
- **Leaflet** for interactive maps.

---

## **Running the Application**

### **Serve the Application**

Use a static file server to serve the HTML files locally. For example, using **VSCode's Live Server** extension or the `serve` package:

```bash
npx serve .
```

### **Access the App**

Navigate to:

```
http://localhost:3000
```

---

## **Project Structure**

```
Explore-More/
├── index.html            # Main landing page
├── about.html            # Page with description about the website
├── where-to.html         # 'Where To' page with search functionality
├── video.js              # JavaScript file for weather and map interactions
├── styles.css            # CSS file for styling
└── README.md             # Project documentation
```

---

## **API Integrations**

### **1. Supabase API**

- **Purpose**: Fetches random city data from the Supabase database.
- **File**: `index.html`

```javascript
const supabaseClient = supabase.createClient(
    'https://bewdxiinjigtfoyauefl.supabase.co',
    'SUPABASE_API_KEY'
);

async function fetchRandomCity() {
    const { data, error } = await supabaseClient
        .from('Cities')
        .select('*');
}
```

---

### **2. Weather and Geolocation APIs**

- **WeatherStack API**: Fetches current weather data.
- **Nominatim API**: Retrieves coordinates for location input.
- **Open-Meteo API**: Provides future weather forecasts.

- **File**: `video.js`

```javascript
fetch(`http://api.weatherstack.com/current?access_key=YOUR_ACCESS_KEY&query=${locationInput}`)
```

Replace `YOUR_ACCESS_KEY` with a valid WeatherStack API key.

---

## **How to Use the Application**

### **1. Landing Page (`index.html`)**

- Displays a random city with population data from Supabase.
- Navigation buttons:
  - **"Where to?"**: Redirects to the search page.
  - **"About"**: Provides information about the project.

### **2. "Where To?" Page (`where-to.html`)**

- **Input a City Name** to get:
  - **Current Weather**
  - **Tomorrow’s Forecast**
  - **Interactive Map**

---

## **Known Bugs**

1. **Weather API Rate Limits**: Exceeding the rate limit may cause errors.
2. **Map Load Issues**: Occasionally, the map fails to load due to network delays.

---

## **Future Development Roadmap**

1. **Enhanced Filters**: Add filters for budget, climate, and activities.
2. **User Authentication**: Save preferences and travel history using Supabase Auth.
3. **Mobile Optimization**: Improve the user experience on mobile devices.
4. **Offline Support**: Limited functionality when offline.

---




