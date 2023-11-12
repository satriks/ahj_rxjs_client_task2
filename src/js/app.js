import newPost from './component/post'
import { ajax } from 'rxjs/ajax'
import { map, catchError } from 'rxjs/operators'
import { of, mergeMap, switchMap, from } from 'rxjs'

const obs$ = ajax.getJSON('https://ahj-rxjs-server-task2.onrender.com/posts/latest')
  .pipe(
    map(data => data.posts),
    catchError(error => {
      return of([])
    }),
    switchMap(post => {
      return from(post)
        .pipe(
          map((post) => ajax.getJSON(`https://ahj-rxjs-server-task2.onrender.com/posts/${post.id}/comments/latest`)
            .pipe(
              map(data => ({ post, comments: data.comments }))
            ))

        )
    }),
    mergeMap((data) => data.pipe(
      map((data) => { return newPost(data.post, data.comments) })
    ))
  )

obs$.subscribe(data => {
  document.querySelector('.posts').append(data)
})
