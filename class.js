class Animal {
    constructor(nombre, genero){
        this.nombre = nombre;
        this.genero = genero;
    }
    saludar(){
        let msj = `hola mi nombre es ${this.nombre}`;
        return msj;
    }
}

const perro = new Animal("dogo", "macho")
console.log(perro.saludar())
console.log(perro)

