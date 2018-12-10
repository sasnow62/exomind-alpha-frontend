import React from 'react';
require('./sentiment.scss')

export default class Sentiment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: false,
      data: [],
      plot: ""
    };

    this.analyze = this.analyze.bind(this)
  }

  analyze() {
    this.setState({ isFetching: true });
    // fetch("https://exomind-alpha.herokuapp.com/")
    fetch("http://localhost:8080")
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          isFetching: false,
          data: JSON.parse(responseData.data),
          plot: JSON.parse(responseData.plot)
        });
        console.log(typeof this.state.plot)
        console.log(this.state.plot)
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

        { this.state.plot !== "" && (<img id="plot" src={ "data:image/png;base64," + this.state.plot } alt="plot" />) }

        <div>
          { this.state.data.map((item) => {
            return (
              <div key={ item.headline }>
                <h4>{ item.headline }</h4>
                <ul>
                  <li>Negative: { item.neg }</li>
                  <li>Neutral: { item.neu }</li>
                  <li>Positive: { item.pos }</li>
                  <li>Compound: { item.compound }</li>
                </ul>
              </div>
            )}
          )}
        </div>
      </div>
    );
  }
}
