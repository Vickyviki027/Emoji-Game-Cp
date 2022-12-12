// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {eachEmoji, clickEmoji} = props
  const {id, emojiName, emojiUrl} = eachEmoji

  const onClickEmoji = () => {
    clickEmoji(id)
  }

  return (
    <li className="emoji-items">
      <button onClick={onClickEmoji} className="emoji-button" type="button">
        <img src={emojiUrl} className="emoji-img" alt={emojiName} />
      </button>
    </li>
  )
}
export default EmojiCard
