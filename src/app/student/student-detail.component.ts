import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Student } from './student';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
  @Input() studentsData: Student[];
  @Output() MarksValueChanged = new EventEmitter();
  constructor() { }

  valueChanged(newData: Student) {
    this.MarksValueChanged.emit(newData);
  }


  ngOnInit() {
  }

}
