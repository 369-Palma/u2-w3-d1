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

button.addEventListener("click", function () {
  let currentUser = new User(
    inputName.value,
    inputCognome.value,
    inputData.value
  );

  currentUser.id = nome.innerHTML = currentUser.name;
  cognome.innerHTML = currentUser.cognome;
  data.innerHTML = currentUser.date;
});
