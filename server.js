//dependencies
var express = require("express");
var path = require("path");

//setting up express app
var app = express();
var PORT = process.env.PORT || 3000;

//parsing data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//array holding table data
var tables = [
    {
        name: "Bob",
        phonenumber: "801-555-5555",
        email: "bob@bobmail.com",
        uniqueid: "Bob01"
    },
    {
        name: "Sally",
        phonenumber: "801-555-5554",
        email: "sally@sallymail.com",
        uniqueid: "Sally02"
    },
    {
        name: "Bob",
        phonenumber: "801-555-5555",
        email: "bob@bobmail.com",
        uniqueid: "Bob01"
    },
    {
        name: "Bob",
        phonenumber: "801-555-5555",
        email: "bob@bobmail.com",
        uniqueid: "Bob01"
    },
    {
        name: "Bob",
        phonenumber: "801-555-5555",
        email: "bob@bobmail.com",
        uniqueid: "Bob01"
    }
]

//array holding waitlist data
var waitList = [
    {
        name: "Tom",
        phonenumber: "801-555-5556",
        email: "tom@tommail.com",
        uniqueid: "Tom03"
    }
]

if (tables.length === 5) {
    console.log(tables);
} else {
    console.log(waitList);
}

//displays the data in the tables array 
app.get("/api/tables", function (req, res) {
    return res.json(tables);
});

//displays the data in the waitlist array
app.get("/api/waitlist", function (req, res) {
    return res.json(waitList);
});

if (tables.length >= 5) {
    app.post("/api/waitlist", function (req, res) {
        var newTable = req.body;
        waitList.push(newTable);
        res.json(tables);
    });
} 

    app.post("/api/tables", function (req, res) {
        var newTable = req.body;
        tables.push(newTable);
        res.json(waitList);
    });



//opens the port
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
