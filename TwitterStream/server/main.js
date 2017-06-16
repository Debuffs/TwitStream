import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

var Twit = require('twit');

var T = new Twit({
  consumer_key:         'jeS9Vs0ES7p2XR4HBp6sx70CC',
  consumer_secret:      'M171lIjf4HtJ2IYigcljE53t1vcSFTUzClN9bt4hmee1H85pLC',
  access_token:         '868161804253495296-EMbfwyvLTYpfjBgyCw9URUd0SWlEPMk',
  access_token_secret:  '8D2KC24kRxqDqFVoIcJciYQzFXNyE7xUrJV22cE5uw4eo',
})

T.post('statuses/update', { status: 'hello world!' }, function(err, data, response) {
  console.log(data)
})
