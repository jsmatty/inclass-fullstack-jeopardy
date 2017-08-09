const express = require("express");
const Game = require("../models/game");

const router = express.Router();
//GET route//will creeate at index level//
router.get("/", (req, res) => {
  Game.find().then((games) => {
    //instead of res.send, gives us object parsed out //
    res.json(games);
  });
});
//:wildcard param//

//SHOW one individual game//
router.get("/:id", (req,res) => {
  Game.findById(req.params.id).then((game) => {
    res.json(game);
  })
})






module.exports = router;

//res.json similar to res.send, going to send as a JSON doc instead of a view//