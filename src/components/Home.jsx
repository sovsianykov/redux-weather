import React from "react";
import WeatherCard from "./WetherCard";
import {Box, Grid,Paper} from "@material-ui/core";
function Home() {


    return (
      <Box>
          <Grid container justify='center'>
              <Grid item xs={12} sm={3}>
                  <Paper>
              <WeatherCard/>
                  </Paper>
          </Grid>
          </Grid>

      </Box>
    )

}
export default Home
