package com.actividad;

import java.util.List;
import org.springframework.data.repository.Repository;

public interface ActividadRepositorio extends Repository<Actividad, Integer>{
	
	List<Actividad>findAll();
	Actividad findById(int id);	
	Actividad save(Actividad a);
	void delete(Actividad a);
}
