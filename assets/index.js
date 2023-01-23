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
  this.showName = function () {
    return this.name + " " + this.surname;
  };
};

let currentUser = new User("Pippo", "Baudo", "12/05/1992, ");
console.log("questo è l'utente nuovo", currentUser);

button.addEventListener("click", function () {
  nome.innerHTML = currentUser.name;
});

/* let currentUser = new User("Pippo", "Baudo", "12/05/1992");
console.log(currentUser); */
/* 
button.addEventListener("click", function () {
  nomeCognome.innerHTML = currentUser.name + currentUser.cognome;
}); */
