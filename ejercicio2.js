const persona ={
    nombre: "andres",
    apellido : "salguero",
    edad:"19",
    hablar: function(){
        msj = `hola mi nombre es ${this.nombre}`
        return msj
    }

}

persona.hablar();