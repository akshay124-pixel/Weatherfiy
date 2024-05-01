import React, { useState, useEffect } from "react";

function Weather() {
  // State to hold the weather data
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    // Function to fetch weather data from the API
    const fetchWeatherData = async () => {
      try {
        // Replace 'YOUR_API_KEY' with your actual API key
        const response = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=03495e5a0a454a6e81073100241202&q=india`
        );
        if (response.ok) {
          const data = await response.json();
          setWeatherData(data);
        } else {
          throw new Error("Failed to fetch weather data");
        }
      } catch (error) {
        console.error(error);
      }
    };

    // Call the fetchWeatherData function when the component mounts
    fetchWeatherData();
  }, []); // Empty dependency array to ensure the effect runs only once

  // Function to map weather conditions to image URLs
  const getWeatherImage = (condition) => {
    // Add more conditions and corresponding image URLs as needed
    const conditionImages = {
      Sunny:
        "https://images.pexels.com/photos/1431822/pexels-photo-1431822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      Cloudy:
        "https://images.pexels.com/photos/1154510/pexels-photo-1154510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      // Add more conditions here...
    };

    // Return the corresponding image URL if available, otherwise return a default image URL
    return (
      conditionImages[condition] ||
      "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    );
  };

  return (
    <div>
      {weatherData && (
        <div
          className="card text-bg-dark"
          style={{
            height: "500px",
            marginTop: "140px",
            marginLeft: "320px",
            marginRight: "320px",
            boxShadow: "0px 0px 70px 10px rgba(0, 0, 0, 0.5)",
            textAlign: "center",
            position: "absolute",
          }}
        >
          <img
            src={getWeatherImage(weatherData.current.condition.text)}
            className="card-img"
            alt={weatherData.current.condition.text}
            style={{ height: "150%" }}
          />
          <div className="card-img-overlay">
            <h5 className="card-title">Weather: {weatherData.location.name}</h5>
            <p className="card-text">
              Temperature: {weatherData.current.temp_c}°C
            </p>
            <p className="card-text">
              Condition: {weatherData.current.condition.text}
            </p>
            <p className="card-text">
              <small>Last updated {weatherData.current.last_updated}</small>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Weather;
