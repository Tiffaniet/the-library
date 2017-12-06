import React, { Component } from 'react';
import { Books } from '/imports/api/books/books'; 
import Task from '../../components/task/Task.js';
import { withTracker } from 'meteor/react-meteor-data';
 
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
    console.log(this.props)
    return this.props.books.map((task) => (
      <Task key={task._id} task={task} />
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
  Meteor.subscribe('Books.all');
  return{
    books: Books.find()
  }
})(App)