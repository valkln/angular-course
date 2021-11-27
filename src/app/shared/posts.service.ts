import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {DataBaseCreateResponse, PostI} from "./interfaces";
import {environment} from "../../environments/environment";

@Injectable({providedIn: 'root'})
export class PostsService {
  constructor(
    private http: HttpClient
  ) {}
  create(post: PostI): Observable<PostI> {
    return this.http.post(`${environment.dataBaseUrl}posts.json`, post)
      .pipe(map((res: DataBaseCreateResponse ) => {
        return {
          ...post,
          id: res.name,
          date: new Date(post.date)
        }
      }))
  }
  getPosts(): Observable<PostI[]> {
    return this.http.get(`${environment.dataBaseUrl}posts.json`)
      .pipe(map((res: {[key: string]: any}) => {
        return Object
          .keys(res)
          .map(key => ({
          ...res[key],
            id: key,
            date: new Date(res[key].date)
        }))
      }))
  }
  getPost(id: string): Observable<PostI> {
    return this.http.get(`${environment.dataBaseUrl}posts/${id}.json`)
      .pipe(map((post: PostI ) => {
        return {
          ...post,
          id,
          date: new Date(post.date)
        }
      }))
  }
  deletePost(id: string): Observable<void> {
    return this.http.delete<void>(`${environment.dataBaseUrl}posts/${id}.json`)
  }
  update(post: PostI): Observable<PostI> {
    return this.http.patch<PostI>(`${environment.dataBaseUrl}posts/${post.id}.json`, post)
  }
}
