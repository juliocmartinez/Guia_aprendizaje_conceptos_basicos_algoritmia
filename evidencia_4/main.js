window.addEventListener('load', function () {
    /**. Una emisora con presencia en diferentes ciudades desea conocer el rating de canciones y cantantes más
escuchados (sonados) en este semestre del año. Por lo tanto, se ha pedido a estudiantes del SENA del
programa de tecnólogo en análisis y desarrollo de software desarrollar una solución que permita conocer
la respuesta de 6 personas con relación a sus gustos musicales. Con fines administrativos y realizar una
rifa entre las personas encuestadas, la emisora desea poder registrar de las personas entrevistadas su
nombre, número de identificación (cédula), fecha de nacimiento, correo electrónico, ciudad de residencia,
ciudad de origen. Además, se deberá poder almacenar el artista y título de hasta 3 canciones favoritas en
cada una de las personas que se ingrese, teniendo en cuenta lo anterior, se sugiere que la solución deberá
mostrar un menú que permite las siguientes opciones:
a. Agregar una persona con los datos que se listan anteriormente.
b. Mostrar la información personal de una persona particular por medio de su posición en el vector.

Pasos:
1. crear array con datos para el registro de 6 personas
2. crear panel de opciones con switch case para mostrar las dos opciones
3. mostrar por pantalla la informacion de un usuario digitado su posicion

     */

    let registroPersonas = []
    let contador = 1
    let opcion = parseInt(prompt("Digite 1 para registro de personas o 2 para mostrar por pantalla la informacion de una persona"))

    function registrarDatos() {
        while (contador < 7) {
            let nombre = prompt("Ingrese su nombre: ");
            let identificacion = prompt("Ingrese su identificación: ");
            let fechNac = prompt("Ingrese su fecha de nacimiento [dd/mm/aaaa]: ");
            let email = prompt("Ingrese su correo electrónico: ");
            let residencia = prompt("Ciudad de residencia: ");
            let origen = prompt("Ciudad de origen: ");
            let canFav1 = prompt("Favorita 1: ");
            let canFav2 = prompt("Favorita 2: ");
            let canFav3 = prompt("Favorita 3: ");

            registroPersonas.push({ nombre, identificacion, fechNac, email, residencia, origen, canFav1, canFav2, canFav3 })
            localStorage.setItem('register', JSON.stringify(registroPersonas))
            contador++

        }

    }



    function mostrarDatos(indice) {

        let getData = JSON.parse(localStorage.getItem('register'));
        getData.find((array, index) => {

            if (index == indice) {
                document.write(`<p>
                <h1>Información del id: ${indice}</h1>
                <ul>
                <li><strong>Nombre:</strong> ${array.nombre}</li>
                <li><strong>Identificación:</strong>${array.identificacion}</li>
                <li><strong>FechaNac:</strong> ${array.email}</li>
                <li><strong>residencia:</strong> ${array.residencia}</li>
                <li><strong>origen:</strong> ${array.origen}</li>
                <li><strong>canFav1:</strong> ${array.canFav1}</li>
                <li><strong>canFav2:</strong> ${array.canFav2}</li>
                <li><strong>canFav3:</strong> ${array.canFav3}</li>


                </ul>
                
                
                

                </p>`)
            } else if (indice >= getData.length) {

                console.log("Indice no existe");
            }
            else if(isNaN(indice)) {
                console.log("Ingrese datos numericos");
            }

        })
    }

    switch (opcion) {
        case 1:
            registrarDatos()


            break;
        case 2:
            let index = parseInt(prompt("ingrese un indice"));

            mostrarDatos(index)





        default:
            break;
    }




})
