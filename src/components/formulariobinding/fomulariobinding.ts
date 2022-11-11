import { Component } from "@angular/core";

@Component({
    selector:"fomulario-binding",
    templateUrl:"./fomulariobinding.html"
})


export class FormularioBindingComponent{
    //DECLARAMOS UN MODEL PARA EL BINDING
    public user:any;
    public mensaje:string;

    constructor(){
        this.mensaje="";
        this.user= {
            nombre: "",
            apellidos:"",
            edad:0
        }
    }
    recibirDatos(): void{
        this.mensaje= "Datos recibidos";
    }
    
}