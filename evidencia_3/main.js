window.addEventListener('load', function () {
    /**
     *  Escribir el algoritmo que permite calcular la nota correspondiente al primer parcial de “análisis” para un 
 estudiante cualquiera. Se debe considerar que hay dos talleres y un quiz, que en conjunto valen un 30% de 
 la nota y el resto (70%) corresponde a la nota del examen parcial. 
     */

    let notaTaller1, notaTaller2, notaQuiz, examenParcial, notaFinal;

    function calcularNotaFinal() {
        notaTaller1 = parseFloat(prompt("Nota taller 1: "))
        notaTaller2 = parseFloat(prompt("Nota taller 2: "))
        notaQuiz = parseFloat(prompt("Nota quiz: "))
        examenParcial = parseFloat(prompt("Nota parcial: "))

        while (isNaN(notaTaller1) || notaTaller1 == null || notaTaller1 == "" || notaTaller1<=0 || notaTaller1>=5.01) {
            notaTaller1 =parseFloat(prompt("Ingrese nota taller 1 valida: "))

        } while (isNaN(notaTaller2) || notaTaller2 == null || notaTaller2 == "" || notaTaller2<=0 || notaTaller2>=5.01) {
            notaTaller2 = parseFloat(prompt("Ingrese nota taller 2 valida: "))

        } while (isNaN(notaQuiz) || notaQuiz == null || notaQuiz == "" || notaQuiz<=0 || notaQuiz>=5.01) {
            notaQuiz = parseFloat(prompt("Ingrese nota quiz valida: "))

        } while (isNaN(examenParcial) || examenParcial == null || examenParcial == "" || examenParcial<=0 || examenParcial>=5.01) {
            examenParcial = parseFloat(prompt("Ingrese nota parcial valida: "))

        }
        notaFinal = (notaTaller1*0.1 + notaTaller2*0.1 + notaQuiz*0.1 + examenParcial*0.7)

document.write(`<h1>Nota final: ${notaFinal}</h1>`)
    }

    calcularNotaFinal()





})
