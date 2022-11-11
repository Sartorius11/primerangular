import { Component } from "@angular/core";

@Component({
    selector:"app-deportes",
    templateUrl:"./deportes.component.html",
    styleUrls:["./deportes.component.css"]
    
})

export class DeportesComponent{
    public sports: Array<string>;
    public numeros: Array<number>;

    constructor(){
        
        this.sports=["petanca","tiro con arco", "tenis","padel"];
        this.numeros=[5,9,4,4,15,6,4];
    }
}