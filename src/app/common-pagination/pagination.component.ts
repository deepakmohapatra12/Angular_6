import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/Observable/throw';
import 'rxjs/add/operator/catch';     
import 'rxjs/add/operator/retry';
import { BookService } from './book.service';
import { Technology } from './technology';
import { User } from './user';
import { Profile } from './profile';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export interface IallPersons {
	name : string;
	age : string;
}

@Component({
	selector: 'app-pagination',
	templateUrl: './pagination.component.html',
	styleUrls: ['./pagination.component.css']
})

export class PaginationComponent implements OnInit {
	masterSelected : boolean;
	checklist : any;
	checkedList : any
	constructor(private formBuilder: FormBuilder, private bookService: BookService) { 
		this.masterSelected = false;
      this.checklist = [
        {id:1,value:'Elenor Anderson',isSelected:false},
        {id:2,value:'Caden Kunze',isSelected:false},
        {id:3,value:'Ms. Hortense Zulauf',isSelected:false},
        {id:4,value:'Grady Reichert',isSelected:false},
        {id:5,value:'Dejon Olson',isSelected:false},
        {id:6,value:'Jamir Pfannerstill',isSelected:false},
        {id:7,value:'Aracely Renner DVM',isSelected:false},
        {id:8,value:'Genoveva Luettgen',isSelected:false}
	  ];
	  this.getCheckedItemList();
	}
	ngOnInit(): void {
		//this.checkUncheckAll();
	}

	checkUncheckAll() {
		for(let i=0;i<this.checklist.length;i++){
			this.checklist[i].isSelected = this.masterSelected;
		}
		this.getCheckedItemList();
	}
	isAllSelected() {
		this.masterSelected = this.checklist.every((item:any)=>{
			return item.isSelected == true;
		})
		this.getCheckedItemList();
	}

	getCheckedItemList() {
		this.checkedList = [];
		for(var i=0;i<this.checklist.length;i++) {
			if(this.checklist[i].isSelected) {
				this.checkedList.push(this.checklist[i])
			}
		}
		this.checkedList = JSON.stringify(this.checkedList)
	}



}

















