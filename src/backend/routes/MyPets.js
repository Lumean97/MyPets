const express = require('express');
const mongo = require('mongodb').MongoClient;
const router = express.Router();
const passport = require('passport');

router.get('/', function(req, res){
    res.redirect('/MyPets/api/login');
    res.send('<html><head></head><body><h1>Hello World!</h1></body></html>');
});

router.get('/animal/:name', function(req, res){
    let animalName = req.params.name;
    mongo.connect('mongodb://185.162.248.202:27017/pet-test', function(err, db){
        console.log(err);
        console.log(db);
        db.collection("pets").findOne({name:animalName}, function(err, sucs){
            res.send("<html><head></head><body><h1>Hallo, mein Name ist " + animalName + "!</h1><br><h2>Ich habe die tollsten Eltern der Welt, und freue mich jeeeden Tag sie zu sehen!!</h2><br><br><img src='" + sucs.base64 + "' alt='" + animalName + "s Bild'/></body></html>");
        });
    });
});

router.post('/login', function(req, res){
    
});

module.exports = router;