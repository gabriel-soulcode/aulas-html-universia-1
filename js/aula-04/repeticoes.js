// for -> para
// Escopo -> Bloco de código

// repetir 10x com incremento
for (let i = 0; i < 10; i++) {
  console.log("Oi");
}

// repetir 10x com decremento
for (let i = 10; i > 0; i--) {
  console.log("Hi");
}

// loop inifinito
// for (;;) {
//   console.log("Hello");
// }

// verificar se um número é primo
let numero = 90;
let primo = true;
for (let i = 2; i < numero; i++) {
  console.log(i);
  if (numero % i == 0.0) {
    primo = false;
    break; // força a parada do loop
  } else {
    continue; // pula o loop atual
  }
  // mais código
}

console.log("Primo: " + primo);

// pirâmida de *
// 10x
for (let i = 1; i <= 20; i++) {
  let row = "";
  // ix
  for (let j = 0; j < i; j++) {
    row += "*";
  }
  console.log(row);
}

// while -> enquanto
let count = 10;
while (count < 1000 && count != 60) {
  console.log(count);
  count += 2;
}

let i = 3;
while (true) {
  if (i > 23) {
    break;
  }
  console.log("While true", i);
  i++;
}

// while faz a verificação antes de executar
while (false) {
  console.log("NUNCAAAAA!");
}

// do while faz a verificação depois de executar
do {
  console.log("EXECUTADO UMA VEZ!");
} while (false);

let y = 0;
do {
  console.log(y);
  y++;
} while (y < 5);

// lista, vetores ou arrays
let lista = ["Gabriel", "Adriano", "Igor", "Franciane", "Bismark", "Almir"];
// console.log(lista[0]);
for (let i = 0; i < lista.length; i++) {
  console.log(lista[i]);
}

// for each
for (let elemento of lista) {
  console.log(elemento);
}

let numeros = [12, 78, 56, 32, 41, 24, 17, 22];
for (let n of numeros) {
  console.log(n ** 2);
}

let total = numeros.length;
let soma = 0;
for (let i = 0; i < total; i++) {
  soma += numeros[i];
}
let media = soma / total;
console.log("Media da lista " + media);
