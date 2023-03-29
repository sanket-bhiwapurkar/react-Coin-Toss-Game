import './index.css'

import {Component} from 'react'

class CoinToss extends Component {
  state = {total: 0, heads: 0, tails: 0, result: 'heads'}

  RenderCoin = () => {
    const {result} = this.state
    if (result === 'heads') {
      return (
        <img
          src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
          alt="toss result"
          className="image"
        />
      )
    }
    return (
      <img
        src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
        alt="toss result"
        className="image"
      />
    )
  }

  OnToss = () => {
    const num = Math.floor(Math.random() * 2)

    if (num === 0) {
      this.setState(prevState => ({
        total: prevState.total + 1,
        heads: prevState.heads + 1,
        result: 'heads',
      }))
    } else {
      this.setState(prevState => ({
        total: prevState.total + 1,
        tails: prevState.tails + 1,
        result: 'tails',
      }))
    }
  }

  render() {
    const {total, heads, tails} = this.state
    return (
      <div className="bg-container">
        <div className="coin-toss-game">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="msg">Heads (or) Tails</p>
          <this.RenderCoin />

          <button type="button" className="btn" onClick={this.OnToss}>
            Toss Coin
          </button>
          <div className="results">
            <p className="result">Total: {total}</p>
            <p className="result">Heads: {heads}</p>
            <p className="result">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
