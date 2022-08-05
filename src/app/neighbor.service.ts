import { Injectable } from "@angular/core";
import { Neightbor } from "./app.component";
import { DataServices } from "./data/data.services";

@Injectable()
export class NeighborService {
    constructor(
        private dataService:DataServices,
    ){}

    setEmployees (myNeighbor:Neightbor[]) {
        this.neighbors = myNeighbor;
    }

    getEmployees () {
        return this.dataService.loadNeighbors();
    }

    neighbors:Neightbor[] = [];

    addEmployeeService (neighbor:Neightbor) {
        this.neighbors.push(neighbor);

        this.dataService.saveNeighbors(this.neighbors);
    }

    searchEmployee (index:number) {
        let neighbor:Neightbor = this.neighbors[index];

        return neighbor;
    }

    updateEmployee (index:number, neighbor:Neightbor) {
        let employeeUpdated = this.neighbors[index];

        employeeUpdated.name = neighbor.name;
        employeeUpdated.lastname = neighbor.lastname;
        employeeUpdated.position = neighbor.position;
        employeeUpdated.salary = neighbor.salary;

        this.dataService.upgradeNeighbors(index, neighbor);
    }

    deleteEmployee (index:number) {
        this.neighbors.splice(index, 1);

        this.dataService.deleteNeighbors(index);

        if (this.neighbors != null) {
            this.dataService.saveNeighbors(this.neighbors);
        }
    }
}