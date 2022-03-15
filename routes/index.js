var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "This just in, the FED has updated it's inflation forecast.",
    user: 'Financial Times',
    added: new Date(),
  },
  {
    text: "Breaking news, the International Monetary Fund has released it's Q3 forecast.",
    user: 'The IMF',
    added: new Date(),
  },
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Message Board App', messages: messages });
});

module.exports = router;
