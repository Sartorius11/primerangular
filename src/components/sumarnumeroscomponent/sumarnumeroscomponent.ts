import { Component, ElementRef, ViewChild } from "@angular/core";

@Component({
    selector:"sumar-numeros",
    templateUrl:"./sumarnumeroscomponent.html",
   
})

export class SumarNumeros{
        @ViewChild("cajanumero1") cajaNumero1!:ElementRef;
        @ViewChild("cajanumero2")cajaNumero2!: ElementRef;

        public suma!: number;

        // EN ANGULAR , TODOS LOS OBJETOS DEBEN SER INSTANCIADO
        sumarNumeros(): void{
            var num1 = this.cajaNumero1.nativeElement.value;
            var num2= this.cajaNumero2.nativeElement.value;
            this.suma=parseInt(num1)+ parseInt(num2)
        }
    
       
}
