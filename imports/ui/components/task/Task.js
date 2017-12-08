import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 
// Task component - represents a single todo item
export default class Task extends Component {
  render() {
    return (
      <li className="entry__link">
        <Link to={`/${this.props.book._id}`}>
          <img src={this.props.book.image}/>
          <div className="entry__desc">
            <p className="entry__name">{this.props.book.bookname}</p>
            <p className="entry__author">{this.props.book.author}</p>
            <p className="entry__cat">{this.props.book.category}</p>
          </div>  
        </Link>
      </li>
    );
  }
}