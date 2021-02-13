
import {GET_HOME_WEATHER,GET_TOMORROW_WEATHER, GET_PRECIPITATION_WEATHER} from "./types";

const initialState = {
    weather  : [],
    currentHomeWeather : [],
    currentHomePrecipitation : []
}

export const homeWeatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_HOME_WEATHER : return { ...state, currentHomeWeather: action.payload}
        case GET_PRECIPITATION_WEATHER : return { ...state, currentHomePrecipitation: action.payload}
        default :
            return state

    }
}
