import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Neightbor } from "../app.component";

@Injectable()
export class DataServices {
  constructor(private httpClient:HttpClient){}

  loadNeighbors () {
    return this.httpClient.get(
      'https://test-angular-94d04-default-rtdb.firebaseio.com/data.json'
    );
  }

  saveNeighbors (neighbor:Neightbor[]) {
    this.httpClient.put(
      'https://test-angular-94d04-default-rtdb.firebaseio.com/data.json',
      neighbor
    ).subscribe(
      response => console.log('Se han guardado los empleados: ' + response),
      error => console.log('Error: ' + error),
    );
  }

  upgradeNeighbors (index:number, neighbor:Neightbor) {
    let url = 'https://test-angular-94d04-default-rtdb.firebaseio.com/data/' + index + '.json';

    this.httpClient.put(url, neighbor).subscribe(
      response => console.log('Se ha modificado correctamente el empleado: ' + response),
      error => console.log('Error: ' + error),
    );
  }

  deleteNeighbors (index:number) {
    let url = 'https://test-angular-94d04-default-rtdb.firebaseio.com/data/' + index + '.json';

    this.httpClient.delete(url).subscribe(
      response => console.log('Se ha eliminado correctamente el empleado: ' + response),
      error => console.log('Error: ' + error),
    );
  }
}