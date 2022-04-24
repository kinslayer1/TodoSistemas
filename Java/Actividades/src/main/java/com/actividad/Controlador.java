package com.actividad;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping({"/Actividad"})
public class Controlador {
	@Autowired
	ActividadService service;
	@GetMapping
	public List<Actividad>listar(){
		return service.listar();
	}
	@PostMapping
	public Actividad agregar(@RequestBody Actividad a){
        return service.add(a);
    }
	@GetMapping(path = {"/{id}"})
    public Actividad listarId(@PathVariable("id")int id){
        return service.listarId(id);
    }
    @PutMapping(path = {"/{id}"})
    public Actividad editar(@RequestBody Actividad p,@PathVariable("id") int id){
        p.setId(id);
        return service.edit(p);
    }
    @DeleteMapping(path = {"/{id}"})
    public Actividad delete(@PathVariable("id") int  id){
        return service.delete(id);
    }
}
