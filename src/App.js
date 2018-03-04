import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor() {
  	super();

  	this.state = { checked: 'img-0' };
  	this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
  	this.setState({
  		checked: 'img-1'
  	});
  	console.log('works');
  }


  render() {
    return (
      <div className={this.checked} onClick={this.handleClick}>
      </div>
    );
  }
}

export default App;
