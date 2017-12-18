import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Books } from '/imports/api/books/books';

class Single extends Component {
	constructor() {
		super();
	}

  componentDidMount () {
    // Detects clicks everywhere on the screen
    document.addEventListener('dblclick', this.handleClick)
  }

  componentWillUnmount () {
    document.removeEventListener('dblclick', this.handleClick)
  }

	handleClick(e) {
		const value = e.target ;
		console.log(value)
		console.dir(value)
		// const el = ReactDOM.findDOMNode()
	}

  render() {
  	return (
	    <div className="single">
	    	<div className="imageContainer">
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
  Meteor.subscribe('theBook',props.match.params.id );
	const livre =  (Books.find(props.match.params.id).fetch())[0]

  return{
		livre
  }
})(Single)