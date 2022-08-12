import { Component, OnInit } from '@angular/core';
import { Neightbor } from '../app.component';
import { NeighborService } from '../neighbor.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listNeighbor!:Neightbor;
  index!: number;

  textName:string = '';
  textLastName:string = '';
  textPosition:string = '';
  textSalary:number = 0;

  neighbors:Neightbor[] = [];

  pages:number = 1;

  constructor(
    private neighborsService:NeighborService
  ) { }

  ngOnInit(): void {
    this.neighborsService.getNeighbors().subscribe(
      myNeighbors => {
        console.log(myNeighbors);
        this.neighbors = Object.values(myNeighbors);
        this.neighborsService.setNeighbors(this.neighbors);
      }
    );
  }
  
  addNeighbor () {
    let newEmployee = new Neightbor(this.textName, this.textLastName, this.textPosition, this.textSalary);

    this.neighborsService.addNeighborService(newEmployee);
  }

}
