import React from 'react';
require('./sentiment.scss')

export default class Sentiment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: false,
      data: [],
      plot: "",
      input: "",
      current: ""
    }

    this.analyze = this.analyze.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({ input: e.target.value })
  }

  analyze() {
    if (this.state.input === "") { alert('Enter a subreddit!'); return }
    this.setState({ isFetching: true })
    var sub = this.state.input

    fetch("https://exomind-alpha.herokuapp.com/" + sub)
    // fetch("http://localhost:8080/" + sub)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          isFetching: false,
          current: sub,
          data: JSON.parse(responseData.data),
          plot: JSON.parse(responseData.plot)
        })
      })
      .catch(() => {
        alert("CATASTROPHIC MALFUNCTION: Did you type a valid subreddit name?")
        this.setState({ isFetching: false })
      })
  }

  render() {
    return (
      <div id="sentiment">
        <div id="controls">
          <input type="text" name="subreddit" placeholder="Enter subreddit" onChange={ this.handleChange }></input>
          <button id='run' onClick={this.analyze}>
            { this.state.isFetching ? <img src={require("./ajax-loader.gif")} alt="spinner"></img> : "Run Analysis" }
          </button>
        </div>

        { this.state.current !== "" && (<h1>{"r/" + this.state.current + " Sentiment Overview"}</h1>) }
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
