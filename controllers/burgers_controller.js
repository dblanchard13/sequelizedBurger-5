var db = require("../models");



module.exports = function(app){

// Create all our routes and set up logic within those routes where required.
app.get("/", function(req, res) {
	db.Burger.findAll({}).then(function(results){
		    var hbsObject = {
      burger: results
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
	})

});

app.post("/", function(req, res) {
	db.Burger.create({
		burger_name:req.body.name,
		devoured: req.body.devoured
	}).then(function(results){
		res.redirect("/");
	})

});

app.put("/:id", function(req, res) {
	db.Burger.update({
      devoured: true
    }, {
      where: {
        id: req.params.id
      }
    })
    .then(function(results) {
      res.redirect("/");
    });
});

};
