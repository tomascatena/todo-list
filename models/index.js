var mongoose = require("mongoose");
mongoose.set("debug", true);

mongoose.set("useFindAndModify", false);

mongoose.Promise = global.Promise;

mongoose
	.connect("mongodb://localhost:27017/todo-api", { useNewUrlParser: true })
	.then(() => {
		console.log(
			"Conection successfully stablished with the MongoDB"
		);
	})
	.catch((error) => {
		console.log(error);
	});

module.exports.Todo = require("./todo");
