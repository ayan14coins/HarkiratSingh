const express = require("express");
const app = express();
const port = 3000;

function continueSum(n) {
    let sum = 0;
    for(let i=1; i<=n; i++){
        sum += i;
    }
    return sum;
}

app.get("/", function (req, res){
    let n = req.query.n;
    res.send(continueSum(n).toString());
})
app.listen(port);