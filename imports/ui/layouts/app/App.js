import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import Book from '../../components/book/Book.js';
import { withTracker } from 'meteor/react-meteor-data';
import { Books } from '/imports/api/books/books';

import {TimelineMax} from "gsap";

var mainTl = new TimelineMax({ paused: true });

// App component - represents the whole app
class App extends Component {

  renderTasks() {
    return this.props.books.map((book) => (
      <Book key={book._id} book={book} />
    ));
  }
 
  render() {
    return (
      <div className="container" ref="container">
        <header className="header">
          <h3><small>Tous les livres</small></h3>
          <h2>Tous les livres parus</h2>
        </header>
        <section className="section__medium">
          <ul className="entry__list">
            {this.renderTasks()}
          </ul>
        </section>  
      </div>
    );
  }
}

export default AppContainer = withTracker(() => {
  Meteor.subscribe('AllBooks');
  return{
    books: Books.find().fetch(), 
  }
})(App)