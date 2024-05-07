let num1 = parseFloat(prompt("Ingrese el primer número:"));
let num2 = parseFloat(prompt("Ingrese el segundo número:"));
let num3 = parseFloat(prompt("Ingrese el tercer número:"));

var mayor, centro, menor;

// Encontrar el número mayor
if (num1 >= num2 && num1 >= num3) {
    mayor = num1;
    if (num2 >= num3) {
        centro = num2;
        menor = num3;
    } else {
        centro = num3;
        menor = num2;
    }
} else if (num2 >= num1 && num2 >= num3) {
    mayor = num2;
    if (num1 >= num3) {
        centro = num1;
        menor = num3;
    } else {
        centro = num3;
        menor = num1;
    }
} else {
    mayor = num3;
    if (num1 >= num2) {
        centro = num1;
        menor = num2;
    } else {
        centro = num2;
        menor = num1;
    }
}

// Imprimir los números ordenados de mayor a menor y de menor a mayor
console.log("Números ordenados de mayor a menor:", mayor, centro, menor);
console.log("Números ordenados de menor a mayor:", menor, centro, mayor);

// Verificar si los números son iguales
if (num1 === num2 && num2 === num3) {
    console.log("Los números son iguales.");
} else {
    console.log("Los números no son iguales.");
}
