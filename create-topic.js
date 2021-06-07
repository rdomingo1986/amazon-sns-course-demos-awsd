const { sns } = require('./modules/sns-client');

const util = require('util');

const run = async function () {
  try {
    var response = await sns.createTopic({
      Name: 'awsd-officialcourse-demo-amazon-sns'
    });
    console.log(util.inspect(response, false, null, true));
  } catch (err) {
    console.log(util.inspect(err, false, null, true));
  }
};

run();