import { Component, OnInit } from '@angular/core';
import { Neightbor } from '../app.component';
import { NeighborService } from '../neighbor.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // listEmployee: Empleado;

  // index: number;

  textName:string = '';
  textLastName:string = '';
  textPosition:string = '';
  textSalary:number = 0;

  neighbors:Neightbor[] = [];

  constructor(
    private employeesService:NeighborService
  ) { }

  ngOnInit(): void {
    this.employeesService.getEmployees().subscribe(
      myEmployees => {
        console.log(myEmployees);
        this.neighbors = Object.values(myEmployees);
        this.employeesService.setEmployees(this.neighbors);
      }
    );
  }
  
  addNeighbor () {
    let newEmployee = new Neightbor(this.textName, this.textLastName, this.textPosition, this.textSalary);

    this.employeesService.addEmployeeService(newEmployee);
  }

}
