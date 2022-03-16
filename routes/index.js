const express = require('express');
const router = express.Router();
const uuid = require('uuid');
const messages = require('../Messages');

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Message Board App', messages });
});

router.post('/new', (req, res) => {
  const newMessage = {
    id: uuid.v4(),
    text: req.body.text,
    user: req.body.user,
    added: new Date(),
  };
  messages.push(newMessage);
  res.redirect('/');
});

router.get('/new', function (req, res, next) {
  res.render('form');
});

router.put('/:id', (req, res) => {
  const found = message.some(
    (message) => message.id === parseInt(req.params.id)
  );

  if (found) {
    const updateMessage = req.body;
    messages.forEach((message) => {
      if (message.id === parseInt(req.params.id)) {
        message.text = updateMessage.text ? updateMessage.text : message.text;
        message.user = updateMessage.user ? updateMessage.user : message.user;

        // Need to send back response
        res.json({ msg: 'Message has been updated', message });
      }
    });
  } else {
    res
      .status(400)
      .json({ msg: `There is no message with id of ${req.params.id}` });
  }
});

module.exports = router;
