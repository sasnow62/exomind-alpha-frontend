import React from 'react';
import './mainframe.scss'

export default class Mainframe extends React.Component {

  render() {
    return (
      <div id="mainframe">
        <div id="header">
          <img id='logo' src={require("./rsalogo.svg")} alt='logo'></img>
          <h1>Experiment: Sentiment Analysis</h1>
        </div>
        <div id="description">
          <p>Created by Samuel Snow</p>
          <br></br>
          <p>A python script that retreives headlines from Reddit and parses them with sentiment analysis.</p>
          <br></br>
          <p><strong>Analysis Library: </strong>VADER</p>
          <div>
            <a href="http://comp.social.gatech.edu/papers/icwsm14.vader.hutto.pdf" target="_blank" rel="noopener noreferrer" >Academic Paper</a>
            <a href="https://github.com/cjhutto/vaderSentiment" target="_blank" rel="noopener noreferrer">Github Page</a>
          </div>
          <p>Additional processing with nltk, pandas, and matplotlib.</p>
          <br></br>
          <p><strong>Backend: </strong>Python + Bottle Framework</p>
          <p><strong>Frontend: </strong>React + Webpack</p>
          <br></br>
          <p>In case you're not familiar with subreddits, check out the difference between:</p>
          <br></br>
          <p className='center'><em>The_Donald</em> vs. <em>marchagainsttrump</em></p>
          <p className='center'><em>funny</em> vs. <em>news</em></p>
        </div>
      </div>
    );
  }
}
