document.getElementById("formContato").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita envio automático do formulário

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const assunto = document.getElementById("assunto").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();
  const status = document.getElementById("mensagemStatus");

  let erros = [];

  if (!nome || !email || !assunto || !mensagem) {
    erros.push("Preencha todos os campos.");
  }

  if (!email.includes("@") || !email.includes(".")) {
    erros.push("Informe um e-mail válido.");
  }

  if (mensagem.length < 20) {
    erros.push("A mensagem deve conter pelo menos 20 caracteres.");
  }

  if (erros.length > 0) {
    status.innerHTML = `<p style="color:red;">${erros.join("<br>")}</p>`;
  } else {
    status.innerHTML = `<p style="color:green;">Mensagem enviada com sucesso!</p>`;
    // Aqui você pode limpar os campos se quiser
    document.getElementById("formContato").reset();
  }
});
