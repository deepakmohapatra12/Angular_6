import { Component, OnInit, EventEmitter } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-delete-post',
  templateUrl: './delete-post.component.html',
  styleUrls: ['./delete-post.component.css']
})
export class DeletePostComponent implements OnInit {

  id: number;
  title: string;
  event: EventEmitter<any> = new EventEmitter();
  
  constructor(private bsModalRef: BsModalRef, private blogService: BlogService) {

  }

  deletePost(id: number) {
    this.blogService.deletePost(id).subscribe();
    this.event.emit('OK');
    this.bsModalRef.hide();
  }

  onClose() {
    this.bsModalRef.hide();

  }
  ngOnInit() {
  }
}