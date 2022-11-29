window.addEventListener('load', function () {
    /**. Escriba un programa que lea dos vectores de números enteros ordenados ascendentemente y luego
    produzca la lista ordenada de la mezcla de los dos, por ejemplo, si los dos arreglos tienen los números 1
    3 6 9 17 y 2 4 10 17, respectivamente, la lista de números en la pantalla debe ser 1 2 3 4 6 9 10 17 17.
    Limite los vectores a un tamaño de 5 y debe validar en cada ingreso que realmente se estén ingresando
    los datos de forma ascendente. 
     */

    let vectNum1 = [];
    let vectNum2 = [];
    let contador = 1;
    let arreglo1;
    let arreglo2;

    function llenarArreglos() {
        do {
            arreglo1 = parseInt(prompt(`Array 1: Ingrese element ${contador}`));
            arreglo2 = parseInt(prompt(`Array 2: Ingrese element ${contador}`));

            if (isNaN(arreglo1) || arreglo1 < 1 || isNaN(arreglo2) || arreglo2 < 1) {
                arreglo1 = parseInt(prompt(`Array 1: Ingrese element ${contador}`));
                arreglo2 = parseInt(prompt(`Array 2: Ingrese element ${contador}`));
                contador

            }else{
                vectNum1.push(arreglo1)
                vectNum2.push(arreglo2)
                contador++

            }
        } while (contador<6);

        let vectMezclado = vectNum1.concat(vectNum2);

        console.log(vectMezclado.sort((a, b) => { return a - b }));


    }
  
    llenarArreglos()

})