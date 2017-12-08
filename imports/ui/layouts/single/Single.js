import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Books } from '/imports/api/books/books';

class Single extends Component {

  render() {
  	console.log(this.props)
  	return (
	    <div>
        <p>{this.props.livre.bookname}</p>
        <h1>Single page</h1>
	    </div>
	);
  }
}

export default SingleContainer = withTracker((props) => {
  // Meteor.subscribe('singlebook');
  Meteor.subscribe('AllBooks');
  return{
    livre: Books.findOne({ _id: props.match.params.id })
  }
})(Single)