import { Component, EventEmitter, Input, Output, OnInit, asNativeElements, } from '@angular/core';
import { ViewChild, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import { ArticleService } from '../employee/article.service';
import { Observable, Subject } from 'rxjs';
import { of } from 'rxjs';
import { NgForm, Validators } from '@angular/forms';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { delay } from 'rxjs-compat/operator/delay';
import { Article } from '../employee/article';
import { Book } from '../employee/my-country';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { map, tap, filter, retry, scan, switchMap, debounceTime, catchError } from 'rxjs/operators';
import { CpDirective } from './cp.directive';
import { Profile } from '../concrete/profile';
import { Technology } from '../concrete/technology';
import { User } from '../concrete/user';
import { pwdMatchUsernameValidator } from './pwd-match-username-validator';
import { confirmPasswordValidator } from './confirm-password-validator';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AddNewPostComponent } from '../Blog/add-new-post/add-new-post.component';
import { BlogService } from '../Blog/blog.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Person } from './person';
import { MessageDirective } from './message.directive';
import { UserService } from './user.service';
// import { Employee } from '../employee/pratice/employee';
import {NumEnum} from './person';
import {Employee} from './person';

@Component({
  selector: 'app-demopratice',
  templateUrl: './demopratice.component.html',
  styleUrls: ['./demopratice.component.css']
})
export class DemopraticeComponent implements OnInit {

  products = [];


  getProducts() {
    return [
        { 'id': '1', 'title': 'Screw Driver', 'price': 400, 'stock': 11 },
        { 'id': '2', 'title': 'Nut Volt', 'price': 200, 'stock': 5 },
        { 'id': '3', 'title': 'Resistor', 'price': 78, 'stock': 45 },
        { 'id': '4', 'title': 'Tractor', 'price': 20000, 'stock': 1 },
        { 'id': '5', 'title': 'Roller', 'price': 62, 'stock': 15 },
    ];
}


  constructor() {
 
  }

  productToUpdate: any;
  changeStockValue(p) {
      this.productToUpdate = this.products.find(this.findProducts, [p.id]);
      this.productToUpdate.stock = this.productToUpdate.stock + p.stockvalue;
  }
  findProducts(p) {
      return p.id === this[0];
  }





  ngOnInit(){
    this.products = this.getProducts();
  }



 

 

  









































}