let inputName = document.getElementById("inputName");
let inputCognome = document.getElementById("inputCognome");
let inputData = document.getElementById("inputData");
let button = document.getElementById("button");
let nome = document.getElementById("nome");
let cognome = document.getElementById("cognome");
let data = document.getElementById("data");

const User = function (nome, cognome, data) {
  this.name = nome;
  this.cognome = cognome;
  this.date = data;
};

let currentUser = new User("Pippo", "Baudo", "12/05/1992, ");
console.log("questo è l'utente nuovo", currentUser);

button.addEventListener("click", function () {
  nome.innerHTML = inputName.value;
  cognome.innerHTML = inputCognome.value;
  data.innerHTML = inputData.value;
});
