import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ipparent',
  templateUrl: './ipparent.component.html',
  styleUrls: ['./ipparent.component.css']
})
export class IpparentComponent implements OnInit {

  constructor() { }

  contracts: any[];
   

  templateConfigure = {
    col : 12,
    buttonAction:true
  }

  selectedData:any;

  ngOnInit() {
    this.contracts = [
      { name: 'Deepak', skill:'angular'},
      { name: 'Pooja', skill:'node'},
      { name: 'Bandana', skill:'java'},
      { name: 'Roopa', skill:'c++'},
      { name: 'Info', skill:'php'},
      { name: 'Priyanka', skill:'Devops'},
      { name: 'Divya', skill:'Python'},
      { name: 'Raju', skill:'c++'},
      { name: 'Sameer', skill:'c++'},
    ]
  }

  getCardIndex(index){
    this.selectedData = index.skill;
    console.log(this.selectedData);
  
  }

}
