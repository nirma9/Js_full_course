const express = require("express");
const cors = require("cors");
const app = express();

app.get("/data",(req,res)=> {
               res.json({message: "Hello from backend.."});
});

app.listen(5000,() => {
               console.log("server running at 5000");
});



app.use(cors({
               origin: "http://localhost:3000"
}));