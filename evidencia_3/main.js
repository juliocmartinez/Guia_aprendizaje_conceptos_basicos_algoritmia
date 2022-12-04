window.addEventListener('load', function () {
    /**4. Un capital C está situado a un tipo de interés R 
     * anual 
     * ¿al término de cuántos años se doblará?  */

    function dineroDuplicado() {
        let capital,interesAnual

        do {
             capital = parseFloat(prompt("Capital de inversion"))
             interesAnual = parseFloat(prompt("Interes anual"))
        }
        while (isNaN(capital) || capital == null || capital == "" || isNaN(interesAnual) || interesAnual == null || interesAnual == "")

        let capitalDuplicado = capital * 2
        let dinero = (capital * interesAnual) / 100
        let contadorYears = 0

        while (capital < capitalDuplicado) {
            capital += dinero
            contadorYears++

        }
        document.write(`<h1>En ${contadorYears} años el capital  se duplicará a ${capital} Dolares <br> Tasa efectiva anual: ${interesAnual}%</h1>`)
    }

    dineroDuplicado()






})
