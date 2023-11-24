// Funções -> Bloco de código que recebem entradas e retornam saídas

// b^2 - 4 a c
// function calcularDelta() {
//   let a = 7;
//   let b = 3;
//   let c = 4;
//   let delta = b ** 2 - 4 * a * c;
//   console.log(delta);
// }

// function calcularDelta(a, b, c) {
//   let delta = b ** 2 - 4 * a * c;
//   console.log(delta);
// }

function calcularDelta(a, b, c) {
  let delta = b ** 2 - 4 * a * c;
  return delta;
}

console.log(calcularDelta(7, 3, 4));
let result = calcularDelta(1, 2, 3);
console.log(result);
calcularDelta(2, 8, 1); // não é impreso, somente é calculado

// função com parâmetro sem retorno
// função com parâmetro com retorno
// função sem parâmetro sem retorno
// função sem parâmetro com retorno
