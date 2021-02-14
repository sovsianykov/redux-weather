import React from "react";
import {useState} from "react";
import {Modal, Button, Form} from 'react-bootstrap'
import {useDispatch,useSelector} from "react-redux";




export default  function InputCity() {
const liststations = useSelector(state =>
    state.homeWeatherReducer.metroStations)
    const [smShow, setSmShow] = useState(false);

    return (
        <>
            {/*<Button onClick={() => setSmShow(true)}>city</Button>{' '}*/}
            <Form>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label></Form.Label>
                    <Form.Control as="select">
                        <option>select station</option>
                        <option>{liststations[0].station}</option>
                        <option>Odessa</option>
                        <option>Kherson</option>
                        <option>Lviv</option>
                    </Form.Control>
                </Form.Group>
                </Form>

        </>
    );
}


