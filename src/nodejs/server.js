'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

var MSG=process.env.MSG || " 👋 Hello from NodeJS ";

var FOO=process.env.FOO || "bar";

const hostname=process.env.HOSTNAME || "";
const version=process.env.APP_VERSION || "0.0";
const color=process.env.COLOR || "green";


app.get("/health",(req,res) => {
	console.log("/health");
	res.send("OK");
});

app.get('/',(req,res) => {
	console.log("/root")
  res.send(`<div style="text-align: center;"> <h1>${MSG}</h1><br> <h2> Hostname: ${hostname} <br> FOO: ${FOO} </h2> <h3 style="color:${color};">version: ${version} </h3> </div>`);
})

app.listen(PORT, () => {
  console.log(`helloworld: listening on port ${PORT}`);
});
