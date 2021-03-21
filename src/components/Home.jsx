import React from "react";
import WeatherCard from "./WetherCard";
import {Box} from "@material-ui/core";
function Home() {


    return (
      <Box>
          <div className='container justify-content-center d-md-flex' >
              <WeatherCard/>
          </div>

      </Box>
    )

}
export default Home
