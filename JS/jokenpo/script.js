function jogar() {
    let sort = document.getElementById('sort')
    let res = document.getElementById('res')
    let play = document.getElementsByName('jok')
    
    if((play[0]).checked == false && (play[1]).checked == false && (play[2]).checked == false) { 
        window.alert('Escolha uma das opções!')
    } else {
        let sorteio = Math.floor(Math.random() * 3);
        switch (sorteio) {
            case 0: 
                sort.innerHTML = 'Computador escolheu: Pedra';
                break;
            case 1:
                sort.innerHTML = 'Computador escolheu: Papel';
                break;
            case 2:
                sort.innerHTML = 'Computador escolheu: Tesoura';
                break;    
        }
        
        if ((play[0].checked && sorteio == 0) || (play[1].checked == true && sorteio == 1) || (play[2].checked == true && sorteio == 2)) {
            res.innerHTML = "EMPATE!";
        } else if ((play[0].checked == true && sorteio == 2) || ((play[1]).checked == true && sorteio == 0) || ((play[2]).checked == true && sorteio == 1)) {
            res.innerHTML = "Jogador VENCEU!"
        } else {
            res.innerHTML = "Computador VENCEU!"
        }

    }
    
}

function resetar() {
    document.getElementById('sort').innerHTML= '';
    document.getElementById('res').innerHTML= '';
}
