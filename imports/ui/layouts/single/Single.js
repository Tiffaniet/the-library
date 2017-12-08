import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Books } from '/imports/api/books/books';

export default class Single extends Component {
  render() {
    return (
      <div >
        <img src={this.props.singlebook.image}/>
        <p>this.props.singlebook.bookname</p>
      </div>
    );
  }
}

