import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import {  FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm;
  constructor(private Auth: AuthService, private router: Router ) { }

  ngOnInit() {
    // this.loginForm = new FormGroup({
    //   username: new FormControl('', [Validators.required, Validators.minLength(4)]),
    //   password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    // })
  }

loginUser = (event) => {
  event.stopPropagation();
  event.preventDefault();
  const target = event.target
  const username = target.querySelector('username');
  const password = target.querySelector('password');

  this.Auth.getUserDetails(username, password).subscribe(data => {
    if(data.success){
      //redirect
      this.router.navigate(['admin'])
      this.Auth.setLoggedIn(true)
    } else {
      window.alert(data.message)
    }
  })
  console.log(event, username, password);
}
}
