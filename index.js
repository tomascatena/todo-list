const express = require("express"),
	app = express(),
	port = process.env.PORT || 2311;

const bodyParser = require("body-parser");
const todoRoutes = require("./routes/todos");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/views"));
app.use(express.static(__dirname + "/public"));

app.use("/api/todos", todoRoutes);

app.get("/", function (req, res) {
	res.sendFile("index.html");
});

app.listen(port, function () {
	console.log("App is running in port " + port);
});
