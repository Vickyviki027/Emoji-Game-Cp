/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

import {Component} from 'react'

import './index.css'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {
    isGameInProgress: true,
    topScore: 0,
    clickedEmojiList: [],
  }

  renderScoreCard = () => {
    const {emojisList} = this.props
    const {clickedEmojiList} = this.state
    const isWon = clickedEmojiList.length === emojisList.length

    return (
      <div className="result-container">
        <WinOrLoseCard
          isWon={isWon}
          onClickPlayAgain={this.finishGameAndSetTopScore}
          score={clickedEmojiList.length}
        />
      </div>
    )
  }

  finishGameAndSetTopScore = currentScore => {
    const {topScore} = this.state
    let newTopScore = topScore
    if (currentScore > newTopScore) {
      newTopScore = currentScore
      this.setState({topScore: newTopScore, isGameInProgress: false})
    } else {
      this.setState({isGameInProgress: true, clickedEmojiList: []})
    }
  }

  clickEmoji = id => {
    const {emojisList} = this.props
    const {clickedEmojiList} = this.state
    const isIdIncludes = clickedEmojiList.includes(id)
    const clickedEmojisLength = clickedEmojiList.length
    const emojiListLength = clickedEmojiList.length === emojisList.length

    if (isIdIncludes === true || emojiListLength === true) {
      this.finishGameAndSetTopScore(clickedEmojisLength)
    } else {
      this.setState(prevState => ({
        clickedEmojiList: [...prevState.clickedEmojiList, id],
      }))
    }
  }

  getShuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  renderEmojisList = () => {
    const shuffledEmojisList = this.getShuffledEmojisList()

    return (
      <ul className="emoji-container">
        {shuffledEmojisList.map(eachEmoji => (
          <EmojiCard
            eachEmoji={eachEmoji}
            clickEmoji={this.clickEmoji}
            key={eachEmoji.id}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {clickedEmojiList, topScore, isGameInProgress} = this.state
    const emojiListLength = clickedEmojiList.length === 12
    let renderResult
    if (emojiListLength || isGameInProgress === false) {
      renderResult = this.renderScoreCard()
    } else {
      renderResult = this.renderEmojisList()
    }

    return (
      <div className="bg-container">
        {isGameInProgress ? (
          <NavBar
            currentScore={clickedEmojiList.length}
            isGameInProgress={isGameInProgress}
            topScore={topScore}
          />
        ) : (
          ''
        )}
        <div className="emojis-container">{renderResult}</div>
      </div>
    )
  }
}
export default EmojiGame
