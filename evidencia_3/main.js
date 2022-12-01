window.addEventListener('load', function () {
    /**
     * 1. Un corredor de maratón (distancia 42,195 Km) ha recorrido la carrera en 2 horas 25 minutos.
     Se desea un algoritmo que calcule el tiempo medio en minutos por kilómetro.
     */

    let boton = document.querySelector("#boton")

    boton.addEventListener("click", () => {

        let distancia, horas, minutos, horasToMinutos
        do {
            distancia = 42.195
            horas = parseInt(prompt("Ingrese el numero de horas"))
            minutos = parseInt(prompt("Ingrese los minutos"))
            horasToMinutos = (horas * 60) + minutos;

            let tiempoMedio = distancia / horasToMinutos

            if (isNaN(horas) || isNaN(minutos) || horas<=0 || minutos<=0) {
                alert("Ingrese solo números")
            } else {
                console.log(`EL tiempo medio de la maraton corrida en ${horasToMinutos} minutos fue de ${tiempoMedio} km/min`);
            }
        }
        while (isNaN(horas) || isNaN(minutos))

    })


})
