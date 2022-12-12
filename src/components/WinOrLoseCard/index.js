// Write your code here.
import './index.css'

const LOSE_IMAGE = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
const WON_IMAGE = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'

const WinOrLoseCard = props => {
  const {isWon, score, onClickPlayAgain} = props

  const resultImage = isWon ? WON_IMAGE : LOSE_IMAGE
  const resultText = isWon ? 'You Won' : 'You Lose'
  const scoreText = isWon ? 'Best Score' : 'Score'

  const playAgain = () => {
    onClickPlayAgain()
  }

  return (
    <div className="result-sub-container">
      <div className="result-text-container">
        <h1 className="result-heading">{resultText}</h1>
        <p className="score-result">{scoreText}</p>
        <p className="scores">{score}/12</p>
        <button onClick={playAgain} className="play-button" type="button">
          Play Again
        </button>
      </div>
      <div className="result-img-container">
        <img src={resultImage} className="result-img" alt="win or lose" />
      </div>
    </div>
  )
}
export default WinOrLoseCard
