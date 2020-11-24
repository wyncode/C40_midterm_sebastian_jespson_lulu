if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const path = require('path');
const app = express();
const axios = require('axios');
const { request } = require('http');
const { response } = require('express');

// JUST FOR DEMO PURPOSES, PUT YOUR ACTUAL API CODE HERE

///function to pass address to geolocation api
//const geoLocationApi = async (request, response) => {
//    return axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoiamVzcDk2IiwiYSI6ImNraHJ2b3R1NzA3MGkyd210NHQ0MTljaW0ifQ.qq4toWUDIFOZsw9xSf-6-g`)
//}

app.get('/charitysearch', async (request, response) => {
  try {
    const { state } = request.query;
    const { city } = request.query;
    const { zip } = request.query;
    const charityList = await axios.get(
      `https://api.data.charitynavigator.org/v2/Organizations?app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}&search=children&state=${state}&city=${city}&zip=${zip}`
    );
    //console.log(charityList.data);
    //response.send(charityList);
    response.json({ data: charityList.data });
  } catch (error) {
    console.log(error);
  }
});

//get charity address and pass through geolocation api
app.get('/mapboxapi', (req, res) => {
  axios.get();
});

// END DEMO

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`API listening on port ${port}...`);
});
