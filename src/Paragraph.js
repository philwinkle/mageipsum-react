import React, { Component } from 'react';
import Sentence from './Sentence';

class Paragraph extends Component {

  render() {

    let numberSentences = this.props.getRandomNumber(2,5);
    let paragraph = [];

    for(let i=0;i<numberSentences;i++){
    	paragraph.push(<span><Sentence getRandomNumber={this.props.getRandomNumber}/></span>);
    }

    return (
      <p>{paragraph}</p>
    )
  }
}

export default Paragraph;
