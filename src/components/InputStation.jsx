import React, {useEffect} from "react";
import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { MetroStations } from "./StationsList";
import { fetchWeather } from "../redux/action";

export default function InputStation() {
  const dispatch = useDispatch();
  const liststations = useSelector(
    (state) => state.homeWeatherReducer.metroStations
  );

  const onSelectHandler = () => {
    const option = document.querySelectorAll("option");
    option.forEach((option) => {
      if (option.selected) {
        console.log(option.innerText);

        let selectedStation = MetroStations.find(
          (obj) => obj.station === option.innerText
        );
        console.log(selectedStation);
        let selectedUrl =
          "https://api.openweathermap.org/data/2.5/weather?lat=" +
          selectedStation.lat +
          "&lon=" +
          selectedStation.lon +
          "&appid=d409c3b0705292f3d52ab9675afd8d8e&units=metric";
        console.log(selectedUrl);
        dispatch(fetchWeather(selectedUrl));
      }
    });
  };
    useEffect( ()=> dispatch(fetchWeather('https://api.openweathermap.org/data/2.5/weather?lat=50.37961&lon=30.36742&appid=d409c3b0705292f3d52ab9675afd8d8e&units=metric')),[])

  return (
    <>
      <Form>
        <Button onClick={onSelectHandler}></Button>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label></Form.Label>
          <Form.Control onChange={onSelectHandler} as="select">
            <option>select station</option>
            <option>{liststations[0].station}</option>
            <option>{liststations[1].station}</option>
            <option>{liststations[2].station}</option>
            <option>{liststations[3].station}</option>
            <option>{liststations[4].station}</option>
          </Form.Control>
        </Form.Group>
      </Form>
    </>
  );
}
