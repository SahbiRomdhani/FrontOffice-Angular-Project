import { Router } from '@angular/router';
import { UserService } from './../../../Shared/Services/UserService';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  token:string;
  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
  }
  userloginform = new FormGroup({
    email:new FormControl(),
    password:new FormControl()

  });
  submit(){
    this.userService.login(this.userloginform.value).subscribe((res)=>{
      console.log("resultat",res)
      this.token = res['access_token'];
      localStorage.setItem('token', this.token);
      localStorage.setItem('expires_in', res['expires_in']);
      localStorage.setItem('user_id', res['user_id']);
      localStorage.setItem('nom', res['user_name']);
      this.router.navigate(["/"]);
    },(err)=>{
      console.log('errors',err);
    })
    console.log("user Login",this.userloginform.value)
  }
}
