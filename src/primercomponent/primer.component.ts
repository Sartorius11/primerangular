import { Component} from'@angular/core';

@Component({
    //DEBEMOS INDICAR UN SELECTOR QUE SERA EL NOMBRE
    // DE ETIQUETA PARA LAS PAGINAS DEL PROYECTO
    selector:'primer-component',
    //EL TEMPLATE DE UN COMPONENT PUEDE SER EXTERNO 
    //O INTERNO
    templateUrl: "./primer.component.html",
    styleUrls:["./primer.component.css"]
   
})


//TODO COMPONENT DEBER SER EXPORTADO COMO CLSAE
// DICHO NOMBRE DE CLASE SERA EL DECLARADO POSTERIORMENTE
// DENTRO DE MODULE

export class PrimerComponent{
    //VAMOS A CREAR UNA SERIE DE PROPIEDADES
    public titulo: string;
    public descripcion: string;
    public anyo: number;

    constructor(){
        this.titulo="viernes de Angular";
        this.descripcion="alumno";
        this.anyo=2022;
    }

}