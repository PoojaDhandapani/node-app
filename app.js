var express = require("express");

var app = express();

const axios = require("axios");

axios.post("http://localhost:9090/visualapi", {

  content_type : "application/json",

  method: "get",

  url: "https://trial.free.beeceptor.com/trial",

  headers: [

      {

          "key": "Accept",

          "value": "*/*",

          "description": "Accept"

      },

      {

          "key": "Accept-Encoding",

          "value": "gzip,deflate",

          "description": "Accept-Encoding"

      },

      {

          "key": "Connection",

          "value": "keep-alive",

          "description": "Connection"

      }

  ],

  data: {


  },

  params: [

  ],

  auth: {}

}).then((res)=>{

  console.log("Response:",res.data)

}).catch((err)=> {

  console.log(err)

})



app.listen("8080", () => console.log("Running at 5050"));