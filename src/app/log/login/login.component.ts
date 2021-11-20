import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { User } from './models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private router: Router, private fb: FormBuilder, private logService: LoginService) { }

  ngOnInit() {
    this.logService.getusers().subscribe((res: any) => {
      console.log(res.results)
      localStorage.setItem('data', JSON.stringify(res.results))
    })

  }
  userform = this.fb.group({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),


  })

  get f() {
    return this.userform.controls;
  }




  onSubmit(data: User) {
    this.logService.login(data)
  }
}
