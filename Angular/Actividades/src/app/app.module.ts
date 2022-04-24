import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './Actividad/listar/listar.component';
import { NuevoComponent } from './Actividad/nuevo/nuevo.component';
import { EditarComponent } from './Actividad/editar/editar.component';
import {FormsModule} from '@angular/forms'
import{ServicioService} from '../app/Servicios/servicio.service'
import {HttpClientModule} from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    NuevoComponent,
    EditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
