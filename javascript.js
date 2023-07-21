//arrays y objetos combinados


/* 
const arraysdeobjetos =[

{
    nombre:"Jonathan",
    edad:34,
    Deportefavorito:"Fubol",

},

{
    nombre:"Juan",
    edad:25,
    Deportefavorito:"natacion",
},

{
    nombre:"Damian",
    edad:"39",
    Deportefavorito:"bastquet",

},

];

for (let i = 0; i < arraysdeobjetos.length; i++) {
    console.log(arraysdeobjetos[i]);
    console.log("================");

    console.log("nombre:"+arraysdeobjetos[i].nombre);
    console.log("edad:"+arraysdeobjetos[i].edad);
    console.log("deportesfavoritos:"+arraysdeobjetos[i].Deportefavorito);
    
}

alert ("bienvenido!!"); */


let option
// Inicializacion del arreglo de personas
const arregloPersonas = [
  {
    nombre: 'Carlos',
    edad: '22',
    deporteFavorito: 'Futbol'
  }
]
// Menu
while (option !== '3') {
  // Opciones
  option = prompt('0. Calcular promedio de edades///1. Ver todas las personas /// 2. Agregar nueva persona/// 3. Salir')


  if (option === '0') {
    // Inicializamos las variables
    let promedio = 0
    let sum = 0
    // Recorremos el arreglo y obtenemos la edad
    arregloPersonas.forEach(({ edad }) => {
      // Convertimos a numero la edad, ya que cuando se guarda en la variable se guarda como string
      const toNum = Number(edad)
      // Sumamos todas las edades 
      sum = sum + toNum

    })
// Dividimos la suma de las edades entra la cantidad de elementos, para asi conhseguir el promedio
    promedio = sum / arregloPersonas.length
// Mostramos en pantalla
    alert(promedio)



  }

  if (option === '1') {
    // Recorremos el arreglo y mostramos en un alert todos los elementos
    arregloPersonas.forEach(({ nombre, edad, deporteFavorito }) => alert (`Nombre: ${nombre}, edad:${edad}, deporte favorit: ${deporteFavorito}`))

  }

  if (option === "2") {
    // Inicializamos el objeto con los nuevos campos
    const nuevaPersona = {
      nombre: '',
      edad: '',
      deporteFavorito: ''
    }
    // Llenamos los nuevos campos
    nuevaPersona.nombre = prompt('Ingresar el nombre')
    nuevaPersona.edad = prompt('Ingresar la edad')
    nuevaPersona.deporteFavorito = prompt('Ingresar deporte favorito')

    // Si los campos estan lleno se agregan al arreglo
    if (nuevaPersona.nombre && nuevaPersona.edad && nuevaPersona.deporteFavorito) {
      arregloPersonas.push(nuevaPersona)
    } else {
      alert('Por favor llenar todos los campos')
    }
  }

}