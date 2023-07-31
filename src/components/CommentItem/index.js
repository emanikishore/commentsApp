import './index.css'
import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {eachItem, isToggleLiked, deleteComment} = props
  const {id, name, comment, isLiked, initialClassName, date} = eachItem
  const initial = name ? name[0].toUpperCase() : ''
  const postedTime = formatDistanceToNow(date)
  const likeClassName = isLiked ? 'button active' : 'button'
  const imageUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const onClicked = () => {
    isToggleLiked(id)
  }

  const onCommentDelete = () => {
    deleteComment(id)
  }
  return (
    <li className="lists-container">
      <div className="comment-container">
        <div className={initialClassName}>
          <p className="initial">{initial}</p>
        </div>
        <div>
          <div className="name-container">
            <p className="username">{name}</p>
            <p className="time">{postedTime}</p>
          </div>
          <p className="comment">{comment}</p>
        </div>
      </div>
      <div className="buttons-container">
        <div className="like-container">
          <img src={imageUrl} alt="like" className="like" />
          <button className={likeClassName} type="button" onClick={onClicked}>
            Like
          </button>
        </div>
        <button
          type="button"
          className="delete-btn"
          data-testid="delete"
          onClick={onCommentDelete}
        >
          {' '}
          <img
            className="delete"
            alt="delete"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
          />{' '}
        </button>
      </div>
      <hr className="line" />
    </li>
  )
}
export default CommentItem
