const express = require("express");
const Category = require("../models/category");
const Question = require("../models/question");

const router = express.Router();

router.get("/", (req, res) => {
  Category.find().then((categories) => {
    res.json(categories);
  });
});

router.post("/", (req, res) => {
  const newCategory = new Category();
  //bringing in something large from FORM//
  newCategory.name = req.body.category.name;
  //array of questions//
   const newQuestions = req.body.category.questions.map((question) => {
     //passing question in as the argument. creating new schema iteam taking in question is an object
    return new Question(question);
   });

   newCategory.questions = newQuestions;
   // method we use to save..
   newCategory.save().then((category) => {
     res.json(category);
     //get back json document.
   //handle errors in json
   }).catch(err => console.log(err));
    res.send("Hello World");
  })



module.exports = router;