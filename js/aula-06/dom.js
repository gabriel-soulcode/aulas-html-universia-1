console.log("Boa tarde, Mamãe.");

// DOM -> Document Object Model (Modelo Objeto de Documento)
// document (objeto) -> representar a raiz do DOM
console.log(document);

// Funções de Seleção (Consulta)
function changeTitle() {
  let h1 = document.querySelector("h1");
  h1.innerText = "Olá Kelly";
  h1.style.color = "red";
  h1.style.fontFamily = "Arial";
  h1.style.backgroundColor = "yellow";
  h1.style.padding = "20px 10px";
  // h1.id = "titulo";
}

// Eventos -> Ações que são acionadas pelo Usuário
let btn = document.querySelector("#clique");
btn.addEventListener("click", changeTitle);

// document.querySelectorAll("gruop")
// document.getElementById("titulo")
// document.getElementsByTagName("p")
// document.getElementsByClassName("card")

let imagens = [
  "https://petitgato.com.br/img/webp/gatos-persas-em-sao-paulo-img-3780.webp",
  "https://defensoresdosanimais.files.wordpress.com/2011/06/cc3a3o-filhote.jpg",
  "https://www.petz.com.br/blog//wp-content/uploads/2022/02/passarinho-que-canta-topo.jpg",
];

let image = document.querySelector("#image");
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");

// Parâmetro -> Argumento
// Função Anônima -> Função sem nome
btn1.addEventListener("click", function () {
  image.src = imagens[0];
});

btn2.addEventListener("click", function () {
  image.src = imagens[1];
});

btn3.addEventListener("click", function () {
  image.src = imagens[2];
});
