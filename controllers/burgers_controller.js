var express = require("express");
var router = express.Router();

var burger = require("../models/burgers.js");
// get method for handlebaers
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hndbarsObj = {
            burgers: data
        };
        console.log(hndbarsObj);
        res.render("index", hndbarsObj);
    });

    // post method for handlebars
    router.post("/api/burgers", function (req, res) {
        burger.insertOne(
            ["burger_name", "devoured"],
            [req.body.burger_name, req.body.devoured],
            function (result) {
                res.json({ id: result.insertId });
            }
        );
    });
    router.put("/api/burgers/:id", function (req, res) {
        var condition = "id = " + req.params.id;

        console.log("condition:", condition);
        burger.updateOne({ devoured: req.body.devoured }, condition, function (result) {
            if (result.changedRows === 0) {
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        });
    });
    router.delete("/api/burgers/:id", function(req,res){
        var condition = "id = " + req.params.id;

        burger.deleteOne(condition, function(result){
            if (result, changedRows === 0) {
                return res.status(404).end();
            } else {
                res.status(200).end();
            } 
        });
    });
});
module.exports = router; 



