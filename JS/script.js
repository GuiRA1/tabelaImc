/* Capturar os inputs */

const inputPeso = document.getElementById('inputPeso');
const inputAltura = document.getElementById('inputAltura');
const botaoCalcular = document.getElementById('buttonCalcular');
const texto = document.getElementById('resultado');
const form = document.getElementById('formImc');
/* Fazer a página enviar o form e não reiniciar a página */
function submitForm(event) {
  event.preventDefault();
}

form.addEventListener('submit', submitForm);
