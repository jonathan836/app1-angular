import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceAuth } from '../data/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild("email") email! : ElementRef;
  @ViewChild("password") password! : ElementRef;

  constructor(
    private router:Router,
    private authService: ServiceAuth
  ) { }

  ngOnInit(): void {
  }

  logIn():void{
    let mail = this.email.nativeElement.value;
    let pass = this.password.nativeElement.value;
    console.log(mail);
    console.log(pass)
    this.authService.login(mail, pass).then(response => {
      if (mail === ''&& pass === '') {
        
      } else {
        console.log('Response Login: ', response);
        this.router.navigate(['home']);
      }
    });
  }

  logInGoogle():void{
    let mail = this.email.nativeElement.value;
    let pass = this.password.nativeElement.value;
    this.authService.loginGoogle(mail, pass).then(response => {
      console.log(response);
      this.router.navigate(['home']);
    });
  }
}
