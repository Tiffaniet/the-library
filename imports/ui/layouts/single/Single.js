import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Books } from '/imports/api/books/books';

class Single extends Component {

  render() {
  	console.log(this.props.livre)
  	return (
	    <div>
	       <p>{this.props.livre.author}</p>
	    </div>
	);
  }
}

export default SingleContainer = withTracker((props) => {
  Meteor.subscribe('singlebook');
  return{
    livre: Books.findOne({ _id: props.match.params.id })
  }
})(Single)