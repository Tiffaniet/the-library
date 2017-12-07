import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import Task from '../../components/task/Task.js';
import { withTracker } from 'meteor/react-meteor-data';
import { Books } from '/imports/api/books/books';

// App component - represents the whole app
class App extends Component {
  getTasks() {
    return [
      { _id: 1, text: 'This is task 1' },
      { _id: 2, text: 'This is task 2' },
      { _id: 3, text: 'This is task 3' },
    ];
  }
 
  renderTasks() {
    console.log(this.props.books)
    return this.props.books.map((book) => (
      <Task key={book._id} book={book} />
    ));
  }
 
  render() {
    return (
      <div className="container">
        <header>
          <h1>Todo List</h1>
        </header>
 
        <ul>
          {this.renderTasks()}
        </ul>
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