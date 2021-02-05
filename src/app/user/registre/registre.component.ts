import {Router} from "@angular/router";
import { UserService } from './../../../Shared/Services/UserService';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})
export class RegistreComponent implements OnInit {
  token: any;
  errorsRegistre:any;
  constructor( private userService:UserService , private router:Router) {  }

  ngOnInit(): void {
  }

  userformgrp = new FormGroup({
    nom: new FormControl(''),
    prenom: new FormControl(''),
    telephone: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    password_confirmation: new FormControl(''),
    rue: new FormControl(''),
    pays: new FormControl(''),
    ville: new FormControl(''),
    code: new FormControl(''),

  });

  submit(){
    this.userService.AddUser(this.userformgrp.value).subscribe((res)=>{
      console.log("resultat",res)
      this.token = res['access_token'];
      localStorage.setItem('token', this.token);
      localStorage.setItem('expires_in', res['expires_in']);
      localStorage.setItem('user_id', res['user_id']);
      localStorage.setItem('nom', res['user_name']);
      this.router.navigate(["/"]);
    },(err)=>{
       this.errorsRegistre = err.error.errors;
      console.log('errors',err.error.errors);
      console.log('Global Err',err);

    })
    console.log("data user Form", this.userformgrp.value)

  }
 

}
