function mascararCPF() {
  const inputElement = document.getElementById("cpf");
  const input = inputElement.value;
  const apenasNumeros = input.replace(/\D/g, "");

  const resultadoDiv = document.getElementById("resultado");
  const copiadoDiv = document.getElementById("copiado");
  copiadoDiv.innerText = ""; // limpa as msgs anteriores

  if (apenasNumeros.length !== 11) {
    resultadoDiv.innerText = "CPF inválido. Digite exatamente 11 dígitos.";
    return;
  }

  const parte2 = apenasNumeros.slice(3, 6);
  const parte3 = apenasNumeros.slice(6, 9);
  const cpfMascarado = `xxx.${parte2}.${parte3}-xx`;

  resultadoDiv.innerText = `CPF mascarado: ${cpfMascarado}`;

  navigator.clipboard
    .writeText(cpfMascarado)
    .then(() => {
      copiadoDiv.innerText = "CPF mascarado copiado!";
    })
    .catch(() => {
      copiadoDiv.innerText = "Não foi possível copiar automaticamente.";
    });

  // limpa o campo e retoma o paceholder ativo
  inputElement.value = "";
  inputElement.focus();
}

// Lance do apertar Enter
document.getElementById("cpf").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    mascararCPF();
  }
});

// foco no input ao carregar a página
window.onload = function () {
  document.getElementById("cpf").focus();
};
