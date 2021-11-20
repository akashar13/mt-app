import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private router: Router, private fb: FormBuilder) { }
 
  ngOnInit(): void {
  }
  userform = this.fb.group({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    Gender: new FormControl('', [Validators.required]),
    Name: this.fb.group({
      title: new FormControl('', [Validators.required]),
      first: new FormControl('', [Validators.required]),
      last: new FormControl('', [Validators.required]),
    }),
    Email: new FormControl('', [Validators.required]),
    DOB: new FormControl('', [Validators.required]),
    Phone: new FormControl('', [Validators.required]),





  })

  get f() {
    return this.userform.controls;
  }
  onSubmit(data: any) {
    localStorage.setItem("data", JSON.stringify(data))
   
  }
}
