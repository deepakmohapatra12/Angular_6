import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, Subscriber } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Article } from './article';
import { Book } from './my-country';
import { catchError, retry } from 'rxjs/operators';
import { of } from 'rxjs';
import { Profile } from '../concrete/profile';
import { Technology } from '../concrete/technology';
import { User } from '../concrete/user';
import {MyCountry} from './my-country';
import { Person } from '../concrete/person';



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  articleUrl = 'http://localhost:3000/articles'


  constructor(private http: HttpClient) { }

  //handle the error of crud response
  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }

  //create articles
  createArticle(article: Article): Observable<Article> {
    return this.http.post<Article>(this.articleUrl, article, httpOptions)
      .catch(this.handleError)
  }

  //Fetch article
  getArticles(): Observable<Article> {
    return this.http.get<Article>(this.articleUrl)
      .catch(this.handleError);
  }

  //Fetch article by id
  getArticleById(articleId: string): Observable<Article> {
    console.log(this.articleUrl + "/" + articleId);
    return this.http.get<any>(this.articleUrl + "/" + articleId, httpOptions)
      .catch(this.handleError);
  }

  //update article
  updateArticle(article: Article): Observable<number> {
    return this.http.put<any>(this.articleUrl + "/" + article.id, article, httpOptions)
      .catch(this.handleError)
  }

  //delete article
  deleteArticleById(articleId): Observable<Article> {
    return this.http.delete<any>(this.articleUrl + "/" + articleId, httpOptions)
      .catch(this.handleError)
  }

  bookUrl = "http://localhost:3000/bookDetails";

 
 
















}
