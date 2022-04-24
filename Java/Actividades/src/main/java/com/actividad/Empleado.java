package com.actividad;

import javax.persistence.*;

@Entity
@Table(name ="empleado")
public class Empleado {
	@Id
    @Column
    private int idempleado;
    @Column
    private String nombre;
    @Column
    private String cargo
    ;
    public int getIdempleado() {
        return idempleado;
    }

    public void setIdempleado(int idempleado) {
        this.idempleado = idempleado;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    } 
    
    public String getCargo() {
        return cargo;
    }

    public void setCargo(String cargo) {
        this.cargo = cargo;
    }
}
