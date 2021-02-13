import React, {useEffect} from "react";
import {ListGroupItem,Card ,ListGroup} from 'react-bootstrap'
import {useDispatch,useSelector} from "react-redux";
import snow from '../assets/img/snow.gif'
import {Button} from "react-bootstrap";
import InputCity from "./InputCity";


import {fetchWeather} from '../redux/action'
// import {fetchWeather2} from '../redux/action'
import store from  '../App'



function WeatherCard() {
    const picture = document.querySelector('.pic')
    const dispatch = useDispatch()
    const temperature = useSelector(state =>
        state.homeWeatherReducer.currentHomeWeather.temp)
    const fills_like = useSelector(state =>
        state.homeWeatherReducer.currentHomeWeather.feels_like)
    const precip = useSelector(state =>
        state.homeWeatherReducer.currentHomePrecipitation.main)
    useEffect( ()=> dispatch(fetchWeather()),[])

    return (
        <>
            <Card style={{ maxWidthidth: '20rem' }}>
                <Card.Body className='pic'  />
                <Card.Header>
                    <InputCity/>

                </Card.Header>
                <Card.Body>

                    <Card.Title>Vishneve</Card.Title>
                    <Card.Text>
                        Current air T
                    </Card.Text>
                    <h2>{temperature}</h2>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>FILLS LIKE </ListGroupItem>
                    <h2>{fills_like}</h2>
                    <h2>{precip}</h2>
                </ListGroup>
            </Card>


        </>
    )

}
export default WeatherCard;
