import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
  
@Component({
  selector: 'app-ipchild',
  templateUrl: './ipchild.component.html',
  styleUrls: ['./ipchild.component.css']
})
export class IpchildComponent implements OnInit {
//for action and grid cofiguration
  @Input() templateConfigurable = {
    col : 6,
    buttonAction:true
  }
  //for getting the array from parent component
  @Input ('dataArray') myArray : any 
  //for emitting the index of each dynamic card
  @Output() eachCard = new EventEmitter();//for download button action

  constructor() { }
  ngOnInit() {}

  //emitting the action
  toogleMark(i){
    this.eachCard.emit(i);   
  }

}
