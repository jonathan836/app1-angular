import { Component, Input, OnInit } from '@angular/core';
import { Neightbor } from '../app.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() listNeighbor!:Neightbor;

  @Input() index!:number;

  constructor() { }

  ngOnInit(): void {
  }

}
