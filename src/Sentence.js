import React, { Component } from 'react';
import dictionary from './dictionary';

class Sentence extends Component {

  getSentence() {
    let numberWords = this.props.getRandomNumber(10,16);

    //resort randomly and return first 
    dictionary.sort(() => {
      return 0.5 - Math.random()
    });

    let phrase = `${dictionary.slice(0,numberWords).join(' ')}. `;
    phrase = phrase.charAt(0).toUpperCase() + phrase.slice(1);

    return phrase;
  }

  render() {
    return (
      <span>{this.getSentence()}</span>
    )
  }
}

export default Sentence;
