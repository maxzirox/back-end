"use strict"

class Usuario{
    constructor(nombre, apellido, libros, mascotas){
        this._nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    getFullName(){
        return console.log(`${this.nombre} ${this.apellido}`);
    }
    
    addMascota(nombre){
        this.mascotas.push(nombre);
    }
    countMascotas(){
        let cont = this.mascotas.length;
        return console.log("tiene: ",cont, "mascotas")
    }
    addBooks(nombre, autor){
        this.libros.push({nombre: nombre, autor: autor})
    }
    getBooksName(){
        //CON MAP
        this.libros.map((libro)=>{
            return(
                console.log("nombre del libro: ", libro.nombre)
            )
        })
        //CON FOREACH DECLARAMOS ARRAY.FOREACH(ITEMARRAY FFLECHA Y EJECUCION)  
        this.libros.forEach(libro => {
            console.log("nombre del libro: ", libro.nombre)
        });
        
    }
}
let obj = new Usuario("Fabian", "Castillo", [{nombre: "papelucho", autor: "marcela paz"}], ["kakaroto"]);
obj.nombre = "Maxi";// setNombre
//console.log("nombre: ", obj.nombre) getNombre
obj.addMascota('perro');
obj.addMascota('gato');
obj.getFullName();
obj.countMascotas();
obj.addBooks("dragon ball", "akiro")
obj.getBooksName();
