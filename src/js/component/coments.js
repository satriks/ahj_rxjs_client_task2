import convertTimestampToDate from './convertTimestamp'

export default function createComments (comment) {
  const postComment = document.createElement('div')
  postComment.classList.add('post__comment')

  const commentPerson = document.createElement('div')
  commentPerson.classList.add('comment__person')

  const avatar = document.createElement('img')
  avatar.classList.add('comment__avatar')
  avatar.src = comment.avatar

  const commentInfo = document.createElement('div')
  commentInfo.classList.add('comment__info')

  const commentName = document.createElement('span')
  commentName.classList.add('comment__name')
  commentName.textContent = comment.author

  const commentText = document.createElement('span')
  commentText.classList.add('comment__text')
  commentText.textContent = comment.content

  const commentDate = document.createElement('span')
  commentDate.classList.add('comment__date')
  commentDate.textContent = convertTimestampToDate(comment.created)

  commentInfo.append(commentName, commentText)
  commentPerson.append(avatar, commentInfo, commentDate)
  postComment.append(commentPerson)

  return postComment
}
