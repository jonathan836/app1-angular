import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App';
}

export class Neightbor {
  constructor (name:string, lastname:string, position:string, salary:number, id:number) {
    this.name = name;
    this.lastname = lastname;
    this.position = position;
    this.salary = salary;
    this.index = id;
  }

  name:string = '';
  lastname:string = '';
  position:string = '';
  salary:number = 0;
  index:number = 0;
}