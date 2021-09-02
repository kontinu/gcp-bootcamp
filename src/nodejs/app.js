'use strict';

const express = require('express');
const request = require('request')
const fetch = require('node-fetch')
// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();



//? MID

var MSG=process.env.MSG || " 👋 Hello from NodeJS ";

const hostname=process.env.HOSTNAME || "";


app.get("/health",(req,res) => {
	console.log("/health");
	res.send("OK");
});

app.get('/',(req,res) => {
	console.log("/root")
  res.send(`<div style="text-align: center;"> <h1>${MSG}</h1><br> </div>`);
})



app.listen(PORT, HOST);
console.log(`Running NodeJS Server on http://${HOST}:${PORT}`);
