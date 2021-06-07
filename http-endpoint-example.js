const express = require('express');

const util = require('util');

const app = express();

app.use(express.text());

const port = 3000;

app.post('/', (req, res) => {
  console.log(util.inspect(req.method, false, null, true));
  console.log(util.inspect(req.headers, false, null, true));
  console.log(util.inspect(req.body, false, null, true));

  res.send('Hello World!');
})

app.listen(port, () => {
  console.log(`Example app listening at port ${port}`)
})