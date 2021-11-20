import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import data from '../log/login/data/login.json'
import { User } from '../log/login/models/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
constructor(private router: Router,private http:HttpClient){}
baseUrl="https://randomuser.me/api/0.8/?results=20";

getusers(){
  return this.http.get(this.baseUrl)
}


login(credentials:User) {

  if(credentials.username==data.username && credentials.password==data.password){
   this.router.navigate(['/home'])
  }
  else{
    alert("wrong credentials")
  }
}     
}
