var calculadora = /** @class */ (function () {
    function calculadora() {
    }
    calculadora.prototype.sumar = function (a, b) {
        return a + b;
    };
    calculadora.prototype.restar = function (a, b) {
        return a - b;
    };
    calculadora.prototype.multiplicar = function (a, b) {
        return a * b;
    };
    calculadora.prototype.divir = function (a, b) {
        return a / b;
    };
    return calculadora;
}());
var calc = new calculadora;
console.log(calc.sumar(3, 4));
console.log(calc.restar(23, 50));
console.log(calc.multiplicar(577, 89));
console.log(calc.divir(284, 78));
