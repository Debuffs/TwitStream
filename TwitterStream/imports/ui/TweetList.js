import React from 'react';
import Tweets from './Tweets';
import PropTypes from 'prop-types';
import FlipMove from 'react-flip-move';

export default class TweetList extends React.Component {
  renderPlayers() {
    if(this.props.tweets.length === 0) {
      return (
        <div className="item">
          <p className="item__message">There are currently no tweets</p>
        </div>
      );
    }
    else {
      return this.props.tweets.map((tweet) => {
    		return <Tweet key={tweet._id} tweet={tweet}/>;
    	});

    }


  }

  render() {
		return (
      <div>
        <FlipMove maintainContainerHeight={true}>
          {this.renderPlayers()}
        </FlipMove>
      </div>
    );

	}
}
