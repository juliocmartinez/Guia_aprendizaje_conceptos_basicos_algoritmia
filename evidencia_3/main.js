window.addEventListener('load', function () {
    /*Hacer un programa que sume 5 precios de camisas (en dólares)
     y que luego muestre el total de la venta en pesos. */
    
   

    let sumaPrecios = 0;
    let listPrecios;
    let dolarToCop = 4890
    for (let index = 1; index < 6; index++) {
        listPrecios = parseInt(prompt(`Precio camisa ${index}`))
        while (isNaN(listPrecios) || listPrecios == null || listPrecios == "") {
            listPrecios = parseInt(prompt(`Precio camisa ${index}`))

        }
        sumaPrecios += listPrecios

    }
    document.write(`<h2>El total de la venta es de: COP ${sumaPrecios * dolarToCop}</h2>`)











})
