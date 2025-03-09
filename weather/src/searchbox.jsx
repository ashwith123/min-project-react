import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./searchbox.css";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  const API_URL = "https://api.openweathermap.org/data/2.5/weather?";
  const API_KEY = "93797cffdf3fbfacfb5b9073da4b03ad";

  let [city, setCity] = useState("");

  let getInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonResponse = await response.json();
      console.log(jsonResponse);
      let result = {
        city: jsonResponse.name,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };
      return result;
    } catch {
      alert("City not found! Please enter a valid city.");
      return null;
    }
  };

  let handleChange = (e) => {
    setCity(e.target.value);
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    console.log(city);
    let info = await getInfo();
    if (info) {
      updateInfo(info);
    }
  };

  return (
    <>
      <div className="search-box">
        <h1>weather app</h1>
        <form action="">
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            value={city}
            onChange={handleChange}
          />
          <br></br>
          <br />
          <Button variant="contained" type="submit" onClick={handleSubmit}>
            submit
          </Button>
        </form>
      </div>
    </>
  );
}
