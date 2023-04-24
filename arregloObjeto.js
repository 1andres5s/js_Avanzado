/*Destructuración:
Asignación de los elementos de un arreglo u objeto a una variable*/

/*Sin destructuracion asignar los elementos de un arreglo u objeto a una variable se podria hacer de la siguiente manera*/

console.log("--------------Sin destructuración-------------------")

const numeros=[1,2,3]
let uno=numeros[0],
dos=numeros[1],
tres=numeros[2]

console.log(uno,dos,tres)

//Con destrucrturacion

console.log("--------------Con destructuración-------------------")

const [one, two, three]=numeros; //En una sola linea de codigo se asignan los valores de numero a las variables one, two y three
console.log(one,two,three)

//Con los objetos tambien es posible hacer destructuración siguiendo la misma lógica

const persona={
    nombre: "Ana",
    apellido: "Santos",
    edad: 23
}

const {nombre, apellido, edad}=persona; //deben tener el mismo nombre del la llave del objeto

console.log(nombre,apellido,edad)

//Según lo anterior haga un código que tenga un arreglo con los días de la semana y los asigne a variables con la siguiente nomenclatura diaUno, …, diaSiete, imprima las variables por consola
const dias = [1,2,3,4,5]

let [diau,diad,diat,diac,diaC]= dias
console.log(diau,diad,diat,diac,diaC)