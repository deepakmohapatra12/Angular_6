import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Component({
  selector: 'main-pratice',
  templateUrl: './mainpratice.component.html',
  styleUrls: ['./mainpratice.component.css']
})
export class MainpraticeComponent implements OnInit {

  constructor(private httpService:HttpClient) { }
  arrCase:object [];
  Drugs:object[];
  reactions:object[];
  details:object[];

  ngOnInit() {
  //  this.httpService.get('http://localhost:3000/nested').subscribe((data)=>{
  //    let res = data[0];
  //    console.log(res);
  //    this.reactions = res['Reactions'];
  //    console.log(this.reactions);
  //    this.details = this.reactions[0]['Details'];
  //    console.log(this.details);
  //    console.log(this.details[1]['home']);
  //  })



  }

}
