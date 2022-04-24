package com.actividad;

import java.util.List;

import org.springframework.data.repository.Repository;

public interface EmpleadoRepositorio extends Repository<Empleado, Integer> {
	List<Empleado>findAll();
}
