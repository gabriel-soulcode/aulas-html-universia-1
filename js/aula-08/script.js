// const aluno = {
//   nome: "Gabriel B",
//   idade: 23,
//   matricula: "2020234343",
//   endereco: {
//     logradouro: "Rua Ali Perto",
//     numero: "500A",
//     cidade: "Tianguá- CE",
//   },
// };
// console.log(aluno.nome);
// console.log(aluno.endereco.cidade);

const corpo = document.querySelector("#corpo");

const alunos = [
  { nome: "Fagner", idade: 32 },
  { nome: "Lucas", idade: 40 },
  { nome: "Kelly", idade: 27 },
];

function renderizaLista() {
  corpo.innerHTML = "";
  for (let aluno of alunos) {
    corpo.innerHTML += `<li>${aluno.nome} ${aluno.idade}</li>`;
  }
}

// mostrar a lista antes de atualizar
renderizaLista();

// adiciona um novo item na lista
alunos.push({ nome: "João", idade: 51 });

// mostrar a lista depois de adicionar o João
renderizaLista();

const parag = document.querySelector("#parag");
console.log(parag.innerText);
console.log(parag.innerHTML);

const paragrafos = document.querySelectorAll("p"); // uma lista

for (let p of paragrafos) {
  // ouvidor de eventos para cada paragrafo
  p.addEventListener("mouseover", function (event) {
    let texto = event.target.innerText;
    let titulo = document.querySelector("#msg");
    titulo.innerText = texto;
  });
}
