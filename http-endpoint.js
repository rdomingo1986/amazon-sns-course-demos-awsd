const { Subscribe } = require('./modules/subscribe-module');
const { ConfirmSubscription } = require('./modules/confirm-subscription-module');

const express = require('express');

const util = require('util');

const app = express();

app.use(express.text());

const port = 3000;

app.get('/', (req, res) => {
  const endpoint = 'http://ec2-3-86-230-146.compute-1.amazonaws.com:3000';

  try {
    (async function () {
      res.send(await Subscribe(endpoint));
    })();
  } catch (err) {
    console.log(util.inspect(err, false, null, true));
  }
});

app.post('/', (req, res) => {
  var body = JSON.parse(req.body);

  if(body.Type == 'SubscriptionConfirmation') {
    try {
      (async function () {
        const response = await ConfirmSubscription(body.Token);
        res.send('Done!!!');
      })();
    } catch (err) {
      console.log(util.inspect(err, false, null, true));
    }
  } else {
    console.log(util.inspect(req.body, false, null, true));
    res.send('Done!!!');
  }
})

app.listen(port, () => {
  console.log(`Example app listening at port ${port}`)
})