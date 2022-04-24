import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Actividad } from 'src/app/Modelo/Actividad';
import { ServicioService } from 'src/app/Servicios/servicio.service';
import { Empleado } from 'src/app/Modelo/Empleado';
@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  actividades: Actividad[] = [];
  actividades2: Actividad[] = [];
  empleados2: Empleado[] = [];
  selectedLevel: string ='';
  actividad :Actividad=new Actividad();
  constructor(private router:Router,private service:ServicioService) { }

  ngOnInit(): void {
    this.Editar();
    this.service.getEmpleados()
      .subscribe(data => {
        this.empleados2 = data;
      })
  }
  selected(event: any){  
    this.selectedLevel = event.target.value;    
  }
    Editar(){
      let id:any=localStorage.getItem("id");
      this.service.getActividadId(+id)
    .subscribe(data=>{
      this.actividad=data;
    });
  }
  Actualizar(actividad:Actividad){ 
    this.actividad.idempleado=Number(this.selectedLevel);
    this.service.updateActividad(actividad)
    .subscribe(data=>{
      this.actividad=data;
      alert("Se Actualizo con Exito");
      this.router.navigate(["listar"]);
    })
  }
}
