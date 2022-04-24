import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Actividad } from 'src/app/Modelo/Actividad';
import { ServicioService } from 'src/app/Servicios/servicio.service';
import { Empleado } from 'src/app/Modelo/Empleado';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {
  actividad:Actividad = new Actividad();
  empleados2: Empleado[] = [];
  constructor(private router:Router,private service:ServicioService) { }
  selectedLevel: string ='';
  ngOnInit(): void {
    this.service.getEmpleados()
      .subscribe(data => {
        this.empleados2 = data;
      })
  }
  selected(event: any){  
    this.selectedLevel = event.target.value;    
  }
  Guardar(actividad:Actividad){
    this.actividad.idempleado=Number(this.selectedLevel);
    this.service.crearActividad(this.actividad)
    .subscribe(data=>{
      alert("Se Agrego con Exito...!!!");
      this.router.navigate(["listar"]);
    })
  }
}
