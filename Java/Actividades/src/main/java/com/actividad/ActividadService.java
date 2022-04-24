package com.actividad;

import java.util.List;

public interface ActividadService {
	List<Actividad> listar();
    Actividad listarId(int id);
    Actividad add(Actividad a);
    Actividad edit(Actividad a);
    Actividad delete(int id);
}

