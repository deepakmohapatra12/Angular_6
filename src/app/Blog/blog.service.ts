import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private readonly baseURL: string;
  postIdSource = new BehaviorSubject<number>(0);
  postIdData: any;
  constructor(private http: HttpClient) {
    this.baseURL = "http://localhost:3000/posts";
    this.postIdData = this.postIdSource.asObservable();
  }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }

  getCategoryList() {
    return this.http.get(this.baseURL)
      .catch(this.handleError)
  }
  getPostList() {
    return this.http.get(this.baseURL)
      .catch(this.handleError)
  }

  addPost(post: any) {
    return this.http.post<any>(this.baseURL, post, httpOptions)
      .catch(this.handleError)
  }

  deletePost(id: number) {
    return this.http.delete(this.baseURL + "/" + id, httpOptions)
      .catch(this.handleError)
  }

  updatePost(post: any) {
    return this.http.post(this.baseURL,post,httpOptions)
      .catch(this.handleError)
  }

  getPost(id: number) {
    return this.http.get(this.baseURL+ "/" +id, httpOptions)
      .catch(this.handleError)
  }

  changePostId(id: number) {
    this.postIdSource.next(id)
  }
























}
