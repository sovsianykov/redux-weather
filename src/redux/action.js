import {GET_HOME_WEATHER, GET_PRECIPITATION_WEATHER, GET_TOMORROW_WEATHER} from "./types";
import store from '../App'


export function fetchWeather( ) {
    return  async dispatch =>
    {
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=50.37961&lon=30.36742&appid=d409c3b0705292f3d52ab9675afd8d8e&units=metric')
            .then(response => response.json())
        dispatch({type: GET_HOME_WEATHER, payload : response.main})
        dispatch({type: GET_PRECIPITATION_WEATHER, payload : response.weather[0]})

    }
}
// export function fetchWeather2( ) {
//     return  async dispatch =>
//     {
//         const response2 = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=50.37961&lon=30.36742&appid=d409c3b0705292f3d52ab9675afd8d8e&units=metric')
//             .then(response2 => response2.json())
//          dispatch({type: GET_TOMORROW_WEATHER, payload : response2.weather[0]})
//
//     }
// }
