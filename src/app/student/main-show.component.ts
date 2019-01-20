import { Component, OnInit } from '@angular/core';
import { StudentRecordService } from './student-record.service';
import { Student } from './student';


@Component({
  selector: 'app-main-show',
  templateUrl: './main-show.component.html',
  styleUrls: ['./main-show.component.css']
})
export class MainShowComponent implements OnInit {
  students: Student[];
  constructor(private studentRecordService: StudentRecordService) { }

  ngOnInit() {
    this.getStudentRecord();
  }

  getStudentRecord(): void {
    this.studentRecordService.getStudentRecord()
      .subscribe(
        studentdata => this.students = studentdata.sort(function (a, b) {
          return a.Marks - b.Marks
        }),
        error => "Error:" + error
      )
  }

  getToppersRecord() {
    return this.students.slice(0, 5);
  }

  getMediocoreRecord() {
    return this.students.slice(5, 10);
  }
  getLowerRecord() {
    this.getStudentRecord();
  }

  trackValueChanged(value:Student){
    // this.students.find(x=>x.RollNo === value.RollNo).Marks = value.Marks;
    this.students.find(function(x){
      return x.RollNo === value.RollNo
    }).Marks = value.Marks
    this.getStudentRecord();
  }

}







