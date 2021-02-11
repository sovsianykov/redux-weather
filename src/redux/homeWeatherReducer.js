
import {GET_HOME_WEATHER,GET_TOMORROW_WEATHER} from "./types";

const initialState = {
    weather  : [],
    currentHomeWeather : []
}

export const homeWeatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_HOME_WEATHER : return { ...state, currentHomeWeather: action.payload}

        default :
            return state

    }
}
