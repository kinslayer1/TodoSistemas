package com.actividad;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
@Service
@Repository
public class EmpleadoServiceImp implements EmpleadoService {
	@Autowired
    private EmpleadoRepositorio repositorio;
	@Override
	public List<Empleado> listar() {
		// TODO Auto-generated method stub
		return repositorio.findAll();
	}

}
