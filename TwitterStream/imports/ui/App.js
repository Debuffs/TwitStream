import React from 'react';
import TitleBar from './TitleBar';
import TweetList from './TweetList';
import Statistics from './Statistics';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <TitleBar title={this.props.title} subtitle="Created by Chris Iwasaki"/>
        <TweetList/>
        <Statistics/>
      </div>
    );
  }
};
