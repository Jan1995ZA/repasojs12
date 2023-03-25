/*

Datos: tiene el skope
variable de bloque: lo que este por dentro de {} "Variable local"
variable global
con var no existe variables de bloque
Memoria: la memoria se llena de datos

*/

import {productos} from "./baseDatos.js"


let fila = document.getElementById("fila")

//recorrer arreglo
productos.forEach(function(producto){

    let columna = document.createElement("div")
    columna.classList.add("col")

    let targeta = document.createElement("div")
    targeta.classList.add("card","shadow")

    let foto = document.createElement("img")
    foto.classList.add("img-fluid")
    foto.src = producto.foto

//padres e hijos 
targeta.appendChild(foto)
columna.appendChild(targeta)
fila.appendChild(columna)

})
