window.addEventListener('load', function () {
    /*
    Elaborar un algoritmo que permita ingresar 20 números y muestre todos
    los números menores e iguales a

    */


    

        let menores25 = []
        let listaNum;
        for (let index = 1; index < 6; index++) {
            listaNum = parseInt(prompt(`Digite numero ${index}`))
            while (isNaN(listaNum) || listaNum == null || listaNum == "") {
                listaNum = parseInt(prompt(`Digite numero ${index}`))

            }
            listaNum <= 25 ? menores25.push(listaNum) : console.log("Descartado ", listaNum);

        }
        document.write(`<h1>Numeros Menores que 25</h1><br><h2>${menores25}\n</h2>`)


        console.log(menores25)










})
