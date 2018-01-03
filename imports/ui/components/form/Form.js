import React, { Component } from 'react';
 
export default class Form extends Component {
  render() {
    console.log(this.props)
    return (
			<form onSubmit={ this.props.submit }>
				<input type="text" name='bookName' value={ this.props.value.bookName} onChange={ this.props.change } />
					<select name='category' onChange={ this.props.change }>
						<option value="Science-Fiction">Science-Fiction</option>
						<option value="Drame">Drame</option>
						<option value="Mystè">Mystè</option>
						<option value="Dystopie">Dystopie</option>
					</select>
				<input type="text" name='author' value={ this.props.value.author} onChange={ this.props.change } />
				<textarea name='description' value={this.props.value.description} onChange={ this.props.change }  >
				</textarea>
				<div>
					<input type='submit' value='update'/> <button className='cancel' onClick={this.props.toggle }>cancel</button>
				</div>
			</form>
    );
  }
}