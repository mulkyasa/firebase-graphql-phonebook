var express = require('express');
var router = express.Router();
const firebase = require("firebase");

/* GET home page. */
router.get('/', function(req, res) {
  const phonebookReference = firebase.database().ref("/Phonebook/");
  //Attach an asynchronous callback to read the data
  phonebookReference.on("value", function(snapshot) {
    console.log(snapshot.val());
    res.json(snapshot.val());
    phonebookReference.off("value");
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
    res.send("The read failed: " + errorObject.code);
  });
});

//Create new instance
router.post('/', function (req, res) {
  const userName = req.body.username;
  const name = req.body.name;
  const number = req.body.number;

  const referencePath = '/Phonebook/'+userName+'/';
  const phonebookReference = firebase.database().ref(referencePath);
  phonebookReference.set({Name: name, Number: number}, function(error) {
    if (error) {
      res.send("Data could not be saved." + error);
    } else {
      res.send("Data saved successfully.");
    }
  });
});

//Update existing instance
router.put('/:username', function (req, res) {
  const userName = req.params.username;
  const name = req.body.name;
  const number = req.body.number;

  const referencePath = '/Phonebook/'+userName+'/';
  const phonebookReference = firebase.database().ref(referencePath);
  phonebookReference.update({Name: name, Number: number}, function(error) {
    if (error) {
      res.send("Data could not be updated." + error);
    } else {
      res.send("Data updated successfully.");
    }
  });
});

//Delete an instance
router.delete('/:username', function (req, res) {
  var userName = req.params.username;
  var referencePath = '/Phonebook/'+userName+'/';
  var userReference = firebase.database().ref(referencePath);
  userReference.remove((error)=>{
    if (error) {
      res.send("Data could not be deleted." + error);
    } else {
      res.send("Data deleted successfully.");
    }
  })
});

module.exports = router;