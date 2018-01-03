import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Books } from '/imports/api/books/books';
import Form from '../../components/form/Form.js';

let data;

class Single extends Component {
	constructor() {
		super();
		this.state = {}
	}

	componentWillMount() {
		const livre = this.props.livre
	  this.setState({
			_id: livre._id,
			image : livre.image,
			author: livre.author,
			bookName: livre.bookname,
			date : livre.date,
			category: livre.category,
			description: livre.description,
			updateClicked: false,
			oldState: livre,
		})
	}

	componentDidMount() {
	}

	toggleForm(event) {
		event.preventDefault();
		if(event.target.getAttribute('class') == null) {
			let newState = this.state
	  	this.setState({
				oldState : {
					_id: newState._id,
					image: newState.image,
					author: newState.author,
					bookname: newState.bookName,
					date : newState.date,
					category: newState.category,
					description: newState.description,
				}
			})
		}
		var content = document.querySelector('.single__desc')
		var formContainer = document.querySelector('.update')
		formContainer.style.display = formContainer.style.display == 'flex' ? 
			'none' : 'flex'
		content.style.display = content.style.display == 'none' ? 
			'block' : 'none'
		if(formContainer.style.display == 'flex') {
			return this.setState({
				updateClicked : true,
				button : event.target.getAttribute('class')
   		})
		}
		this.setState({
			updateClicked : false,
			button : event.target.getAttribute('class')
  	})
	}

	submit(event) {
		event.preventDefault();
	  Meteor.subscribe('updateBook', this.state );
		this.toggleForm(event);
	}

	formChange(event) {
		const name = event.target.getAttribute('name')
		switch (name) {
			case 'bookName':
				this.setState({ bookName: event.target.value});
				break;
			case 'category':
				this.setState({ category: event.target.value});
				break;
			case 'author':
				this.setState({ author: event.target.value});
				break;
			case 'description':
				this.setState({ description: event.target.value});
				break;
	
			default:
				console.log('default')
				break;
		}
	}

  render() {
  	return (
	    <div className="single">
	    	<div className="imageContainer">
	    		<img src={this.state.oldState.image}/>
	    	</div>
	        <div className="single__desc">
	        	<div>
		        	<span className="entry__cat">{this.state.oldState.category}</span>
		        	<span>{this.state.oldState.date}</span>
	        	</div>
	        	<p>{this.state.oldState.bookname}</p>
	        	<p>{this.state.oldState.author}</p>
	        	<p>{this.state.oldState.description}</p>
						<button onClick={this.toggleForm.bind(this)} className='showForm'>update content</button>
	        </div>
					<div className="update">
					{ 
						this.state.updateClicked ?
      			<Form  value={this.state} toggle={this.toggleForm.bind(this)} change={this.formChange.bind(this)} submit={this.submit.bind(this)} />
						:
						" "
					}
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