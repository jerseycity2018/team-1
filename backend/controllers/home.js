const express = require('express');
const models = require('../models');
const router = express.Router();

const ig = require('instagram-node').instagram();
const igAccess = require('./igAccess');
ig.use({ access_token: igAccess });

const Sentiment = require('sentiment');
var sentiment = new Sentiment();

/*
INSTAGRAM-RELATED ROUTES
*/

router.get('/cpLocations', (req, res) => {
  let options = {};
  ig.location_search({ lat: 40.785091, lng: -73.968285 }, [options,],  function(err, result, remaining, limit) {
    console.log(result);
    res.json(result);
  });
});

router.get('/cpLocations/:id', (req, res) => {
  let options = {};
  ig.location_media_recent(req.params.id, [options,],  function(err, result, remaining, limit) {
    console.log(result.length);
    res.json(result);
  });
});

router.get('/cpLocations/:id/sentiment', (req, res) => {
  let options = {};
  ig.location_media_recent(req.params.id, [options,],  function(err, result, remaining, limit) {
    let sentimentMap = result.map((post) => {
      if (post.caption) {
        let caption = post.caption.text;
        return sentiment.analyze(caption);
      }
      else return {};
    });
    res.json(sentimentMap);
  });
});

/*
SURVEY-RELATED ROUTES
*/
router.get('/survey', (req, res) => {
  models.Surveys.findAll().then(surveys => {
    res.json({
      surveys: surveys
    });
  });
});

router.post('/survey', (req, res) => {
  models.Surveys.create({
    zipcode: req.body.zipcode,
    state: req.body.state,
    country: req.body.country,
    aloneOrGroup: req.body.aloneOrGroup,
    people: req.body.people,
    placeGone: req.body.placeGone,
    howLong: req.body.howLong,
    howArrived: req.body.howArrived,
    age: req.body.age,
    ethnicity: req.body.ethnicity,
    gender: req.body.gender,
    activities: req.body.activities
  }/*
  {
    zipcode: "10010",
    city: "New York",
    state: "NY",
    country: "US",
    aloneOrGroup: "Alone",
    people: "1",
    placeGone: "Bethesda Fountain",
    howLong: "30 Minutes",
    howArrived: "Walked",
    age: "20",
    ethnicity: "Asian",
    gender: "Male",
    activities: "Photography"
  }*/)
  .then((data) => {
    res.json({
      msg: "Successfully Inserted Surveys"
    });
  });
});

router.delete('/survey', (req, res) => {
  models.Surveys.destroy({where: {}}).then(function () {
    res.json({
      msg: "Deleted All Surveys",
    });
  });
});

module.exports = router;
