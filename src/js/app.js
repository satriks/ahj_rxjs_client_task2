import newPost from './component/post'
import { ajax } from 'rxjs/ajax'
import { map, catchError, tap } from 'rxjs/operators'
import { of, exhaustMap, mergeMap,switchMap, from } from 'rxjs'

const obs$ = ajax.getJSON('http://localhost:7070/posts/latest')
  .pipe(
    map(data => data.posts),
    catchError(error => {
      return of([])
    }),
    switchMap(post =>{ return from(post)
      .pipe(
        map((post) => ajax.getJSON(`http://localhost:7070/posts/${post.id}/comments/latest`)
          .pipe(
            map(data => ({post, comments: data.comments})),
          ))
       
    )}),
    mergeMap((data) => data.pipe(
      map((data) => { return newPost(data.post, data.comments)} )
    ))
    )
      

obs$.subscribe(data => {
  document.querySelector('.posts').append(data)

})
