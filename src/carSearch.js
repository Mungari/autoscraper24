// Import utils
var check = require('./utils.js');

const express = require("express"); // Import express package
const axios = require('axios');

const app = express() // Instance
const hostname = '127.0.0.1'; // Setup server
const port = 3000;

app.get('/searchCars', (req, res) =>{
  // Get req parameters
  let manufacturer = req.query.manufacturer;
  let model = req.query.model;
  let agefrom = req.query.agefrom;
  let ageto = req.query.ageto;
  let kmfrom = req.query.kmfrom;
  let kmto = req.query.kmto;
  let range = req.query.range;
  let cap = req.query.cap;
  let pricefrom = req.query.pricefrom;
  let priceto = req.query.priceto;
  let fuel = req.query.fuel;
  
  async function doGetRequest() {

  // Create json path to query
  let jsonPath = `/_next/data/as24-search-funnel_main-3062/lst${ check.isUndefinedOrNull(manufacturer) ? "/"+manufacturer : "" }${check.isUndefinedOrNull(model) ? "/"+model : ""}${ check.isUndefinedOrNull(cap) ? "/"+cap : "" }.json`;
  // Eval query params
  let queryParams = "?sort=standard&desc=0&cy=I&atype=C&ustate=N%2CU&powertype=kw&search_id=1hmexvriz5"+encodeURIComponent(`${ check.isUndefinedOrNull(agefrom) ? "&fregfrom="+agefrom : "" }${ check.isUndefinedOrNull(ageto) ? "&fregto="+ageto : "" }${ check.isUndefinedOrNull(kmfrom) ? "&kmfrom="+kmfrom : "" }${ check.isUndefinedOrNull(kmto) ? "&kmto="+kmto : "" }${ check.isUndefinedOrNull(range) ? "&zipr="+range : "" }${ check.isUndefinedOrNull(cap) ? "&zip="+cap : "" }${ check.isUndefinedOrNull(pricefrom) ? "&pricefrom="+pricefrom : "" }${ check.isUndefinedOrNull(priceto) ? "&priceto="+priceto : "" }${ check.isUndefinedOrNull(fuel) ? "&fuel="+fuel : "" }`);
    let response = await axios.get("https://www.autoscout24.it" + jsonPath + queryParams);
    res.json(response.data);
  }
  
  doGetRequest();

});


app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`); // Start server
});