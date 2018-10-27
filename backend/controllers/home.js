const express = require('express');
const models = require('../models');
const Sequelize = require('sequelize');
const router = express.Router();

const ig = require('instagram-node').instagram();
const igAccess = require('./igAccess');
ig.use({ access_token: igAccess });

const Sentiment = require('sentiment');
var sentiment = new Sentiment();

var moment = require('moment');
moment().format();
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

router.get('/cpLocations/:id/photos', (req, res) => {
  let options = {};
  ig.location_media_recent(req.params.id, [options,],  function(err, result, remaining, limit) {
    let sentimentMap = result.map((post) => {
      if (post.images) {
        return post.images;
      }
      else return {};
    });
    res.json(sentimentMap);
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
  /*
  console.log(moment().hour());
  console.log(moment().hours());
  */
  models.Surveys.create(/*{
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
    activities: req.body.activities,
    hour:
  }*/
  {
    zipcode: "10010",
    city: "New York",
    state: "NY",
    country: "US",
    aloneOrGroup: "Alone",
    group: 1,
    places: ["Bethesda Fountain"],
    duration: "30 Minutes",
    transportation: "Walked",
    age: 21,
    ethnicity: "Asian",
    gender: "Male",
    activity: "Boating",
    weather: "Sunny",
    hour: 11
  })
  .then((data) => {
    res.json({
      msg: "Successfully Inserted Surveys"
    });
  });
});

router.delete('/survey', (req, res) => {
  models.Surveys.destroy({where: {}}).then(function () {
    models.Surveys.drop();
    res.json({
      msg: "Deleted All Surveys",
    });
  });
});
/*
Need Routes Each for:
- age
- gender
- ethnicity
- location
- activity
- time
- group
*/

router.get('/ages', (req, res) => {
  models.Surveys.findAll({
    group: ['age'],
    attributes: ['age',[Sequelize.fn('COUNT', Sequelize.col('age')), 'total']]
  }).then(data => {
    res.json({
      data: data
    });
  });
});

router.get('/gender', (req, res) => {
  models.Surveys.findAll({
    group: ['gender'],
    attributes: ['gender',[Sequelize.fn('COUNT', Sequelize.col('gender')), 'total']]
  }).then(data => {
    res.json({
      data: data
    });
  });
});

router.get('/ethnicity', (req, res) => {
  models.Surveys.findAll({
    group: ['ethnicity'],
    attributes: ['ethnicity',[Sequelize.fn('COUNT', Sequelize.col('ethnicity')), 'total']]
  }).then(data => {
    res.json({
      data: data
    });
  });
});

router.get('/places', (req, res) => {
  models.Surveys.findAll({
    group: ['places'],
    attributes: ['places',[Sequelize.fn('COUNT', Sequelize.col('places')), 'total']]
  }).then(data => {
    res.json({
      data: data
    });
  });
});

router.get('/activity', (req, res) => {
  models.Surveys.findAll({
    group: ['activity'],
    attributes: ['activity',[Sequelize.fn('COUNT', Sequelize.col('activity')), 'total']]
  }).then(data => {
    res.json({
      data: data
    });
  });
});

router.get('/group', (req, res) => {
  models.Surveys.findAll({
    group: ['group'],
    attributes: ['group',[Sequelize.fn('COUNT', Sequelize.col('group')), 'total']]
  }).then(data => {
    res.json({
      data: data
    });
  });
});

router.get('/time', (req, res) => {
  models.Surveys.findAll({
    group: ['hour'],
    attributes: ['hour',[Sequelize.fn('COUNT', Sequelize.col('hour')), 'total']]
  }).then(data => {
    res.json({
      data: data
    });
  });
});

router.get('/origin', (req, res) => {
  models.Surveys.findAll({
    group: ['country'],
    attributes: ['country',[Sequelize.fn('COUNT', Sequelize.col('country')), 'total']]
  }).then(data => {
    res.json({
      data: data
    });
  });
});

router.get('/origin', (req, res) => {
  models.Surveys.findAll({
    group: ['country'],
    attributes: ['country',[Sequelize.fn('COUNT', Sequelize.col('country')), 'total']]
  }).then(data => {
    res.json({
      data: data
    });
  });
});

router.get('/states', (req, res) => {
  models.Surveys.findAll({
    group: ['state'],
    attributes: ['state',[Sequelize.fn('COUNT', Sequelize.col('state')), 'total']]
  }).then(data => {
    res.json({
      data: data
    });
  });
});


module.exports = router;
