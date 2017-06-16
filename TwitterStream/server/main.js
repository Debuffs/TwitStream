import { Meteor } from 'meteor/meteor';
import {Tweets} from './../imports/api/Tweets';

Meteor.startup(() => {
  let Twit = require('twit');

  let T = new Twit({
    consumer_key:         'jeS9Vs0ES7p2XR4HBp6sx70CC',
    consumer_secret:      'M171lIjf4HtJ2IYigcljE53t1vcSFTUzClN9bt4hmee1H85pLC',
    access_token:         '868161804253495296-EMbfwyvLTYpfjBgyCw9URUd0SWlEPMk',
    access_token_secret:  '8D2KC24kRxqDqFVoIcJciYQzFXNyE7xUrJV22cE5uw4eo',
  })

  /*
  T.post('statuses/update', { status: 'hello world2!' }, function(err, data, response) {
    console.log(data)
    console.log(data.text)
  })
  */

  let stream = T.stream('statuses/filter', { track: 'Home Depot' })

  var wrappedInsert = Meteor.bindEnvironment(function(tweet) {
    Tweets.insert(tweet);
  }, "Failed");

  stream.on('tweet', function (tweet) {
    let r1 = sentiment(tweet.text);

    console.log('TWITTER TWEET:' + tweet.text)
    console.log('SCREEN NAME:' + tweet.user.screen_name)
    console.log('SENTIMENT SCORE:' + r1.score)

    wrappedInsert(tweet);
  })

  // code to run on server at startup
});




/*
var r1 = sentiment('Cats are stupid.');
console.dir(r1);        // Score: -2, Comparative: -0.666

var r2 = sentiment('Cats are totally amazing!');
console.dir(r2);        // Score: 4, Comparative: 1
*/
