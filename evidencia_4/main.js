window.addEventListener('load', function () {
/**Desarrollar un programa que permita almacenar las edades de un grupo de 10 personas en un vector de
enteros y luego determine la cantidad de personas que son menores de edad, mayores de edad, cuántos
adultos mayores, la edad más baja, la edad más alta y el promedio de edades ingresadas. Para el ejercicio
anterior suponga que un adulto mayor debe tener una edad igual o superior a 60. Debe validar para cada
ingreso que los valores estén en un rango entre 1 y 120 años. En caso de error deberá notificar y solicitar
un nuevo valor. 
 */

    let edades = {}
    let persona;
    let edad;
    let contador = 1;
    do {
        persona = prompt(`Id: ${contador} Ingrese su nombre: `)
        edad = parseInt(prompt("¿Cúantos años tienes?"))
        if (isNaN(edad) || edad < 0 || edad > 120) {
            alert("Ingrese una edad válida")
            while (edad < 121) {
                edad = parseInt(prompt("¿Cúantos años tienes?"))
                edades[persona] = edad;
                contador++
            }

        } else {
            contador++
            edades[persona] = edad
        }

    } while (contador <= 10);
    let edadesKeys = Object.values(edades)
    let menoresEdad = []
    let mayoresEdad = []
    let adultosMayoresEdad = []

    edadesKeys.map((element) => {
        if (element < 18) {
            menoresEdad.push(element);

        } else if (element >= 18 && element <= 59) {
            mayoresEdad.push(element);
        } else if (element >= 60 && element < 120) {
            adultosMayoresEdad.push(element);
        }


    })
    let suma;
    let indice;
    let sumaEdades = edadesKeys.reduce((element, acum, index) => {
        suma = element += acum;
        indice = index + 1;
        return suma
    })
    let promedioEdades = suma/indice

    document.write(`
    <h1>Datos personales</h1>
    <p>
    N° Personas Menores de edad: ${menoresEdad.length}<br>
    N° Personas Mayores de edad: ${mayoresEdad.length}<br>
    N° Personas Adultos Mayores: ${adultosMayoresEdad.length}<br>
    Edad más baja: ${Math.min(...edadesKeys)} <br>
    Edad más alta: ${Math.max(...edadesKeys)}<br>
    Promedio de edades : ${promedioEdades.toFixed()} años</p>
    `)


})