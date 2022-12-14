const bodyParser = require("body-parser");
const { log } = require("console");

// Initialize server => npm init
((express, server, bodyParser, fs) => {
    server.use(bodyParser.urlencoded({extended : true}))

    server.get('/', (req,res) => {
        fs.readFile("./templates/home.html", "utf8", (err,result) => {
            res.send(result);
        })
    })
    server.listen(8000, (err)=> {
        console.log(err || "Server is on 8000...");
    })
})(
    require('express'),
    require('express')(),
    require('body-parser'),
    require('fs'),
)