import './index.css'

const WinOrLoseCard = prop => {
  const {check, score, startTheGameAgain} = prop
  const startGame = () => {
    startTheGameAgain()
  }

  return (
    <div className="cardBox">
      {check ? (
        <div className="Card">
          <div className="scoreBoard">
            <h1 className="head">You Won</h1>
            <p className="score">Best Score</p>
            <p className="para">{score + 1}/12</p>
            <button
              type="button"
              data-testid="button"
              className="btn"
              onClick={startGame}
            >
              Play Again
            </button>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
            alt="win or lose"
            className="image"
          />
        </div>
      ) : (
        <div className="Card">
          <div className="scoreBoard">
            <h1 className="head">You lose</h1>
            <p className="score">Score</p>
            <p className="para">{score + 1}/12</p>
            <button
              type="button"
              className="btn"
              data-testid="button"
              onClick={startGame}
            >
              Play Again
            </button>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
            alt="win or lose"
            className="image"
          />
        </div>
      )}
    </div>
  )
}

export default WinOrLoseCard
