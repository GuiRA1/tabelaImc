const form = document.getElementById('formImc');
const texto = document.getElementById('resultadoTexto');

function submitForm(event) {
  event.preventDefault();
}

function calcular() {
  const botao = document.getElementById('botaoCalcular');
  const valorPeso = document.getElementById('inputPeso').value;
  const valorAltura = document.getElementById('inputAltura').value;
  const texto = document.getElementById('resultadoTexto');
  let resultado;

  const IMC = valorPeso / (valorAltura * valorAltura);
  if (IMC < 18.5) {
    mensagem = 'abaixo do peso';
  } else if (IMC >= 18.5 && IMC <= 29.9) {
    mensagem = 'com sobrepeso';
  } else if (IMC >= 30 && IMC <= 34.9) {
    mensagem = 'com obesidade grau 1';
  } else if (IMC >= 35 && IMC <= 39.9) {
    mensagem = 'com obesidade grau 2';
  } else if (IMC >= 40) {
    mensagem = 'com obesidade grau 3';
  }

  texto.innerHTML = `<p> Seu IMC é ${IMC} e você está ${mensagem} </p>`;
}
botaoCalcular.addEventListener('click', calcular);
form.addEventListener('submit', submitForm);
