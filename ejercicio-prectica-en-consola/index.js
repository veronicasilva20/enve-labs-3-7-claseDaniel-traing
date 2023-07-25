//crear  dos matrices de nxn y sumar sus valores,los resultados sse deben almacenar en otra matriz.Los valores y longuitud,seran insertados por el usuario.Mostrar lsd mstrices originale y el resultado.

//2 + 3

// let matriz_1 = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]

// //console.log("     Matriz 1")
// //console.table(matriz_1)

// let matriz_2 = [
//     [10,11,12],
//     [13,14,15],
//     [16,17,18]
//     ]
//  //   console.log("     Matriz 2")
//    // console.table(matriz_2)

//     console.log("       resultado")
//     console.table(sumarMatricesNaN (matriz_1,matriz_2))

//     function sumarMatricesNaN(matriz1,matriz2){
//         let matrizResultante=[]

//         for(let i=0; i<matriz_1.length; i++){
//         matrizResultante[i]=[]

//             for (let j=0; j< matriz1[i].length; j++){
//                 //console.log(matriz1[i][j])
//                 //console.log(matriz2[i][j])
//                 let suma = matriz1[i][j] +matriz2[i][j]
//                 matrizResultante[i][j] = suma
//                 //i == 0 y j == 0
//                 // let suma = matriz1[0][0] + matriz2[0][0]
//             }
//         }
//         return matrizResultante
//     }
     




//  let num1 = [1,2,3,4];
//  let num2 =  [5,6,7,8];

//  let resultado = [1 +5,2 +6,3 +7,4 +8];

//  let n1= [[1,2],[3,4]];
//  let n2= [[5,6],[7,8]];

//  let resultado2= [[1+5,2+6],[3+7,4+8]];
//  let resultado3=[[n1[0][0]+ n2[0][0] , n1[0][1] + n2[0][1]],
//                [ n1[1][0]+ n2[1][0], n1[1][1]+n2[1][1]]];

//  console.table(n1)
//  console.table(n2)
//  console.table(resultado3)



 
// function numberFromUser(message){
// let input;
// do{
//     let input= parseInt( prompt(message) );
//     console.log(input);
// }while(isNaN(input))
// return input;
// }
// function createMatrix(num){
//     let res=[];
//     for (let i = 0; i < num; i++){
//         for (let j = 0; j < num; j++){
//             //let numero=parseInt (promt("ingresar un numero[i][j]:" + i + " "+ j ));
//             let numero= numberFromUser("ingresar un numero[i][j]:" + i + " " + j );
//             if(res[i] == undefined)res[i]=[]
//             res[i][j] = numero
//         }
//     }
//     return res;
// }
    
// function main(){
//     //A:pedimos la long al usuario
    
//  let num= numberFromUser("ingrese la long de la matriz");
//  //A:creamos una matrix con lalonguitud ingredsada

//  let matrix1= createMatrix(num);
//  let matrix2= createMatrix(num);
 
//  //A: mensajes y consolas);
// console.table(matrix1)
// console.table(matrix2)
// }
// main();

//variable de numeros enteros


let numerosEnteros1=[]
let numerosEnteros2=[]
let numerosEnteros3=[]



function  matriz3(columnas,filas) {
    let matriz=[]
    for (let i= 0; i < filas; i++ ){
        let fila =[];
        for(let j = 0; j < columnas; j++){
            filas.pus(0);
        }
        matriz.push(fila);
    }
    return matriz;
}

 

  Ejercicio 4 de matrices
 


 
        //Matriz cuadrada de 4x4
        int matriz[][] = new int[4][4];
 
        //Variables utilizadas
        boolean salir = false;
        int opcion, fila, columna;
 
        //Utilizado para indicar si hemos entrado en la 1ª opcion
        boolean rellenado = false;
 
        //Menu
        do {
 
            //Mensajes del menu
            System.out.println("Menu");
            System.out.println("1. Rellenar Matriz");
            System.out.println("2. Sumar fila");
            System.out.println("3. Sumar columna");
            System.out.println("4. Suma diagonal principal");
            System.out.println("5. Suma diagonal inversa");
            System.out.println("6. Media elementos");
            System.out.println("7. Salir");
            System.out.println("Elije una opcion");
            opcion = sn.nextInt();
 
            switch (opcion) {
                case 1:
 
                    rellenarMatriz(sn, matriz);
 
                    //Ahora si podemos acceder al resto de opciones
                    rellenado = true;
 
                    break;
                case 2:
 
                    if (rellenado) {
 
                        //Validamos la fila
                        do {
 
                            System.out.println("Elige una fila");
                            fila = sn.nextInt();
 
                        } while (!(fila >= 0 && fila < matriz.length));
 
                        System.out.println("La suma de los valores de la fila " + fila
                                + " es: " + sumaFila(matriz, fila));
 
                    } else {
                        System.out.println("Debes rellenar la matriz primero");
                    }
 
                    break;
                case 3:
 
                    if (rellenado) {
 
                        //Validamos la colunma
                        do {
 
                            System.out.println("Elige una fila");
                            columna = sn.nextInt();
 
                        } while (!(columna >= 0 && columna < matriz.length));
 
                        System.out.println("La suma de los valores de la columna " + columna
                                + " es: " + sumaColumna(matriz, columna));
 
                    } else {
                        System.out.println("Debes rellenar la matriz primero");
                    }
 
                    break;
                case 4:
 
                    if (rellenado) {
 
                        System.out.println("La suma de la diagonal principal es: " + sumaDiagonalPrinc(matriz));
 
                    } else {
                        System.out.println("Debes rellenar la matriz primero");
                    }
 
                    break;
                case 5:
 
                    if (rellenado) {
 
                        System.out.println("La suma de la diagonal inversa es: " + sumaDiagonalInversa(matriz));
 
                    } else {
                        System.out.println("Debes rellenar la matriz primero");
                    }
 
                    break;
                case 6:
 
                    if (rellenado) {
 
                        System.out.println("La media de los valores de la "
                                + "matriz es de " + media(matriz));
 
                    } else {
                        System.out.println("Debes rellenar la matriz primero");
                    }
 
                    break;
                case 7:
                    salir = true;
                    break;
                default:
                    System.out.println("Tienes que meter un valor entre 1 y 7");
 
            }
 
        } while (!salir);
 
        System.out.println("FIN");
 
    }
 
    /**
     * Rellena la matriz con valores insertados por el usuario
     *
     * @param sn
     * @param matriz
     */
    public static void rellenarMatriz(Scanner sn, int[][] matriz) {
 
        for (int i = 0; i < matriz.length; i++) {
            for (int j = 0; j < matriz[0].length; j++) {
 
                System.out.println("Escribe un numero en la posicion " + i + " " + j);
                matriz[i][j] = sn.nextInt();
 
            }
        }
 
    }
 
    /**
     * Suma los valores de una determinada fila
     *
     * @param matriz
     * @param fila
     * @return
     */
    public static int sumaFila(int[][] matriz, int fila) {
 
        int suma = 0;
 
        for (int j = 0; j < matriz.length; j++) {
            suma += matriz[fila][j];
        }
 
        return suma;
 
    }
 
    /**
     * Suma los valores de una determinada columna
     *
     * @param matriz
     * @param columna
     * @return
     */
    public static int sumaColumna(int[][] matriz, int columna) {
 
        int suma = 0;
 
        for (int i = 0; i < matriz.length; i++) {
            suma += matriz[i][columna];
        }
 
        return suma;
 
    }
 
    /**
     * Suma los valores de la diagonal principal de la matriz
     *
     * @param matriz
     * @return
     */
    public static int sumaDiagonalPrinc(int[][] matriz) {
 
        int suma = 0;
 
        for (int i = 0, j = 0; i < matriz.length; i++, j++) {
            suma += matriz[i][j];
        }
 
        return suma;
 
    }
 
    /**
     * Suma los valores de la diagonal inversa de la matriz
     *
     * @param matriz
     * @return
     */
    public static int sumaDiagonalInversa(int[][] matriz) {
 
        int suma = 0;
 
        for (int i = 0, j = 3; i < matriz.length; i++, j--) {
            suma += matriz[i][j];
        }
 
        return suma;
 
    }
 
    /**
     * Media de todos los elementos de la matriz
     *
     * @param matriz
     * @return
     */
    public static double media(int[][] matriz) {
 
        double suma = 0, media;
 
        for (int i = 0; i < matriz.length; i++) {
            for (int j = 0; j < matriz[0].length; j++) {
                suma += matriz[i][j];
            }
        }
        media = suma / (matriz.length * matriz.length);
        return media;
 
    }
 
}
