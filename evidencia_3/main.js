window.addEventListener('load', function () {
    /*Diseñar un algoritmo que permita ingresar la hora,
     minutos y segundos, y que calcule la hora en el siguiente
     segundo ("0<= H <=23", "0<= M <=59" "0<= S<=59"). */

    let h = parseInt(prompt("Ingrese la hora [0-23]"))
    let m = parseInt(prompt("Ingrese los minutos [0-59]"))
    let s = parseInt(prompt("Ingrese los segundos [0-59]"))

    if ((h >= 0 && h <= 23) && (m >= 0 && m <= 59) && (s >= 0 && s <= 59)) {
        s += 1
        if (s == 60) {
            s = 0
            m += 1
            if (m == 60) {
                m = 0
                h += 1
                if (h == 24) {
                    h = 0
                }
            }
        }
    }
    document.write(`<h2>La hora es</h2><h3>hh:${h} mm:${m} ss:${s}</h3>`)




})