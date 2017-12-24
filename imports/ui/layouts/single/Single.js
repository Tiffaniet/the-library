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
    document.querySelector('.uuu').addEventListener('click', (event) => {
			if (event.target.nodeName == 'BUTTON') {
				this.appendForm()
			}
		})
  }

  componentWillUnmount () {
    document.removeEventListener('dblclick', this.handleClick)
    // document.addEventListener('click', this.handleClick)
  }

	appendForm() {
    const form = document.createElement('FORM');
		const bookName = document.createElement("input")
		var author = document.createElement("INPUT");
		const description = document.createElement("TEXTAREA")
		var btnUpdate = document.createElement("BUTTON");    
		var btnCancel = document.createElement("BUTTON");    
		var tUpdate = document.createTextNode("update");
		var tCancel = document.createTextNode("cancel");

    var array = ["Science-Fiction", "Drame", "Mystè", "Dystopie"];

		bookName.setAttribute("type", "text");
		author.setAttribute("type", "text");

		bookName.value = this.props.livre.bookname
		author.value = this.props.livre.author
		description.value = this.props.livre.description

    var selectList = document.createElement("select");

		btnUpdate.appendChild(tUpdate);    
		btnCancel.appendChild(tCancel);    

    form.appendChild(bookName);
    form.appendChild(selectList);
    form.appendChild(author);
    form.appendChild(description);
    form.appendChild(btnUpdate);
    form.appendChild(btnCancel);

    //Create and append the options
    for (var i = 0; i < array.length; i++) {
      var option = document.createElement("option");
      option.value = array[i];
      option.text = array[i];
      selectList.appendChild(option);
    }
		document.querySelector('.single__desc').style.display = 'none';
		document.querySelector('.update').appendChild(form);
	}

	handleClick(e) {
		const target = e.target
		const input = document.createElement("TEXTAREA")
		const form = document.createElement('FORM');

		form.appendChild(input)
		const allowedType = ["P","SPAN"]
		allowedType.map((el) => {
			if(el == target.nodeName && !target.changed ) {
				target.changed = true;
				input.value = target.innerText

				target.innerText = " "
				// target.appendChild(input)
				target.parentNode.appendChild(form)
				// target.appendChild(form)
			}
		})
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
						<button className='uuu'>update cuntent</button>
	        </div>
					<div className="update"></div>
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