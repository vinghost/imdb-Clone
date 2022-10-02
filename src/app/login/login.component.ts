import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username="";
password="";
errormsg="";
  constructor(private auth:AuthService,private router:Router) { }

  ngOnInit(): void {
  }
login(){
  if(this.username.trim().length===0){
    this.errormsg="username is required";
  }else if(this.password.trim().length===0){
    this.errormsg="password is required";    
  }else{
    this.errormsg="";
    let res = this.auth.login(this.username,this.password);
    if(res===200){
this.router.navigate(['home'])
    }
    if(res==403){
      this.errormsg ="invalid credentials";
    }
  }

}

}
