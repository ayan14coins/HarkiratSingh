const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");  //body-parser not required ( MORDERN solution is using express.json(), express.text(), etc.)

app.use(express.json());
app.use(express.text());

app.get("/", function (req, res){
    res.send("Hello World");
})

app.get("/about", function (req, res){
    res.send("This is the about page");
})

app.post("/data", function (req, res){
    console.log(req.body);
    res.send("Data received");
})

app.post("/BodyQuery", (req,res) => {
    console.log("My Name is : " + req.body.Name);
    // console.log(req.body.Name);

    console.log("Roll No. : " + req.query.rollnumber);
    // console.log(req.query.rollnumber);

    console.log("Roll No. : " + req.body.Roll);

    console.log(req.body);

    res.send("Data received");
})

app.listen(port, function(){
    console.log("Server is running on port " + port);
});
