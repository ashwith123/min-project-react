import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./infoBox.css";

export default function InfoBox({ info }) {
  const warm =
    "https://plus.unsplash.com/premium_photo-1661962428918-6a57ab674e23?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const cold =
    "https://images.unsplash.com/photo-1575695395866-88ef389a1332?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const rain =
    "https://images.unsplash.com/photo-1534088568595-a066f410bcda?q=80&w=1951&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={info.humidity > 80 ? rain : info.temp > 15 ? warm : cold}
            title="green iguana"
          />

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
            </Typography>

            <Typography variant="body2" color="text.secondary" component="div">
              Temperature = {info.temp}&deg;C <br />
              Humidity = {info.humidity}% <br />
              Min Temp = {info.tempMin}&deg;C <br />
              Max Temp = {info.tempMax}&deg;C <br />
              The weather can be described as <i>{info.weather}</i> and feels
              like {info.feelsLike}&deg;C
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
