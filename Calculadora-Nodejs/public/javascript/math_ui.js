// Conecta ao servidor
const socket = io();

// Envia os dados para o servidor
function somar() {
  console.log('Enviando dados para o servidor...');
  const valor1 = document.getElementById('addend1').value;
  const valor2 = document.getElementById('addend2').value;

  socket.emit('daAdd', {
    addend1: valor1,
    addend2: valor2
  });
}

// Recebe a resposta do servidor
socket.on('daAnswer', function (mensagem) {
  document.getElementById('resultado').innerText = mensagem;
});
