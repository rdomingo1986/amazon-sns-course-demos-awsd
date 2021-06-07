const { sns } = require('./modules/sns-client');

const util = require('util');

const run = async function () {
  try {
    var response = await sns.subscribe({
      TopicArn: 'arn:aws:sns:us-east-1:864613434505:awsd-officialcourse-demo-amazon-sns',
      Protocol: 'email',
      Endpoint: 'domingo@allincloudservices.com',
      Attributes: {
        FilterPolicy: JSON.stringify({
          'http_endpoint': ['yes']
        })
      }
    });
    console.log(util.inspect(response, false, null, true));
  } catch (err) {
    console.log(util.inspect(err, false, null, true));
  }
};

run();