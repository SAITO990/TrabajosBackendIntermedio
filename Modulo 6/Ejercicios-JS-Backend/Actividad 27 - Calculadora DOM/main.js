// script.ts
window.addEventListener('DOMContentLoaded', function () {
    var num1Input = document.getElementById('num1');
    var num2Input = document.getElementById('num2');
    var btnSuma = document.getElementById('btnSuma');
    var btnResta = document.getElementById('btnResta');
    var btnDivision = document.getElementById('btnDivision');
    var btnMultiplicacion = document.getElementById('btnMultiplicacion');
    var resultadoSpan = document.getElementById('resultado');
    if (resultadoSpan) {
        btnSuma.addEventListener('click', function () {
            var num1 = Number(num1Input.value);
            var num2 = Number(num2Input.value);
            var resultado = num1 + num2;
            resultadoSpan.textContent = resultado.toString();
        });
        btnResta.addEventListener('click', function () {
            var num1 = Number(num1Input.value);
            var num2 = Number(num2Input.value);
            var resultado = num1 - num2;
            resultadoSpan.textContent = resultado.toString();
        });
        btnDivision.addEventListener('click', function () {
            var num1 = Number(num1Input.value);
            var num2 = Number(num2Input.value);
            if (num2 === 0) {
                resultadoSpan.textContent = 'Error: División por cero';
            }
            else {
                var resultado = num1 / num2;
                resultadoSpan.textContent = resultado.toString();
            }
        });
        btnMultiplicacion.addEventListener('click', function () {
            var num1 = Number(num1Input.value);
            var num2 = Number(num2Input.value);
            var resultado = num1 * num2;
            resultadoSpan.textContent = resultado.toString();
        });
    }
});
