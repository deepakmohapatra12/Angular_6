import { Component, OnInit,ViewChild, Input} from '@angular/core';
// import {NgtemplatengforComponent} from './ngtemplatengfor.component';
import { NgTemplateOutlet } from '@angular/common';
import {UserService} from './user.service';
import {Router,ActivatedRoute} from '@angular/router';
import {DemopraticeComponent} from './demopratice.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
allUsers : any;
  constructor(private userservice : UserService,private router:Router) { }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers():void{
    this.userservice.getUser()
    .subscribe(data=>{
      this.allUsers = data,
      error => console.log("Error:"+ error)
    })
  }

  editUser(userId:any){
    this.router.navigate(['/useredit',userId])
  }

  deleteUser(userId:any){
    if(confirm('Are you sure?'))
    this.userservice.deleteUser(userId)
    .subscribe(()=>{
      this.getAllUsers()
    },
    error=>console.log("Error:"+error))
    
  }

 
 



  

  






  


}
