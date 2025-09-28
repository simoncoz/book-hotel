const fetch = require("node-fetch");

exports.handler = async (evt) => {
   try {
      // fetch the request
      let response = await fetch("https://5jahjrqkal.execute-api.ap-southeast-2.amazonaws.com/Prod/hotel", {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(evt)
      })
      
      // Check if the response is successful
      if (!response.ok) {
         throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      // get the JSON
      let json = await response.json()
      return json;
   } catch (error) {
      console.error('Error in hotel booking handler:', error);
      return {
         error: true,
         message: 'Failed to process hotel booking request',
         details: error.message
      };
   }
}