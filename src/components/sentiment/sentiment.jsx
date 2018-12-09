import React from 'react';
require('./sentiment.scss')

export default class Sentiment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: false,
      headlines: {}
    };

    this.analyze = this.analyze.bind(this)
  }

  analyze() {
    this.setState({ isFetching: true });
    fetch("https://exomind-alpha.herokuapp.com/")
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          isFetching: false,
          headlines: responseData
        });
      })
  }

  render() {
    return (
      <div id="sentiment">
        <div id="controls">
          <button id='run' onClick={this.analyze}>
            { this.state.isFetching ? <img src={require("./ajax-loader.gif")} alt="spinner"></img> : "Run Analysis" }
          </button>
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
