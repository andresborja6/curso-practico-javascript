//codigo del cuadrado
console.group("Cuadrado");
/*const ladoCuadrado = 5;
console.log("lado cuadrado miden: " + ladoCuadrado + " cm") */

function perimetroCuadrado (lado) {
    return lado * 4;
} 

//console.log("El perimetro del cuadrado es: " + perimetroCuadrado + " cm")

function areaCuadrado (ladoCuadrado) {
    return ladoCuadrado * ladoCuadrado;
}
//console.log("El area del cuadrado es: " + areaCuadrado + " cm^2")

console.groupEnd();
console.group("Triangulo");
//codigo del triangulo

/*const lado1 = 6;
const lado2 = 6;
const base = 4;
const altura = 5.5;
const perimetro = lado1 + lado2 + base;
const areat =  (base * altura) / 2;*/
function perimetroTriangulo (lado1,lado2,base){
    return lado1 + lado2 + base;
}
function areaTriangulo (base, altura){
    return (base * altura) / 2
}
/*console.log("los lados del triangulo miden: " + lado1 + " cm, " + lado2 + " cm, Base " + base + " cm")
console.log("Altura triangulo: " + altura + " cm")
console.log("El perimetro del triangulo es: " + perimetro + " cm")
console.log("El area del triangulo es: " + areat + " cm")*/
console.groupEnd();

console.group("Circulo")


const pi = Math.PI;
function diametro(radio) {
    return radio * 2;
} 
function circunferencia(radio) {
    const diametr = diametro(radio)
    return diametr * pi;
} 
function areac (radio) {
    return (radio * radio) * pi
} 
/*console.log("el radio de la circulo es: " + radio + " cm^2")
console.log("el diametro del circulo es: " + diametro + " cm^2")
console.log("el pi es: " + pi )
console.log("La circunferencia es: " + circunferencia + " cm^2")
console.log("el area del circulo es: " + areac + " cm^2")*/
console.groupEnd();

function calcularperimetrocuadrado()
{
    const input = document.getElementById('inputcuadrado');
    const value = input.value;
    const total = perimetroCuadrado(value);
    alert("El total perimetral es: " + total);
}

function calcularareacuadrado()
{
    const input = document.getElementById('inputcuadrado');
    const value = input.value;
    const total = areaCuadrado(value);
    alert("El total area es: " + total);
}