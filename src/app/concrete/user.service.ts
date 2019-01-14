import { Injectable } from '@angular/core';
import {HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Person} from './person';


const httpOptions = {
  headers:new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userFormUrl = 'http://localhost:3000/users';
  constructor(private http:HttpClient) { }


  // //handle the error response
  // private handleError(error:Response){
  //   return Observable.throw(error.statusText);
  // }

  //handle the error response
  private handleError(error:Response){
    return Observable.throw(error.statusText)
  }

  //create user from
  createUser(user:Person):Observable<Person>{
    return this.http.post<Person>(this.userFormUrl,user,httpOptions)
    .catch(this.handleError);
  }
  //fetch user 
  getUser():Observable<Person>{
    return this.http.get<Person>(this.userFormUrl)
    .catch(this.handleError)
  }

  //fetch user by id
  getUserById(userId:any):Observable<any>{
    console.log(this.userFormUrl+"/"+userId);
    return this.http.get<any>(this.userFormUrl+"/"+userId,httpOptions)
    .catch(this.handleError);
  }

  
  //update user details
  updateUser(user:Person):Observable<number>{
    return this.http.put<any>(this.userFormUrl+"/"+user.id,user,httpOptions)
    .catch(this.handleError)
  }

 

  deleteUser(userId):Observable<Person>{
    return this.http.delete<any>(this.userFormUrl+"/"+userId,httpOptions)
    .catch(this.handleError)
  }


  

  
}
