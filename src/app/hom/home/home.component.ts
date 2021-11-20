import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  datas: any;
  searchResult: any;
  addUser:boolean=true
  

  constructor() { }

  ngOnInit(): void {
    this.datas = JSON.parse(localStorage.getItem('data') || '{}')

  }
 search(data:any){

    let arr = this.datas.find((e:any)=>(e.user.name.first==data.value || e.user.name.last==data.value ))
    if(arr){
      this.searchResult=arr
    }
 
  }
addUse(){
  console.log(this.addUser)
 
  console.log("D")
}
  
}
