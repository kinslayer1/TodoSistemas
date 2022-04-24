import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Actividad } from 'src/app/Modelo/Actividad';
import { ServicioService } from '../../Servicios/servicio.service'
@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  actividades: Actividad[] = [];

  constructor(private service: ServicioService, private router: Router) { }

  ngOnInit(): void {
    this.service.getActividad()
      .subscribe(data => {
        this.actividades = data;
      })
  }
  Editar(actividad:Actividad):void{
    let idA:any=actividad.id;
    localStorage.setItem("id",idA.toString());
    this.router.navigate(["editar"]);
  }
  Delete(actividad:Actividad){
    this.service.deleteActividad(actividad)
    .subscribe(data=>{
      this.actividades=this.actividades.filter(p=>p!==actividad);
      alert("Actividad eliminada...");
    })
  }
}
