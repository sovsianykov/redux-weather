import React from "react";
import WeatherCard from "./WetherCard";
function Home() {


    return (
      <>
          <div className='container justify-content-center d-md-flex' >
              <WeatherCard/>
              <div><p>{Date()}</p></div>


          </div>

      </>
    )

}
export default Home
