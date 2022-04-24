package com.actividad;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

@Service
@Repository
public class ActividadServiceImp implements ActividadService {
	@Autowired
    private ActividadRepositorio repositorio;

	@Override
	public List<Actividad> listar() {
		// TODO Auto-generated method stub
		return repositorio.findAll();
	}

	@Override
	public Actividad listarId(int id) {
		// TODO Auto-generated method stub
		return repositorio.findById(id);
	}

	@Override
	public Actividad add(Actividad a) {
		// TODO Auto-generated method stub
		return repositorio.save(a);
	}

	@Override
	public Actividad edit(Actividad a) {
		// TODO Auto-generated method stub
		return repositorio.save(a);
	}

	@Override
	public Actividad delete(int id) {
		// TODO Auto-generated method stub
		Actividad p=repositorio.findById(id);
        if(p!=null){
            repositorio.delete(p);
        }
       return p;
	}


    }
