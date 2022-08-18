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

  pages = 1;
  count:number = 0;
  searchText:any;

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
  
  addNeighbor (count:number) {
    let newEmployee = new Neightbor(this.textName, this.textLastName, this.textPosition, this.textSalary, count);

    this.neighborsService.addNeighborService(newEmployee);
  }
}
