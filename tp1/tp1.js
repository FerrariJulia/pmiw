//Julia Ferrari Comisión 2
//https://youtu.be/0ZpbppKS2GY

let ImagenOpticaMedio; //declaración de variable let
let cant;
let tam;
let tamDos;
let rot;

function preload () {
  ImagenOpticaMedio = loadImage ('data/ImagenOpticaMedio.jpg'); //llamar antes de utilizarla, especificar data
}

function setup() { // ya no Void
  createCanvas (800, 400); // ya no Size
  cant = 4;
  tam = (width/2)/ cant;
  tamDos = tam / sqrt(2);
  rot = radians(45);
}

function draw() {
  background (255);
  image(ImagenOpticaMedio, 0, 0, 400, 400);
  CicloForRect(4, (width/2)/ cant, tam / sqrt(2), rot); // uso de parámetros
}

function keyPressed() {
  let keyValor = MovimientoReinicio(key);
  if (keyValor == 1) {
    rot = radians(frameCount);
  } else if (keyValor == 2) {
    mouseX = 0;
    rot = radians(45);
  }
  print ("keyValor: " + keyValor); // ya no println
}
