// Write your code here
import {Component} from 'react'

import './index.css'

const HEADS_THE_URL = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const TAILS_THE_URL = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    tossResultImage: HEADS_THE_URL,
    headsCount: 0,
    tailCount: 0,
  }

  onTossCoin = () => {
    const {headsCount, tailCount} = this.state
    const toss = Math.floor(Math.random() * 2)
    let tossImage = ''
    let latestHeadsCount = headsCount
    let latestTailsCount = tailCount

    if (toss === 0) {
      tossImage = HEADS_THE_URL
      latestHeadsCount += 1
    } else {
      tossImage = TAILS_THE_URL
      latestTailsCount += 1
    }

    this.setState({
      tossResultImage: tossImage,
      headsCount: latestHeadsCount,
      tailCount: latestTailsCount,
    })
  }

  render() {
    const {tossResultImage, headsCount, tailCount} = this.state
    const totalCount = headsCount + tailCount

    return (
      <div className="app-container">
        <div className="coin-toss-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img
            src={tossResultImage}
            alt="toss result"
            className="toss-result-img"
          />
          <button type="button" className="button" onClick={this.onTossCoin}>
            Toss Coin
          </button>
          <div className="counts-container">
            <p className="count">Total: {totalCount}</p>
            <p className="count">Heads: {headsCount}</p>
            <p className="count">Tails: {tailCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
