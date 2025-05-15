function mascararCPF() {
  const input = document.getElementById("cpf").value;
  const apenasNumeros = input.replace(/\D/g, "");

  const resultadoDiv = document.getElementById("resultado");
  const copiadoDiv = document.getElementById("copiado");
  copiadoDiv.innerText = "";

  if (apenasNumeros.length !== 11) {
    resultadoDiv.innerText = "CPF inválido. Digite exatamente 11 dígitos.";
    return;
  }

  const parte2 = apenasNumeros.slice(3, 6);
  const parte3 = apenasNumeros.slice(6, 9);
  const cpfMascarado = `xxx.${parte2}.${parte3}-xx`;

  resultadoDiv.innerText = `CPF maskarado: ${cpfMascarado}`;

  navigator.clipboard
    .writeText(cpfMascarado)
    .then(() => {
      copiadoDiv.innerText = "Copiado! :D";
    })
    .catch(() => {
      copiadoDiv.innerText = "Não foi possível copiar automaticamente :(";
    });
}

document.getElementById("cpf").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    mascararCPF();
  }
});
