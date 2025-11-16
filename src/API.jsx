import React, { Component } from 'react';

class API extends Component {
  constructor(props) {
    super(props);
    this.state = {
      advice: `Don't judge a book by its cover, unless it has a synopsis on the back.`
    };
  }

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    this.setState();
    fetch('https://api.api-ninjas.com/v1/advice',{
      headers: {
        'X-Api-Key': '8pAf/AtxW7qErY0YGCBZCA==meSBpPJy5P9ZwILz'
      }
    })
      .then(res => {return res.json()})
      .then(data => this.setState({ advice: data.advice}))
  };

  render() {
    const { advice } = this.state;
    return (
      <div className='container'>
        <p>"{advice}"</p>
        <button className="button" onClick={this.fetchAdvice}>
        Get New Quote
        </button>
      </div>
    );
  }
}

export default API;
