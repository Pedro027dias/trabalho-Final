document.getElementById("formulariowpp").addEventListener("submit", function(event) {
  event.preventDefault();

let nome = document.getElementById("nome").value;
let email = document.getElementById("email").value;
let mensagem = document.getElementById("mensagem").value;

let texto = `Olá, meu nome é ${nome}. Meu email é ${email}. ${mensagem}`;
let url = `https://wa.me/27992996359?text=${encodeURIComponent(texto)}`;

  window.open(url, '_blank');
});