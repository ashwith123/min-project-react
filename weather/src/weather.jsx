import SearchBox from "./searchbox";
import InfoBox from "./infoBox";
import { useState } from "react";

export default function Weather() {
  const [WeatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelsLike: 24.84,
    temp: 25.05,
    tempMin: 25.05,
    tempMax: 25.05,
    humidity: 47,
    weather: "haze",
  });

  const updatedInfo = (result) => {
    setWeatherInfo(result);
  };

  return (
    <div>
      <SearchBox updateInfo={updatedInfo} />
      <InfoBox info={WeatherInfo} />
    </div>
  );
}
