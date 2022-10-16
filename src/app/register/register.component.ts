import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceAuth } from '../data/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @ViewChild("email") email! : ElementRef;
  @ViewChild("password") password! : ElementRef;

  constructor(
    private router: Router,
    private authService: ServiceAuth
  ) { }

  ngOnInit(): void {
  }

  submitData () {
    var mail = this.email.nativeElement.value;
    var pass = this.password.nativeElement.value;
    this.authService.register(mail, pass).then(response => {
      console.log('Response Register: ', response);
      this.router.navigate(['home']);
    });
    
  }
}
