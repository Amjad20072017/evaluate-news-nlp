var path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const AYLIENTextAPI = require('aylien_textapi');
const dotenv = require('dotenv');

dotenv.config();

const textapi = new AYLIENTextAPI({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY
}); 

const app = express()
app.use(cors())
// to use json
app.use(bodyParser.json())
// to use url encoded values
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(express.static('dist'))

app.get('/', function (req, res) {
     res.sendFile('dist/index.html')   
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
    console.log(`Your API key is ${process.env.API_KEY}`);
})

app.post('/addData', (req, res) => {
  console.log(req.body.formText);
  textapi.sentiment({
    'url': req.body.formText
  }, function(error, response) {
    if (error === null) {
      console.log(response);
      res.json(response); 
    }
  });
});



  


  
