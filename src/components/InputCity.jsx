import React from "react";
import {useState} from "react";
import {Modal, Button, Form} from 'react-bootstrap'



export default  function InputCity() {
    const [smShow, setSmShow] = useState(false);

    return (
        <>
            {/*<Button onClick={() => setSmShow(true)}>city</Button>{' '}*/}
            <Form>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>CITY</Form.Label>
                    <Form.Control as="select">
                        <option>Kiyv</option>
                        <option>Kharkiv</option>
                        <option>Odessa</option>
                        <option>Kherson</option>
                        <option>Lviv</option>
                    </Form.Control>
                </Form.Group>
                </Form>

        </>
    );
}


