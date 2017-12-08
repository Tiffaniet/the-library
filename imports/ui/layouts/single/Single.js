import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Books } from '/imports/api/books/books';

class Single extends Component {

  render() {
  	console.log(this.props)
  	return (
	    <div className="single">
	    	<div>
	    		<img src={this.props.livre.image}/>
	    	</div>
	        <div className="single__desc">
	        	<div>
		        	<span className="entry__cat">{this.props.livre.category}</span>
		        	<span>{this.props.livre.date}</span>
	        	</div>
	        	<p>{this.props.livre.bookname}</p>
	        	<p>{this.props.livre.author}</p>
	        	<p>{this.props.livre.description}</p>
	        </div>
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