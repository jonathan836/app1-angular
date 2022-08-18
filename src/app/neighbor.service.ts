import { Injectable } from "@angular/core";
import { Neightbor } from "./app.component";
import { DataServices } from "./data/data.services";

@Injectable()
export class NeighborService {
    constructor(
        private dataService:DataServices,
    ){}

    setNeighbors (myNeighbor:Neightbor[]) {
        this.neighbors = myNeighbor;
    }

    getNeighbors () {
        return this.dataService.loadNeighbors();
    }

    neighbors:Neightbor[] = [];

    addNeighborService (neighbor:Neightbor) {
        this.neighbors.push(neighbor);

        this.dataService.saveNeighbors(this.neighbors);
    }

    searchNeighbor (index:number) {
        let neighbor:Neightbor = this.neighbors[index];

        return neighbor;
    }

    updateNeighbor (index:number, neighbor:Neightbor) {
        let neighborUpdated = this.neighbors[index];

        neighborUpdated.name = neighbor.name;
        neighborUpdated.lastname = neighbor.lastname;
        neighborUpdated.position = neighbor.position;
        neighborUpdated.salary = neighbor.salary;
        neighborUpdated.index = neighbor.index

        this.dataService.upgradeNeighbors(index, neighbor);
    }

    deleteNeighbor (index:number) {
        this.neighbors.splice(index, 1);

        this.dataService.deleteNeighbors(index);

        if (this.neighbors != null) {
            this.dataService.saveNeighbors(this.neighbors);
        }
    }
}