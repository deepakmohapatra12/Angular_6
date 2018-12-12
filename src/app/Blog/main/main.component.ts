import { Component, OnInit } from '@angular/core';
import {BlogService} from '../blog.service'

import {BsModalService,BsModalRef} from 'ngx-bootstrap/modal';
import {AddNewPostComponent} from '../add-new-post/add-new-post.component';
import {DeletePostComponent} from '../delete-post/delete-post.component';
import {EditPostComponent} from '../edit-post/edit-post.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  title = 'AngularCRUDExample';
  postList: any[] = [];
  bsModalRef: BsModalRef;

  constructor(private blogService: BlogService, private bsModalService: BsModalService) {
    this.getPosts();
  }

  getPosts() {
    this.blogService.getPostList().subscribe(data => {
      Object.assign(this.postList, data);
    }, error => {
      console.log("Error while getting posts ", error);
    });
  }

  addNewPost() {
    this.bsModalRef = this.bsModalService.show(AddNewPostComponent);
    this.bsModalRef.content.event.subscribe(result => {
      console.log("added",result);
      if (result == 'OK') {
        this.getPosts();
      }
    });
  }

  deletePost(id: number) {
    this.bsModalRef = this.bsModalService.show(DeletePostComponent);
    this.bsModalRef.content.id = id;
    this.bsModalRef.content.event.subscribe(result => {
      console.log("deleted", result);
      if (result == 'OK') {
        setTimeout(() => {
          this.postList=[];
          this.getPosts();
        }, 1000);
      }
    });
  }

  editPost(id: number) {
    this.blogService.changePostId(id);
    this.bsModalRef = this.bsModalService.show(EditPostComponent);
    this.bsModalRef.content.event.subscribe(result => {
      if (result == 'OK') {
        setTimeout(() => {
          this.getPosts();
        }, 1000);
      }
    });
  }
  ngOnInit() {
  }

}
