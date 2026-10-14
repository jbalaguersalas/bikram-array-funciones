//1.
let arrayVacio = []

//2.
let arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

//3.
let arrayNumerosPares = [0, 2, 4, 6, 8]

//4.
let arrayBidimensional = [[0, 1, 2], ["a", "b", "c"]]

//5.
function suma(a, b) {
    return a + b
}

//6.
function potenciacion(a, b) {
    return a ** b
}

//7.
function separarPalabras(texto) {
    return texto.split(" ")
}

//8.
function repetirString(texto, veces) {
    let resultado = ""
    for (let i = 0; i < veces; i++) {
        resultado = resultado + texto
    }
    return resultado
}

//9.
function esPrimo(numero) {
    if (numero < 2) {
        return false
    }
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false
        }
    }
    return true
}

//10.
function ordenarArray(array) {
    return array.sort(function (a, b) {
        return a - b
    })
}

//11.
function obtenerPares(array) {
    let resultado = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            resultado.push(array[i])
        }
    }
    return resultado
}

//12.
function pintarArray(array) {
    return "[" + array.join(", ") + "]"
}

//13.
function arrayMapi(array, funcion) {
    let resultado = []
    for (let i = 0; i < array.length; i++) {
        resultado.push(funcion(array[i]))
    }
    return resultado
}

//14.
function eliminarDuplicados(array) {
    let resultado = []
    for (let i = 0; i < array.length; i++) {
        if (resultado.includes(array[i]) === false) {
            resultado.push(array[i])
        }
    }
    return resultado
}
//15.
let arrayNumerosNeg =[0,-1,-2,-3,-4,-5,-6,-7,-8,-9]
//16.
let holaMundo = ["Hola","Mundo"]
//17.
let loGuardoTodo = ["hola", "que", 23, 42.33, "tal"]
//18.
let arrayDeArrays = [[756,"nombre"],[225,"apellido"],[298,"direccion"]]
//19.
function multiplicacion (a,b) {
    return a * b
}

//20.
function division (a,b) {
    return a / b
}
//21.
function esPar (a) {
    return (a % 2 === 0)
}
//22.
function resta (a,b){
    return a-b
}
let arrayfunciones = [suma, resta ,multiplicacion]
//23.
function ordenarArray2 (array) {
    return array.sort(function (a,b) {
        return b - a
    })
}
//24.
function obtenerImpares (array){
    let resultado = []
    for (let i = 0; i< array.length; i++){
        if (array[i]% 2 !== 0)
            resultado.push(array[i])
}
return resultado
}
//25.
function sumarArray (array){
    let resultado = 0
    for (let i=0; i< array.length; i++){
        resultado = resultado + array[i]
}
return resultado
}
//26.
function multiplicarArray (array){
    let resultado = 1
    for (let i=0; i<array.length; i++){
        resultado = resultado * array[i]
    }
    return resultado
}