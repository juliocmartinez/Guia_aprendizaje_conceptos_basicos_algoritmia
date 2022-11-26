window.addEventListener('load', function () {
    /*Desarrollar un programa que permita calcular el area
    o perimetro de algunas figuras planas
    1. Triangulo
    2. Rectángulo
    3. Cuadrado
    4. Circulo*/
    let base, altura;
    do {
        base = parseInt(prompt("Ingrese base"))
        altura = parseInt(prompt("Ingrese altura"))

    } while (base <= 0 || isNaN(base) || altura <= 0 || isNaN(altura));

    function calcularAreaTriangulo(b, h) {
        let area = (b*h)/2
        document.write(`El area del triangulo es: ${area} U²`)
    }
    calcularAreaTriangulo(base, altura)

})