window.addEventListener('load', function () {
    /**
     * 9. Dado N, escribir el producto desde 1 hasta N. 

     */
    let numero;
    while (isNaN(numero) || numero == "" || numero == null) {
        numero = parseInt(prompt("Producto del numero: "))
        if(!isNaN(numero)){
            this.document.write(`<h1>Producto de ${numero}</h1>`)
        }

        for (let index = 1; index <= numero; index++) {

            this.document.write(`${numero} x ${index} = ${numero * index}<br>`);

        }
    }






})