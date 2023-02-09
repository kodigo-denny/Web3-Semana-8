class Alumno{
    nombre
    apellido
    telefono
    direccion

    constructor(nombre, apellido, telefono, direccion){
        this.nombre = nombre
        this.apellido = apellido
        this.telefono = telefono
        this.direccion = direccion
        //console.log(nombre)
    }

    getNombreCompleto(){
        return this.nombre + " " + this.apellido
    }

    static nombreClase(){
        return "Clase es: Alumno " + this.nombre
    }
}