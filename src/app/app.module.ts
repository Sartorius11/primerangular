import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrimerComponent } from 'src/primercomponent/primer.component';
import { HooksAngular } from 'src/components/hooksangular/hooksangular.componet';
import { DeportesComponent } from 'src/components/deportes/deportes.component';

import { FormsModule } from '@angular/forms';
import { FormularioBindingComponent } from 'src/components/formulariobinding/fomulariobinding';

import { SumarNumeros } from 'src/components/sumarnumeroscomponent/sumarnumeroscomponent';

@NgModule({
  declarations: [
    AppComponent,
    PrimerComponent,
    HooksAngular,
    DeportesComponent,
    FormularioBindingComponent,
    SumarNumeros
    
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
