const { sns } = require('./modules/sns-client');

const util = require('util');

const run = async function () {
  try {
    var response = await sns.confirmSubscription({
      TopicArn: 'arn:aws:sns:us-east-1:864613434505:awsd-officialcourse-demo-amazon-sns',
      Token: '2336412f37fb687f5d51e6e2425e90ccf7a37d4744c0c7679b6ba69ee3d79f07928dc623a9fc67f0d21995f3722e1a454de444c899376aed6c6738df165038c4e765243cf2538159a6ec3552b08577cba9a99d77d3bf2686b6a6e5d394c0f1254a385a543e6dfd28d77d7cd4823c63e2cf800ede0926ede980aa4afd0dcf8cfca3542a54d6cfa07ae35facdafefdae69'
    });
    console.log(util.inspect(response, false, null, true));
  } catch (err) {
    console.log(util.inspect(err, false, null, true));
  }
};

run();