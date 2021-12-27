// 
var express = require("express");

var app = express();



const axios = require("axios");



axios.get("https://jsonplaceholder.typicode.com/posts", {

  params: 
    {"id": 100},
  headers:
    {
      'Authorization': 'Bearer ' + "qwerty123"
  },
  method: 'get',
  url: 'https://jsonplaceholder.typicode.com/posts',
  body:{'content-type': 'application/x-www-form-urlencoded'}

}).then((res)=>{

  console.log("Response:",res.data)

}).catch((err)=> {

  console.log(err)

})



app.listen("5050", () => console.log("Running at 5050"))