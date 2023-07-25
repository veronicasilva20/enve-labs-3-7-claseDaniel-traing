//hacer una funcion que reciba un objeto  e imprima por consola"$Nombre,$Apellido".

function imprimirNombreApellido(objeto) {
    if (objeto.hasOwnProperty('nombre') && objeto.hasOwnProperty('apellido')) {
      let { nombre, apellido } = objeto;
      console.log(`${nombre}, ${apellido}`);
    } else {
      console.log("El objeto no tiene las propiedades 'nombre' y 'apellido'.");
    }
  }
  
  // Ejemplo de uso:
  let persona = {
    nombre: 'Leonel',
    apellido: 'Messi',
    profesion: 'futbolista'
  };
  
  imprimirNombreApellido(persona);

  //hacer una funcion que reciba un objeto como parámetro y escriba la propiedad,,"color",como rojo.
  
  function agregarColor(objeto) {
    objeto.color = 'rojo';
  }
  
  // Ejemplo de uso:

  let carro = {
    marca: 'fiat',
    modelo: 'uno'
  };
  
  agregarColor(carro);
  console.log(carro);

  //definir la funcion presentarse()
  let persona1={
  nombre:"juan",
  edad:30,
  presnetarse:function(){
    return "Hola, mi nombre es Juan y tengo 30 años.";
  }
}
//prueba del ejercicio 1
  console.log(persona1.presnetarse());
  
 //definir funcion "sumarPesos"que recibe un array de objetos .
 //devuelva la suma de todos los pesos.

 function sumarPesos(autos) {
  let suma =0;
  for (let auto of autos){
    suma += auto.peso;
  }
  return suma;
 }

 //ejemplo

 let autos = [
  { marca:"fiat",modelo:"uno",peso:1200 },
  { marca:"toyota",modelo:"hilux",peso:2000 },
  { marca:"ford",modelo:"fiest",peso:1300 }
 ];

 console.log(sumarPesos(autos));

 //Crea un objeto llamado "alumno" con propiedades como nombre, edad y dirección. Luego, dentro del objeto "alumno", agrega otro objeto llamado "contacto" con propiedades como email y teléfono.

 let alumno ={
  nombre:"veronica",
  edad:40,
  direccion:"Almafuerte 678",
  contacto:{
    gmail:"vero@gmail.com",
    telefono:12347654,
  }
 }
 console.log(alumno);

 //Crea un objeto llamado "pelicula" con propiedades como título, director y año.  Luego, utiliza Object.values() para recorrer todos los valores del objeto y mostrarlas en la consola.

let pelicula = {
  titulo:"Mujer Bonita",
  director:"Garry Marshall",
  año:1990,
};

let valoresPelicula = Object.values(pelicula);

console.log(valoresPelicula);

//Crear un objeto llamado "rectangulo" con propiedades "base" y "altura". Agrega un método llamado "calcularArea" que devuelva el área del rectángulo. (Area x Altura)

let rectangulo = {
  base: 2,
  altura: 180,
  calcularArea: function() {
    return this.base * this.altura;
  }
};

console.log(rectangulo.calcularArea());

//Crear un objeto que se usa para guardar información sobre las calificaciones de un alumno. El curso contiene tres materias: Ingles, programación y HTML, y el objeto contendrá el nombre del alumno y la calificación en cada una de ellas. El script imprimirá el nombre y la media de sus calificaciones.

//Por ejemplo, guardar las calificaciones de un alumno de nombre Carla, Inglés: 9, programacion: 8, HTML: 7. Sacará Nota media de Carla 8

let alumna = {
  nombre: "Carla",
  ingles: 9,
  programacion: 8,
  HTML: 7,
  calcularMedia: function() {
    let totalCalificaciones = this.ingles + this.programacion + this.HTML;
    return totalCalificaciones / 3;
  }
};

let media = alumna.calcularMedia();
console.log(`Nota media de ${alumno.nombre}: ${media}`);

//Define un objeto, mediante una expresión, que tenga dos propiedades: precio y descuento y una función neto. El método calculará el precio con el descuento aplicado. 

let producto = {
  precio: 1500,
  descuento: 0.2, 
  neto: function() {
    return this.precio * (1 - this.descuento);
  }
};

console.log(producto.neto()); 

