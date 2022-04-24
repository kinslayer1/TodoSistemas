import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actividad } from '../Modelo/Actividad';
import { Empleado } from '../Modelo/Empleado';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  
  constructor(private http:HttpClient) { }
  Url='http://localhost:8080/Actividad';
  UrlEmp='http://localhost:8080/Empleados';

  getEmpleados(){
    return this.http.get<Empleado[]>(this.UrlEmp);
  }
  getActividad(){
    return this.http.get<Actividad[]>(this.Url);
  }
  crearActividad(actividad:Actividad){
    return this.http.post<Actividad>(this.Url,actividad);
  }
  getActividadId(id:number){    
    return this.http.get<Actividad>(this.Url+"/"+id);    
  }
  updateActividad(actividad:Actividad){
    return this.http.put<Actividad>(this.Url+"/"+actividad.id,actividad);
  }
  deleteActividad(actividad:Actividad){
    return this.http.delete<Actividad>(this.Url+"/"+actividad.id);
  }
  }

