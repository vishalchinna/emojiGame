import './index.css'

const NavBar = prop => {
  const {score, topScore, result} = prop
  return (
    <div className="nav-section">
      <div className="logo-section">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png "
          alt="emoji logo"
          className="logo"
        />
        <h1>Emoji Game</h1>
      </div>
      {result ? (
        <div className="score-list">
          <p>score: {score}</p>
          <p>Top Score: {topScore}</p>
        </div>
      ) : null}
    </div>
  )
}

export default NavBar
