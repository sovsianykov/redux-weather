import {GET_HOME_WEATHER,GET_TOMORROW_WEATHER} from "./types";



export function fetchWeather( ) {
    return  async dispatch =>
    {

        const response = await fetch('api.openweathermap.org/data/2.5/weather?lat=50.37961&lon=30.36742&appid=d409c3b0705292f3d52ab9675afd8d8e&units=metric')
            .then(response => response.json())
        dispatch({type: GET_HOME_WEATHER, payload : response})
        console.log(response)



    }
}
