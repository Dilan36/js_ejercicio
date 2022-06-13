function saludo(){
    alert ("Hola mundo esto es JS")
    
}

function suma(){
 var A;
var B;
var Suma;

alert("Este sistema realiza una suma con 2 valores ingresados por el ususario");

A = parseInt(prompt("Por favor ingrese el primer valor"));
B = parseInt(prompt("Por favor ingrese el segundo valor"));

Suma = A + B;

alert("El resultado de la suma es: " + Suma)
}


function operaciones(){
var A;
var B;
var Suma;
var Resta;
var Multiplicacion;
var Divsion;

alert("Este sistema realiza una suma, resta, multiplicacion y division con 2 valores ingresados por el ususario");

A = parseInt(prompt("Por favor ingrese el primer valor"));
B = parseInt(prompt("Por favor ingrese el segundo valor"));

Suma = A + B;
Resta = A - B;
Multiplicacion = A * B;
Divsion = A / B;

alert("El resultado de la suma es: " + Suma);
alert("El resultado de la resta es: " + Resta);
alert("El resultado de la multiplicacion es: " + Multiplicacion);
alert("El resultado de la division es: " + Divsion);
}



function Nmayor(){
    var A;
    var B;
  
    
    alert("Este sistema compara 2 valores ingresados por el usuario para saber cual es mayor");
    
    A = parseInt(prompt("Por favor ingrese el primer valor"));
    B = parseInt(prompt("Por favor ingrese el segundo valor"));
    
 if (A >= B) {
     alert("El numero mayor es : " + A);
 } else {
    alert("El numero mayor es : " + B);   
 }
  }



  function Nmenor(){
    var A;
    var B;
    var C;
    
    alert("Este sistema compara 3 valores ingresados por el usuario para saber cual es menor");
    
    A = parseInt(prompt("Por favor ingrese el primer valor"));
    B = parseInt(prompt("Por favor ingrese el segundo valor"));
    C = parseInt(prompt("Por favor ingrese el tercer valor"));
    
    if (A < B){
        alert("El numero menor es : " + A);
      } else if (B < C) {
        alert("El numero menor es : " + B)
      } else {
        alert("El numero menor es : " + C);  
      }
  }

 
function parinpar(){
    var A;
    
    alert("Este sistema determina su un numero es par o inpar");

    A = parseInt(prompt("Por favor ingrese el numero"));

    if ((A % 2) == 0) {
      alert("El numero es par " + A);
    } else {
      alert("El numero es impar " + A);
    }

}


 function Ncuadrado(){
   var A;
   var B;

   alert("Este sistema determina el cuadrado de un numero digitado por el usuario");

   A = parseInt(prompt("Por favor digite el Numero"));

   B = A * A;

   alert("El numero elevado al cuadrado quedaria asi : " + B);
 }



function AreaT(){
  var A;
  var B;
  var H; 

  alert("Este sistema determinar el area de un triangulo con los valores que ingrese el usuario");

  B = parseInt(prompt("Por favor digite la base del triangulo : "));
  H = parseInt(prompt("Por favor digite la altura : "));

  A = (B * H) / 2;

  alert("El area del triangulo es de :" + A);
}


function metros() {
  var M;
  var C;

  alert("Este sistema convierte metros a centimetros");

  M = parseInt(prompt("Por favor digite el valor en metros"));

  C = M * 100;

  alert ("La conversion a centimetros es de : " + C);

}



function edad() {
  var A;
  var B;

  alert("Este sistema determina el año de nacimiento con su edad " );

  A = parseInt(prompt("Por favor dijite su edad "))
  
  B = 2022 - A

  alert("Su año de nacimiento es : " + B);
}

function Inversion(){
  var Tm;
  var D;
  var T;
  var IT;
  var ITT;

  alert("Este sistema determina la ganancia anual por una inversion");

  D = parseInt(prompt("Digite la cantidad de dinero a invertir"));
  T = parseInt(prompt("Digite el numero de años"));

  Tm = T * 12
  IT = Tm * 2.3
  ITT = IT + D


  alert("El valor ganado en intereses es de :" + IT + " y el total ganado es de " + ITT );
}

function Calificaciones() {
  var C1;
  var C2;
  var C3;
  var C4;
  var C5;
  var P;

  alert("Este sistema permite calcular el promedio de sus notas en la materia de ingles");

  C1 = parseInt(prompt("Digite la primera calificacion"));
  C2 = parseInt(prompt("Digite la segunda calificacion"));
  C3 = parseInt(prompt("Digite la tercera calificacion"));
  C4 = parseInt(prompt("Digite la cuarta calificacion"));
  C5 = parseInt(prompt("Digite la quinta calificacion"));

  P = (C1 + C2 + C3 + C4 + C5) / 5

  if (P >= 3) {
    alert("El estudiante aprobo con : " + P + " FELICIDADES");
  } else {
    alert("El Estudiante desaprobo con :" + P + " Estudie Vago");
  }

  
}


function fruteria(){
  var KM;
  var T;
  var D;
  var TT;
  
  KM = parseInt(prompt("Digite el numero de kilos a comprar"));

  T = KM * 4500;

  if (KM <- 2){
    alert("Su compra no tiene descuento, su total es de : " + T );
  } else if (KM >= 3 && KM <= 5){
    D = ((T * 10) / 100);
    TT = (T - D);
    alert("Su compra tiene un descuento del 10 porciento su total es de :" + D);
  } else if (KM >= 6 && KM <= 10){
    D = ((T * 15) / 100);
    TT = (T - D);
    alert("Su compra tiene un descuento del 15 porciento su total es de :" + D);
  } else{
    D = ((T * 20) / 100);
    TT = (T - D);
    alert("Su compra tiene un descuento del 20 porciento su total es de :" + D);
  } 

  
}