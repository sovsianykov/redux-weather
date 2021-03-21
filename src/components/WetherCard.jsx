import React from "react";
// import { Card, ListGroup } from "react-bootstrap";
import { useSelector} from "react-redux";
import InputStation from "./InputStation";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginTop :'40px',
    fontSize: 23,
    fontWeight: 500,
    color: "darkred"
  },
  pos: {
    marginBottom: 18,
    color: 'black'

  },
});


function WeatherCard() {
  const classes = useStyles();


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
    < main >
      {/*<Card className="weathercard"  >*/}
      {/*  <Card.Body />*/}
      {/*  <Card.Body>*/}
      {/*    <h1>Kiev Metro WEATHER</h1>*/}
      {/*    <Card.Text>Current air T</Card.Text>*/}
      {/*    <h2>{temperature} </h2>*/}
      {/*  </Card.Body>*/}
      {/*  <ListGroup className="list-group-flush">*/}
      {/*    <Card.Text>FILLS LIKE</Card.Text>*/}
      {/*    <h2>{fills_like} </h2>*/}
      {/*    <h2>{precip}</h2>*/}
      {/*  </ListGroup>*/}
      {/*  <InputStation />*/}
      {/*</Card>*/}
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography  variant='h1'   className={classes.title}  gutterBottom>
            Kiev Metro WEATHER
          </Typography>
          <Typography variant="h5" className={classes.pos} component="h2">
            {temperature}
          </Typography>
          <Typography className={classes.pos} >
            FILLS LIKE
          </Typography>
          <Typography  className={classes.pos} variant="body2" component="p">
            {fills_like}
            <br/>
            {precip}
          </Typography>
          <InputStation />
        </CardContent>
      </Card>
    </main>
  );
}
export default WeatherCard;
