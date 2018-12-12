import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl,Validators } from '@angular/forms';
import { BlogService } from '../blog.service';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  editPostForm: FormGroup;
  categories: any[] = [];
  id: number;
  postData: any;
  event: EventEmitter<any> = new EventEmitter();

  constructor(private builder: FormBuilder, private blogService: BlogService, private bsModalRef: BsModalRef) {
    this.editPostForm = this.builder.group({
       // category: new FormControl(null, Validators.required),
       title: new FormControl('', Validators.required),
       description: new FormControl('', Validators.required)
    });


    this.blogService.getCategoryList().subscribe(data => {
      Object.assign(this.categories, data);
    }, error => { console.log('Error while gettig category data.'); });

    this.blogService.postIdData.subscribe(data => {
      this.id = data;
      if (this.id !== undefined) {
        this.blogService.getPost(this.id).subscribe(data => {
          this.postData = data;
          if (this.editPostForm!=null && this.postData!=null) {
            //this.editPostForm.controls['category'].setValue(this.postData.categoryId);
            this.editPostForm.controls['title'].setValue(this.postData.title);
            this.editPostForm.controls['description'].setValue(this.postData.description);
          }
        }, error => { console.log("Error while gettig post details") });
      }
    });
  }

  onPostEditFormSubmit() {
    let postData = {
      'id': this.id,
      'title': this.editPostForm.get('title').value,
      'description': this.editPostForm.get('description').value,
    }; 

       this.blogService.updatePost(postData).subscribe(data => {      
        this.event.emit('OK');
        this.onClose();      
    });
  }

  onClose() {
    this.bsModalRef.hide();
  }

  ngOnInit() {

  }

}