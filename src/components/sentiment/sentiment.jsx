import React from 'react';
require('./sentiment.scss')

export default class Sentiment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      headlines: {}
    };

    this.analyze = this.analyze.bind(this)
  }

  analyze() {
    fetch("https://exomind-alpha.herokuapp.com/")
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          isLoaded: true,
          headlines: responseData
        });
      })
  }

  render() {
    return (
      <div id="sentiment">
        <div id="controls">
          <button onClick={this.analyze}>Run Analysis</button>
        </div>
        <div>
          {Object.keys(this.state.headlines).map((headline) =>
            <div>
              <h4>{ headline }</h4>
              <ul>
                <li>Negative: { this.state.headlines[headline].neg }</li>
                <li>Neutral: { this.state.headlines[headline].neu }</li>
                <li>Positive: { this.state.headlines[headline].pos }</li>
                <li>Compound: { this.state.headlines[headline].compound }</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  }
}
