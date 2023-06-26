class Figura {
    constructor(color) {
      this.color = color;
    }
  
    saludar() {
      console.log(`Hola! Soy una figura y mi color es ${this.color}`);
    }
  }
  
  let colorRojo = new Figura("Rojo");
  console.log(colorRojo);
  colorRojo.saludar();
  
  
  class Cuadrado extends Figura {
    constructor(color, alto, ancho) {
      super(color);
      this.alto = alto;
      this.ancho = ancho;
    }
  
    saludar() {
      console.log(`Hola! Soy un cuadrado. Mi color es ${this.color} y mis medidas son ${this.alto} x ${this.ancho}`);
    }
  }
  
  let colorAzul = new Cuadrado("Azul", 25, 65);
  console.log(colorAzul);
  colorAzul.saludar();
  
  
  class Circulo extends Figura {
    constructor(color, radio) {
      super(color);
      this.radio = radio;
    }
  
    saludar() {
      console.log(`Hola! Soy un círculo. Mi color es ${this.color} y mi radio es ${this.radio}`);
    }
  }
  
  let colorAmarillo = new Circulo("Amarillo", 56);
  console.log(colorAmarillo);
  colorAmarillo.saludar();