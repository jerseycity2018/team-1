const express = require('express');
const models = require('../models');
const router = express.Router();

const ig = require('instagram-node').instagram();
const igAccess = require('./igAccess');
ig.use({ access_token: igAccess });

const Sentiment = require('sentiment');
var sentiment = new Sentiment();

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



module.exports = router;
