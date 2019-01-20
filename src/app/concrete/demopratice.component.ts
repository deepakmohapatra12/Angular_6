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

@Component({
  selector: 'app-demopratice',
  templateUrl: './demopratice.component.html',
  styleUrls: ['./demopratice.component.css']
})
export class DemopraticeComponent implements OnInit {
  collections: Array<any> = [];
  names = [];
  selected: string = '';
  selectedAll: any;


  categories = [
    { name: 'Angular' },
    { name: 'Node' },
    { name: 'BE' },
    { name: 'WebDev' }
  ]

  writers = [
    { name: 'Krishna' },
    { name: 'Pooja' },
    { name: 'Roopa' },
    { name: 'Alok' }
  ]

  constructor(private renderer: Renderer2, private articleService: ArticleService,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private bsModalService: BsModalService, private blogService: BlogService, private route: ActivatedRoute) {
    this.collections = ["Pooja", "Bandana", "Deepak", "Raghab"];
    //this.names = ["Pooja","Bandana","Raghu","Roopa"];
    // this.names = [
    //   { name: 'Turbo', selected: false },
    //   { name: 'Glider', selected: false },
    //   { name: 'Blade', selected: false },
    //   { name: 'Razor', selected: false }
    // ]

  }


  ngOnInit() {
    
    
  }

 

 

  









































}