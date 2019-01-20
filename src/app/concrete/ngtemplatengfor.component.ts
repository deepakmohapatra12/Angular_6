import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { UserService } from './user.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-ngtemplatengfor',
  templateUrl: './ngtemplatengfor.component.html',
  styleUrls: ['./ngtemplatengfor.component.css']
})
export class NgtemplatengforComponent implements OnInit {

  mobnumPattern = "^((\\+91-?)|0)?[0-9]{10}$";

  departments: Array<any> = [];
  states: Array<any> = [];

  processValidation = false;
  userToUpdate = null;

  allUsers;


  selectedCountry = 0;
  selectedState = 0;

  userForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
    private userservice: UserService, private _route: ActivatedRoute) {
    this.getAllUsers();
  }

  ngOnInit() {
    this.userFormValidation();
    this.fetchIdFromUrl();
  }

  //departments array
  getDepartments() {
    return [
      { id: 1, name: 'IT' },
      { id: 2, name: 'CSE' },
      { id: 3, name: 'ELECTRICAL' },
      { id: 4, name: 'MECH' },
      { id: 5, name: 'CIVIL' }
    ]
  }

  //countrys array
  getCountries() {
    return [
      { id: 1, name: 'India' },
      { id: 2, name: 'USA' },
      { id: 3, name: 'Australia' }
    ];
  }

  //on change of country states will be populated 
  onSelectCountry(country_id: number) {
    this.selectedCountry = country_id;
    this.selectedCountry = 0;
    this.states = this.getStates().filter((item) => {
      return item.country_id === Number(country_id)
    });
  }


  //states array 
  getStates() {
    return [
      { id: 1, country_id: 1, name: 'Andhra Pradesh' },
      { id: 2, country_id: 1, name: 'Madhya Pradesh' },
      { id: 3, country_id: 2, name: 'San Francisco' },
      { id: 4, country_id: 2, name: 'Los Angeles' },
      { id: 5, country_id: 3, name: 'New South Wales' },
      { id: 6, country_id: 3, name: 'Victoria' },
    ]
  }

  //form validation method for userForm
  userFormValidation() {
    this.userForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern(this.mobnumPattern)]],
      gender: ['', Validators.required],
      country: ['', Validators.required],
      department: ['', Validators.required],
      state: ['', Validators.required],
      terms: ['', Validators.required]
    })
  }

  //for better convience to control the forms
  get p() {
    return this.userForm.controls;
  }

  //after click on the submit button
  onFormSubmit(): void {
    this.submitted = true;
    //stop here if form is invalid
    this.processValidation = true;
    if (this.userForm.invalid) {
      return;
    }
    //console.log('Success' + JSON.stringify(this.userForm.value));
    let userData = this.userForm.value;
    this.userservice.createUser(userData)
      .subscribe(() => {
        this.processValidation = false;
        this.userForm.reset();
      })
  }


  //fetch id from url and pass to the update operation
  fetchIdFromUrl() {
    this._route.paramMap.subscribe(params => {
      const userId = +params.get('id');
      console.log(userId);
      if (userId) {
        this.getEachUserData(userId)
      }
    })
  }

  getEachUserData(userId: any) {
    this.userservice.getUserById(userId)
      .subscribe(user => {
        this.userToUpdate = user.id;
        this.userForm.patchValue({
          firstname: user.firstname,
          lastname: user.lastname,
          email: user.email,
          mobile: user.mobile,
          department: user.department,
          gender: user.gender,
          terms: user.terms
        })
      })
  }



  getAllUsers(): void {
    this.userservice.getUser()
      .subscribe(
        data => this.allUsers = data,
        error => console.log("Error:" + error)
      )
  }

  //the below function will reset the form after the form submission
  backToCreate() {
    this.userForm.reset();
    this.processValidation = false;
  }


}






















