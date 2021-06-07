const { sns } = require('./sns-client');

const util = require('util');

module.exports.Subscribe = async function (endpoint) {
  try {
    return await sns.subscribe({
      TopicArn: 'arn:aws:sns:us-east-1:864613434505:awsd-officialcourse-demo-amazon-sns',
      Protocol: 'http',
      Endpoint: endpoint,
      Attributes: {
        FilterPolicy: JSON.stringify({
          'http_endpoint': {
            DataType: 'String',
            StringValue: 'yes'
          }
        })
      }
    }); 
  } catch (err) {
    console.log(util.inspect(err, false, null, true));
  }
};