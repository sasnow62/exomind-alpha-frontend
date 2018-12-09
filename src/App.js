import React from 'react';
import Mainframe from './components/mainframe/mainframe.jsx'
import Sentiment from './components/sentiment/sentiment.jsx'
import './App.scss';

class App extends React.Component {
  render() { return (
    <div id="view">
      <Mainframe></Mainframe>
      <Sentiment></Sentiment>
    </div>
  )}
}

export default App;
