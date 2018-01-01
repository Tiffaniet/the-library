import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Books } from '/imports/api/books/books';

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
			img_src: livre.image,
			author: livre.author,
			bookName: livre.bookname,
			date : livre.date,
			category: livre.category,
			description: livre.description,
			updateClicked: false,
			oldState: livre,
		})
	}

	toggleForm(event) {
		event.preventDefault();
		if(event.target.getAttribute('class') == null) {
			let newState = this.state
	  	this.setState({
				oldState : {
					_id: newState._id,
					img_src: newState.image,
					author: newState.author,
					bookName: newState.bookname,
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
	    		<img src={this.state.oldState.img_src}/>
	    	</div>
	        <div className="single__desc">
	        	<div>
		        	<span className="entry__cat">{this.state.oldState.category}</span>
		        	<span>{this.state.oldState.date}</span>
	        	</div>
	        	<p>{this.state.oldState.bookName}</p>
	        	<p>{this.state.oldState.author}</p>
	        	<p>{this.state.oldState.description}</p>
						<button onClick={this.toggleForm.bind(this)} className='showForm'>update content</button>
	        </div>
					<div className="update">
					{ 
						this.state.updateClicked ?
						<form onSubmit={this.submit.bind(this)}>
							<input type="text" name='bookName' value={ this.state.bookName} onChange={ this.formChange.bind(this) } />
								<select name='category' onChange={ this.formChange.bind(this) }>
									<option value="Science-Fiction">Science-Fiction</option>
									<option value="Drame">Drame</option>
									<option value="Mystè">Mystè</option>
									<option value="Dystopie">Dystopie</option>
								</select>
							<input type="text" name='author' value={ this.state.author} onChange={ this.formChange.bind(this) } />
							<textarea name='description' value={this.state.description} onChange={ this.formChange.bind(this) }  >
							</textarea>
							<div>
								<input type='submit' value='update'/> <button className='cancel' onClick={this.toggleForm.bind(this)}>cancel</button>
							</div>
						</form> :
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