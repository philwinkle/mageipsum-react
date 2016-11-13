import React, { Component } from 'react';
import Paragraph from './Paragraph';
import './App.css';

class App extends Component {

  getRandomNumber(min, max) { 
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  render() {

  	let numberSentences = this.getRandomNumber(3,5);
  	let paragraphs = [];
  	for(let i=0;i<numberSentences;i++){
  		paragraphs.push(<Paragraph getRandomNumber={this.getRandomNumber} />);
  	}

    return (
      <div className="App">
        {paragraphs}
      </div>
    );
  }
}

export default App;
