/* Capturar os inputs */
const texto = document.getElementById('resultadoTexto');
const form = document.getElementById('formImc');
/* Fazer a página enviar o form e não reiniciar a página */

function submitForm(event) {
  event.preventDefault();
}

function calcular() {
  const botao = document.getElementById('botaoCalcular');
  const valorPeso = document.getElementById('inputPeso').value;
  const valorAltura = document.getElementById('inputAltura').value;

  let resultado = valorPeso / (valorAltura * valorAltura);

  return resultado;
}

botaoCalcular.addEventListener('click', calcular);
form.addEventListener('submit', submitForm);
