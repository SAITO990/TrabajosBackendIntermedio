// script.ts
window.addEventListener('DOMContentLoaded', () => {
    const num1Input = document.getElementById('num1') as HTMLInputElement;
    const num2Input = document.getElementById('num2') as HTMLInputElement;
    const btnSuma = document.getElementById('btnSuma') as HTMLButtonElement;
    const btnResta = document.getElementById('btnResta') as HTMLButtonElement;
    const btnDivision = document.getElementById('btnDivision') as HTMLButtonElement;
    const btnMultiplicacion = document.getElementById('btnMultiplicacion') as HTMLButtonElement;
    const resultadoSpan = document.getElementById('resultado');
  
    if (resultadoSpan) {
      btnSuma.addEventListener('click', () => {
        const num1 = Number(num1Input.value);
        const num2 = Number(num2Input.value);
        const resultado = num1 + num2;
        resultadoSpan.textContent = resultado.toString();
      });
  
      btnResta.addEventListener('click', () => {
        const num1 = Number(num1Input.value);
        const num2 = Number(num2Input.value);
        const resultado = num1 - num2;
        resultadoSpan.textContent = resultado.toString();
      });
  
      btnDivision.addEventListener('click', () => {
        const num1 = Number(num1Input.value);
        const num2 = Number(num2Input.value);
        if (num2 === 0) {
          resultadoSpan.textContent = 'Error: División por cero';
        } else {
          const resultado = num1 / num2;
          resultadoSpan.textContent = resultado.toString();
        }
      });
  
      btnMultiplicacion.addEventListener('click', () => {
        const num1 = Number(num1Input.value);
        const num2 = Number(num2Input.value);
        const resultado = num1 * num2;
        resultadoSpan.textContent = resultado.toString();
      });
    }
  });