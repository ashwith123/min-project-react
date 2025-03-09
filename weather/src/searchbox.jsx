import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./searchbox.css";
import { useState } from "react";

export default function SearchBox() {
  const API_URL = "http://api.openweathermap.org/geo/1.0/direct?";
  const API_KEY = "93797cffdf3fbfacfb5b9073da4b03ad";

  let [city, setCity] = useState("");

  let handelChange = (e) => {
    setCity(e.target.value);
  };

  let handelSubmit = (e) => {
    e.preventDefault();
    console.log(city);
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
            onChange={handelChange}
          />
          <br></br>
          <br />
          <Button variant="contained" type="submit" onClick={handelSubmit}>
            submit
          </Button>
        </form>
      </div>
    </>
  );
}
