function jogar() {
  const sort = document.getElementById("sort");
  const res = document.getElementById("res");
  const play = document.getElementsByName("jok");

  if (!play[0].checked && !play[1].checked && !play[2].checked) {
    window.alert("Escol ha uma das opções!");
  } else {
    const sortMessage = [
      "Computador escolheu: Pedra",
      "Computador escolheu: Papel",
      "Computador escolheu: Tesoura",
    ];
    const sorteio = Math.floor(Math.random() * 3);
    sort.innerHTML = sortMessage[sorteio];

    if (
      (play[0].checked && sorteio == 0) ||
      (play[1].checked && sorteio == 1) ||
      (play[2].checked && sorteio == 2)
    ) {
      res.innerHTML = "EMPATE!";
    } else if (
      (!play[0].checked && sorteio == 2) ||
      (!play[1].checked && sorteio == 0) ||
      (!play[2].checked && sorteio == 1)
    ) {
      res.innerHTML = "Jogador VENCEU!";
    } else {
      res.innerHTML = "Computador VENCEU!";
    }
  }
}

function resetar() {
  document.getElementById("sort").innerHTML = "";
  document.getElementById("res").innerHTML = "";
}
