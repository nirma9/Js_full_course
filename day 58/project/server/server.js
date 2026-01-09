require("dotenv").config();
const express = require("express");

const app = express();

app.get("/secure-data",(req,res) => {
               const apikey = Process.env.API_KEY;

               res.json({
                              status : "success",
                              message : "API key successfully accessed from environment variale",
                              apikeyused:apikey
               });
});

app.listen(3000, () => {
               console.log("SErver running at http://localhost:3000");
});