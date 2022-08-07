import { Component, OnInit } from '@angular/core';
import { Neightbor } from '../app.component';
import { NeighborService } from '../neighbor.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listEmployee!:Neightbor;

  index!: number;

  textName:string = '';
  textLastName:string = '';
  textPosition:string = '';
  textSalary:number = 0;

  neighbors:Neightbor[] = [];

  constructor(
    private employeesService:NeighborService
  ) { }

  ngOnInit(): void {
    this.employeesService.getNeighbors().subscribe(
      myNeighbors => {
        console.log(myNeighbors);
        this.neighbors = Object.values(myNeighbors);
        this.employeesService.setNeighbors(this.neighbors);
      }
    );
  }
  
  addNeighbor () {
    let newEmployee = new Neightbor(this.textName, this.textLastName, this.textPosition, this.textSalary);

    this.employeesService.addNeighborService(newEmployee);
  }

}
