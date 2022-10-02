import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }
  login(uname:any,pass:any){
    if(uname==='vinayak'&& pass=== '123'){
      return 200;
    }
    else{
      return 403;
    }
   
  }
  logout(){
this.router.navigate(['login']);
      
  }
}
