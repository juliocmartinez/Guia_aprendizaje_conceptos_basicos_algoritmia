window.addEventListener('load', function () {
    /*Hacer un programa que registre el consumo realizado 
    por los clientes de un restaurante, si el consumo de

cada cliente excede 50000 se hará un descuento del 20%. Se debe mostrar el pago de cada cliente y el total
de todos los pagos. */

    let numClientes = parseInt(prompt("Clientes para registrar"))
    let arrayClientes = []
    let container = document.querySelector("#container")
    let ul = document.createElement("ul")


    for (let i = 1; i <= numClientes; i++) {
        let clienteName = (prompt("Nombre cliente " + i))
        let clienteConsumo = parseFloat(prompt("Ingrese consumo cliente " + i))
        while (isNaN(clienteConsumo) || clienteConsumo == null || clienteConsumo == "") {
            alert("Valor incorrecto, intente nuevamente")
            clienteConsumo = parseFloat(prompt("Ingrese consumo cliente " + i))
        }

        arrayClientes.push({ cliente: clienteName, consumoNeto: clienteConsumo })
    }
    arrayClientes.map((index) => {
        // (index.consumo>=50000) ? console.log(index.consumo*=0.8) : console.log("No aplicó descuento");;
        if (index.consumoNeto >= 50000) {
            index.consumoDesc = index.consumoNeto * 0.2
            index.consumoTotal = index.consumoNeto - index.consumoDesc

            // console.log(index);
        } else {
            index.consumoDesc = 0
            index.consumoTotal = index.consumoNeto
            // console.log(index);

        }
        let sumaTotal = 0
        sumaTotal += index.consumoTotal
        let li = document.createElement('li');
        li.append(`Cliente: ${index.cliente} -- Consumo Neto: ${index.consumoNeto} -- Descuento: ${index.consumoDesc} -- Total a Pagar: ${index.consumoTotal}`)
        ul.append(li)

        container.append(ul)

    })

    let total = arrayClientes.reduce((acumulador, actual) =>
        acumulador + actual.consumoTotal, 0

    )
    let suma = document.createElement('h2')
    suma.append("Total: COP ", total)
    container.append(ul)
    container.append(suma)


})