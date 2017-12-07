import React, { Component } from 'react';
 
// Task component - represents a single todo item
export default class Task extends Component {
  render() {
    return (
       <li><img src={this.props.book.image}/> {this.props.book.bookname}</li>
    );
  }
}