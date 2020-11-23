if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const path = require('path');
const app = express();
const axios = require('axios');

// JUST FOR DEMO PURPOSES, PUT YOUR ACTUAL API CODE HERE
app.get('/charitysearch', async (req, res) => {
  try {
    let response = await axios.get(
      `https://api.data.charitynavigator.org/v2/Organizations?app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}&search=children&state=FL&city=North%20Miami`
    );
    res.json(response.data);
  } catch (error) {
    console.log(error);
  }
});

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
