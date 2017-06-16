import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import {Tweets} from './../imports/api/Tweets';

import App from './../imports/ui/App';


Meteor.startup(() => {
	Tracker.autorun(() => {
		let tweetlist = Tweets.find({}, {sort: {created_at: -1}, limit:10}).fetch();
		let title = 'Twit Stream'
		ReactDOM.render(<App title={title} tweets={tweetlist}/>, document.getElementById('app'));
	});
});
