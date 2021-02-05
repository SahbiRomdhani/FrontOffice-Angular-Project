import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})
export class RegistreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  userformgrp = new FormGroup({
    nom: new FormControl(''),
    prenom: new FormControl(''),
    telephone: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    rue: new FormControl(''),
    region: new FormControl(''),
    ville: new FormControl(''),
    codePostal: new FormControl(''),

  });

  submit(){
    console.log("data user Form", this.userformgrp.value)

  }
 

}
