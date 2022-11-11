import { Component, OnInit, DoCheck } from "@angular/core";



@Component({
    selector:"hooks-angular",
    templateUrl:"./hooksangular.component.html"
})

export class HooksAngular implements OnInit{
    public mensaje: string;

    constructor(){
        console.log("Entrando en constructor");
        this.mensaje="Soy Hooks Angular";
    }

    //IMPLEMENTAMOS EL METODO ngOnInit
    ngOnInit(): void {
        console.log("ngOnInit(): Ejecuntando este metodo!")
    }
    //IMPLEMENTAMOS EL METODO ngDocheck
    ngDoCheck(): void{
        console.log("ngDoCheck()!!")
    }

    // VAMOS A CREAR UN METODO PERSONALIZADO
    // PARA LLAMARLO CON UN BOTON
    cambiarMensaje(): void{
        this.mensaje="SINGLE DAY!!"
    }


}