function salvarUsuario(event) {
  event.preventDefault();
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;

  localStorage.setItem("nome", nome);
  localStorage.setItem("email", email);
  localStorage.setItem("saldo", 0);

  window.location.href = "saldo.html";
}

function carregarSaldo() {
  const nome = localStorage.getItem("nome");
  const saldo = localStorage.getItem("saldo");
  document.getElementById("saudacao").innerText = `Olá, ${nome}`;
  document.getElementById("saldo").innerText = saldo;
}

function carregarAvaliacao() {
  const nome = localStorage.getItem("nome");
  const saldo = localStorage.getItem("saldo");
  document.getElementById("saudacao").innerText = `Olá, ${nome}`;
  document.getElementById("saldo").innerText = saldo;
}

function avaliar(nota) {
  localStorage.setItem("nota", nota);
}

function avaliarExtra(resposta) {
  localStorage.setItem("extra", resposta);
}

function enviarRespostas() {
  let saldoAtual = parseFloat(localStorage.getItem("saldo"));
  saldoAtual += 2000;
  localStorage.setItem("saldo", saldoAtual);

  alert("Respostas enviadas com sucesso! Seu saldo foi atualizado.");
  window.location.href = "saldo.html";
}
