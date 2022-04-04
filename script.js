function atualizarTempo() {
  var display = document.querySelector('.display')

  var agora = new Date()

  var horario =
    corrigirTempo(agora.getHours()) +
    ':' +
    corrigirTempo(agora.getMinutes()) +
    ':' +
    corrigirTempo(agora.getSeconds())

  display.textContent = horario
}

function corrigirTempo(numero) {
  if (numero < 10) {
    numero = '0' + numero
  }
  return numero
}

atualizarTempo()
setInterval(atualizarTempo, 1000)
