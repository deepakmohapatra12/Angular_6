import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { BlogService } from '../blog.service';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-add-new-post',
  templateUrl: './add-new-post.component.html',
  styleUrls: ['./add-new-post.component.css']
})
export class AddNewPostComponent implements OnInit {

  addNewPostForm: FormGroup;
  categories: any[] = [];
  event: EventEmitter<any> = new EventEmitter();

  constructor(private builder: FormBuilder, private blogService: BlogService, private bsModalRef: BsModalRef) {
    this.addNewPostForm = this.builder.group({
      // category: new FormControl(null, Validators.required),
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });

    this.blogService.getCategoryList().subscribe(data => {
      Object.assign(this.categories, data);
    }, error => { console.log('Error while gettig category data.'); });
  }

  onPostFormSubmit() {
    if (this.addNewPostForm.invalid) {
      return;
    }
    let postData = this.addNewPostForm.value;//get the value of all input field
    this.blogService.addPost(postData).subscribe(data => {
      console.log(data);
      this.resetform();
      this.event.emit('OK');
      this.onClose();
    });
  }

  //reset the from
  resetform() {
    this.addNewPostForm.reset();
  }
//close the modal
  onClose() {
    this.bsModalRef.hide();
  }

  ngOnInit() {
  }

}
