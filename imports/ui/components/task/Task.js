import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 
// Task component - represents a single todo item
export default class Task extends Component {
  render() {
    return (
      <li>
        <Link to={`/task/${this.props.book._id}`}>
        {/* <Link to={this.props.book._id}> */}
          <img src={this.props.book.image}/> {this.props.book.bookname}
        </Link>
      </li>
    );
  }
}