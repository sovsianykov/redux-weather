import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";

import InputStation from "./InputStation";

function WeatherCard() {
  const temperature = useSelector(
    (state) => state.homeWeatherReducer.currentHomeWeather.temp
  );
  const fills_like = useSelector(
    (state) => state.homeWeatherReducer.currentHomeWeather.feels_like
  );
  const precip = useSelector(
    (state) => state.homeWeatherReducer.currentHomePrecipitation.main
  );

  return (
    <>
      <Card className="weathercard"  >
        <Card.Body />
        <Card.Body>
          <h1>Kiev Metro WEATHER</h1>
          <Card.Text>Current air T</Card.Text>
          <h2>{temperature} </h2>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <Card.Text>FILLS LIKE</Card.Text>
          <h2>{fills_like} </h2>
          <h2>{precip}</h2>
        </ListGroup>
        <InputStation />
      </Card>
    </>
  );
}
export default WeatherCard;
