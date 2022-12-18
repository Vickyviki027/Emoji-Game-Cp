// Write your code here.
import './index.css'

const NavBar = props => {
  const {currentScore, isGameInProgress, topScore} = props
  return (
    <nav className="nav-bar-container">
      <div className="logo">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          className="emoji-logo"
          alt="emoji logo"
        />
        <h1 className="heading">Emoji Game</h1>
      </div>
      {isGameInProgress ? (
        <div className="score-card">
          <p className="top-score">Score: {currentScore}</p>
          <p className="top-score">Top Score: {topScore}</p>
        </div>
      ) : (
        ''
      )}
    </nav>
  )
}
export default NavBar
