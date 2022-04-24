package com.actividad;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping({"/Empleados"})
public class ControladorEmp {
	@Autowired
	EmpleadoService service;
	@GetMapping
	public List<Empleado>listar(){
		return service.listar();
	}
}
