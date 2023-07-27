import './index.css'

const EmojiCard = prop => {
  const {cardList, countTheScore} = prop
  const {id, emojiUrl, emojiName} = cardList
  const countTheClicks = () => {
    countTheScore(id)
  }
  return (
    <li className="background">
      <button className="butn" type="button">
        <img
          src={emojiUrl}
          alt={emojiName}
          className="pic"
          onClick={countTheClicks}
        />
      </button>
    </li>
  )
}

export default EmojiCard
