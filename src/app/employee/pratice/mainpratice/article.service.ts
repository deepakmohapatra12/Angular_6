import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Article} from '../../article';

const httpOptions = {
  headers:new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class ArticleService {

  //url for crud operations
  articleUrl = "http://localhost:3000/articles";
  constructor(private http:HttpClient) { }

private handleError(error:Response){
  return Observable.throw(error.statusText);
}

createArticle(article:Article):Observable<Article>{
  return this.http.post<Article>(this.articleUrl,article,httpOptions)
  .catch(this.handleError);
}
getArticles():Observable<Article>{
  return this.http.get<Article>(this.articleUrl)
  .catch(this.handleError)
}

getArticleById(articleId:string):Observable<Article>{
  console.log(this.articleUrl+"/"+articleId);
  return this.http.get<any>(this.articleUrl+"/"+articleId,httpOptions)
  .catch(this.handleError)
}

updateArticle(article:Article):Observable<Article>{
  return this.http.get<any>(this.articleUrl+"/"+article.id,httpOptions)
.catch(this.handleError)
}

deleteArticle(articleId):Observable<Article>{
  return this.http.delete<any>(this.articleUrl+"/"+articleId,httpOptions)
  .catch(this.handleError)
}
 









}


