import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Technology} from './technology';
import {Profile} from './profile';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private http:HttpClient) { }

  getPofiles() : Profile[] {
    let profiles = [
      new Profile('dev','Developer'),
      new Profile('man','Manager'),
      new Profile('dir','Director')
    ]

    return profiles;
  }

  getTechnologies() : Technology[] {
    let technologies = [
      new Technology(100,'Java'),
      new Technology(101,'Angular'),
      new Technology(102,'Hibernate'),
      new Technology(103,'Spring')
    ]
    return technologies;
  }

  createUser(user: User) {
    console.log("User Name :" + user.userName);
    console.log("Profile Id :" + user.profile.prId);
    console.log("Profile Name" + user.profile.prName);

    for(let i = 0;i<user.technologies.length;i++) {
      console.log("Technology Id:" + user.technologies[i].techId);
      console.log("Technology Name" + user.technologies[i].techName);
    }
    
  }

}


















