const fetch = require("node-fetch");

exports.handler = async (evt) => {
   // fetch the request
   let response = await fetch("https://5jahjrqkal.execute-api.ap-southeast-2.amazonaws.com/Prod/hotel", {
      method: 'POST',
      body: JSON.stringify(evt)
   })
   
   // get the JSON
   let json = await response.json()
   return json;
}