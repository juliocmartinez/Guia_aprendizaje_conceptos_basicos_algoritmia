window.addEventListener('load', function () {
    /**
     * 10. Realizar un algoritmo que muestre por pantalla la tabla de multiplicar
     *  decreciente de cualquier número, ingresado entre el 1 y el 10. 

     */
    let numero;
    while (isNaN(numero) || numero == "" || numero == null || numero>10 || numero<=0) {
        numero = parseInt(prompt("Producto del numero: "))
        if(!isNaN(numero) && numero!=0  && numero>=1 && numero<=10){
            document.write(`<h1>Producto de ${numero}</h1>`)
            for (let index = numero; index >=1; index--) {

                document.write(`${numero} x ${index} = ${numero * index}<br>`);
            }
        }

        
    }






})