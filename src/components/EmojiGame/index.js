/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'

import './index.css'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {idList: [], score: 0, topScore: 0, result: true}

  countTheScore = id => {
    const {idList} = this.state
    if (idList.includes(id) || idList.length === 11) {
      this.setState({result: false})
    } else {
      this.setState(prevState => ({
        idList: [...prevState.idList, id],
      }))
      this.setState(prev => ({
        score: prev.score + 1,
      }))
    }
  }

  startTheGameAgain = () => {
    const {score, topScore} = this.state

    this.setState({result: true})
    if (score > topScore) {
      this.setState({topScore: score})
    }
    this.setState({score: 0})
    this.setState({idList: []})
  }

  render() {
    const {score, idList, result, topScore} = this.state

    const shuffledEmojisList = () => {
      const {emojisList} = this.props
      return emojisList.sort(() => Math.random() - 0.5)
    }
    const EmojiList = shuffledEmojisList()

    const lnt = idList.length === 11

    return (
      <div className="bg-container">
        <NavBar score={score} topScore={topScore} result={result} />
        {result ? (
          <div className="rrr">
            <ul className="ul-list">
              {EmojiList.map(each => (
                <EmojiCard
                  key={each.id}
                  cardList={each}
                  countTheScore={this.countTheScore}
                />
              ))}
            </ul>
          </div>
        ) : (
          <WinOrLoseCard
            check={lnt}
            score={score}
            startTheGameAgain={this.startTheGameAgain}
          />
        )}
      </div>
    )
  }
}

export default EmojiGame
