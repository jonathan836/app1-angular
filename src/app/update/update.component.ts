import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Neightbor } from '../app.component';
import { NeighborService } from '../neighbor.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  neighbors:Neightbor[] = [];

  action!:number;

  constructor(
    private router:Router,
    private employeesService:NeighborService,
    private route:ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.action = parseInt(this.route.snapshot.queryParams['action']);

    this.neighbors = this.employeesService.neighbors
    this.index = this.route.snapshot.params['id'];
    let neighbor:Neightbor = this.employeesService.searchNeighbor(this.index);

    this.textName = neighbor.name;
    this.textLastName = neighbor.lastname;
    this.textPosition = neighbor.position;
    this.textSalary = neighbor.salary;
  }

  goToHome() {
    this.router.navigate(['']);
  }

  updateNeighbor () {
    if (this.action == 1) {
      let myEmployee = new Neightbor(this.textName, this.textLastName, this.textPosition, this.textSalary);
      // this.myService.showMessage('Nombre del empleado: ' + newEmployee.name + ' ' + newEmployee.lastname);
      // this.empleados.push(newEmployee);
      this.employeesService.updateNeighbor(this.index, myEmployee);

      this.router.navigate(['']);
    } else {
      this.employeesService.deleteNeighbor(this.index);

      this.router.navigate(['']);
    }
  }

  textName:string = '';
  textLastName:string = '';
  textPosition:string = '';
  textSalary:number = 0;
  index!:number;
}
