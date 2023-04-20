//ejemplo de closure

var x = 10;

function foo() {
  var y = 20;
  function bar() {
    var z = 15;
    var output = x + y + z;
    return output;
  }
  return bar();
}

console.log(foo());

//objetos-clases

let persona = {
  nombre: "andres",
  apellido: "salguero",
  tel: 123,

  datos: function () {
    return `persona de nombre ${this.nombre} y apellido ${this.apellido} con su celular ${this.tel}`;
  },
};

console.log(persona.datos());

console.log(persona["nombre"]);
console.log(persona.apellido);
