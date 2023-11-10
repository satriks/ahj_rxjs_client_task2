import newMassage from './component/message'
import { ajax } from 'rxjs/ajax'
import { map, catchError } from 'rxjs/operators'
import { of, interval, mergeMap } from 'rxjs'

// const obs$ = ajax.getJSON('http://localhost:7070/posts/latest')
//   .pipe(
//     mergeMap(() =>
//       ajax.getJSON(`http://localhost:7070/posts/${id}/comments/latest`)
//         .pipe(
//           map(data => data.comments),
//           catchError(error => {
//             return of([])
//           })
//         )
//     )
//   )

// obs$.subscribe(data => {
//   data.forEach(post => console.log(post))
// })