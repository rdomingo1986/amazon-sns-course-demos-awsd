const { sns } = require('./sns-client');

const util = require('util');

module.exports.ConfirmSubscription = async function (token) {
  try {
    return await sns.confirmSubscription({
      TopicArn: 'arn:aws:sns:us-east-1:864613434505:awsd-officialcourse-demo-amazon-sns',
      Token: token
    });
  } catch (err) {
    console.log(util.inspect(err, false, null, true));
  }
};