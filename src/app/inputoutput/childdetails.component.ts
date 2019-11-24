import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-childdetails',
  templateUrl: './childdetails.component.html',
  styleUrls: ['./childdetails.component.css'],
  //inputs:['data']
})
export class ChilddetailsComponent implements OnInit {

  constructor() { }

  @Input() 
	data : string;

  ngOnInit() {
  }



}
