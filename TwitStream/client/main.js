import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import {Players} from './../imports/api/players';

Meteor.startup(() => {
  Tracker.autorun(() => {
  let jsx = (
  <div>
    <h1>Home Depot Social Media Tracker</h1>
    <p>Hello {name}</p>
    <p>This is my second</p>
    {renderPlayers(players)}
    <form onSubmit={handleSubmit}>
      <input type="text" name="playerName" placeholder="Player name"/>
      <button>Add Player</button>
    </form>
  </div>
  );



  ReactDOM.render(jsx, document.getElementById('app'));
  });
});
