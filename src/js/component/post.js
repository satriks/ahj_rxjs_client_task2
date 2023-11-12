import convertTimestampToDate from './convertTimestamp'
import createComments from './coments'

export default function newPost (post, comments) {
  const postDom = document.createElement('div')
  postDom.classList.add('post')
  postDom.dataset.id = post.id

  const postPerson = document.createElement('div')
  postPerson.classList.add('post__person')

  const avatar = document.createElement('img')
  avatar.classList.add('post__avatar')
  avatar.src = post.avatar

  const postInfo = document.createElement('div')
  postInfo.classList.add('post__info')

  const postName = document.createElement('span')
  postName.classList.add('post__name')
  postName.textContent = post.author

  const postDate = document.createElement('span')
  postDate.classList.add('post__date')
  postDate.textContent = convertTimestampToDate(post.created)

  const postImage = document.createElement('img')
  postImage.classList.add('post__picture')
  postImage.src = post.image

  const latestComments = document.createElement('span')
  latestComments.textContent = 'Latest comments:'

  const postComments = document.createElement('div')
  postComments.classList.add('post__comments')

  const loadMore = document.createElement('span')
  loadMore.classList.add('post__comment-more')
  loadMore.textContent = 'Load more'

  postInfo.append(postName, postDate)
  postPerson.append(avatar, postInfo)
  postDom.append(postPerson, postImage, latestComments, postComments, loadMore)

  for (const comment of comments) {
    const commentDom = createComments(comment)
    postComments.appendChild(commentDom)
  }

  return postDom
}
