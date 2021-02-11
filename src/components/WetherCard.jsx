import React from "react";
import {ListGroupItem,Card ,ListGroup} from 'react-bootstrap'
import {useDispatch,useSelector} from "react-redux";
import snow from '../assets/img/snow.gif'
import {Button} from "react-bootstrap";
import {fetchWeather} from '../redux/action'



function WeatherCard() {
    const dispatch = useDispatch()
    const temperature = useSelector(state =>
        state.currentHomeWeather
    )
    // if (!posts.length) {
    //     return <button  onClick={() => dispatch(fetchPosts())} className='btn-success btn'>Download posts</button>
    // }
    // return posts.map(el =><Post post = {el} key = {el.id}/>)

    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={snow} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Cras justo odio</ListGroupItem>
                    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                    <ListGroupItem>Vestibulum at eros</ListGroupItem>
                </ListGroup>
                <Button onClick={()=> dispatch(fetchWeather())} >
                    get Weather
                </Button>
                <Card.Body>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>


        </>
    )

}
export default WeatherCard;
