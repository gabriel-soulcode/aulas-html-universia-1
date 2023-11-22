let num = 5; // number
let str = "Alberto"; // string
let boo = true; // boolean
let obj = { nome: "Gabriel", idade: "22" }; // object
let arr = [1, 2, 3, 4, 5, 6]; // array

// Operadores Aritméticos (number)
// + -> Adição
// - -> Subtração
// / -> Divisão
// * -> Multiplicação
// ** -> Potenciação
// % -> Resto da Divisão

let n1 = 12;
let n2 = 4;

console.log(n1 + n2); // 16
console.log(n1 - n2); // 8
console.log(n1 / n2); // 3
console.log(n1 * n2); // 48
console.log(n1 ** n2); // 20736
console.log(n1 % n2); // 0

let soma = n1 + n2;
console.log("A soma de n1 e n2", soma);

// Operadores Relacionais (boolean)
// > -> Maior
// < -> Menor
// >= -> Maior ou Igual
// <= -> Menor ou Igual
// != -> Diferente
// == -> Igualdade

console.log(n1 > n2); // true
console.log(n1 < n2); // false
console.log(n1 >= n2); // true
console.log(n1 <= n2); // false
console.log(n1 != n2); // true
console.log(n1 == n2); // false

console.log("João" != "Maria"); // true
console.log("João" == "João"); // true
console.log("Gabriel".length);
console.log("4" === 4);
console.log("22" !== 22);

// Operadores Lógicos (boolean)
// && -> E -> And
// || -> Ou -> Or
// ! -> Não -> Not
console.log(true && true); // true
console.log(true && false); // false
console.log(true || false); // true
console.log(false || false); // false
console.log(!true); // false
console.log(!false); // true

// Exemplos
let nota1 = 8.0;
let nota2 = 9.0;
let excessoFaltas = false;
let passou = (nota1 + nota2) / 2 >= 7.0 && !excessoFaltas;
console.log(passou);

// Operadores de Atribuição
// += -> Mais Igual
// -= -> Menos Igual
// = -> Igual

let numero = 45; // atribui 45 a variavel numero
numero = 32; // substituir o valor 45 por 32
console.log(numero); // 32

numero += 12;
console.log(numero); // 44

numero -= 14;
console.log(numero); // 30

// Operadores de Incremente e Decremente (number)
// b++ -> Pós Incremento
// b-- -> Pós Decremento
// ++b -> Pré Incremento
// --b -> Pré Decremento
let b = 0;
console.log(b); // 0
console.log(b++); // 0
console.log(b); // 1
console.log(++b); // 2
console.log(b--); // 2
console.log(--b); // 0

// Operador Concatenação
// + -> Concatenação
console.log(7 + 15); // operador de adição
console.log("Gabriel" + " seja bem-vindo."); // operador de concatenação
let idade = 32;
console.log("Estefane tem " + idade + " anos de idade.");

console.log((5.34555).toFixed(2));
