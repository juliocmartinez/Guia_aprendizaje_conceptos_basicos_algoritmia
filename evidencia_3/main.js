window.addEventListener('load', function () {
    /**
     * 2. Realizar la conversión de una temperatura dada en grados Centígrados
     *  a grados Fahrenheit (Fórmula: F = (9/5) C + 32). 
     */

    let boton = document.querySelector("#boton")


    boton.addEventListener('click', (temperatura) => {
        temperatura = prompt("ingrese temperatura: ")

        if (temperatura > 0 && temperatura < Infinity) {
            let formula = ((9 / 5) * temperatura + 32)
            document.write(`<h1>Conversión de °C a °F</h1>
            ${temperatura}°C equivalen a ${formula}°F`)
            
        }else{
            this.document.write(`Digitos invalidos`)
        }


    })






})
