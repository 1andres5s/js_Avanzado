class Animal{
    constructor (nombre, genero){
        this.nombre = nombre
        this.genero = genero
    }

    saludar (){
        let msj =`hola soy ${this.nombre}`
        return msj
    }
}

class gato extends Animal {
    constructor (nombre, genero,color){
        super(nombre,genero)
        this.color = color
        this.raza = null
    }

    saludar(){
        return super.saludar() + ` y soy de color ${this.color} y mi raza ${this.getRaza}`
    }
    get getRaza (){
        return this.raza;
    }
    set setRaza(raza){
        this.raza = raza;
    }
}

const miGato = new gato("michi", "macho", "cafe")
console.log(miGato)
console.log(miGato.saludar())
//sett
miGato.setRaza="bonito";
console.log(miGato.saludar())


const canela = new gato("michi2" , "macho", "amarillo")
console.log(canela)
console.log(canela.saludar())
canela.setRaza = "x"
console.log (canela.saludar())