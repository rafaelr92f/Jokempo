// Capturando elementos HTML
const circulos = document.querySelectorAll('.circulo')
const img_player01 = document.querySelector('#img_player01')
const img_player02 = document.querySelector('#img_player02')
const placar_player01 = document.querySelector('#placar_player01')
const placar_player02 = document.querySelector('#placar_player02')
const tela_jogar = document.querySelector('#tela_jogar')
const tela_recomecar = document.querySelector('#tela_recomecar')
const btn_jogar = document.querySelector('#btn_jogar')
const btn_recomecar = document.querySelector('#btn_recomecar')
const resultado = document.querySelector('#resultado')

// Variaveis para analise
let start = false
let escolhaJogador
let escolhaCPU

// Convertendo Nodelist para Array
let opcoes = [...circulos] 

// Adicionando eventos
opcoes.forEach((opcaoSelecionada) => {
    opcaoSelecionada.addEventListener('click', () => {
        // Alterar valor da variavel start
        start = true

        // Mudar opção do jogador no box
        escolhaJogador = opcoes.indexOf(opcaoSelecionada)
        // Ativar circulo
        ativarCirculo(opcaoSelecionada)
    })
}) 

btn_jogar.addEventListener('click', jogar)
btn_recomecar.addEventListener('click', recomecar)

function jogar(){

    // Verificar se a variavel start está ativa
    if(start == true){
        jogadaCPU()
        analise()
        mostrarResultado()
        alterarPlacar()
    } else {
        alert('Selecione uma opção para jogar!')
    }
}




// Função principal

// Funções declaradas

function mostrarResultado() {
    tela_jogar.style.display = 'none'
    tela_recomecar.style.display = 'block'
}

function recomecar(){
    tela_recomecar.style.display = 'none'
    tela_jogar.style.display = 'block'
}

function trocarTela(valor, jogador){
    switch(valor){
        case 0:
           jogador.setAttribute('src', './assets/pedra.png')
            break
        case 1:
            jogador.setAttribute('src', './assets/papel.png')
            break
        case 2:
            jogador.setAttribute('src', './assets/tesoura.png')
            break
    }
}

function jogadaCPU() {
    escolhaCPU = Math.floor(Math.random() * 3)
    console.log(escolhaCPU)
    trocarTela(escolhaCPU, img_player02)
}

function analise() {
    console.log('Analisando')
}

function alterarPlacar(){
    console.log('Placar alterado')
}

function ativarCirculo(param) {
    for(valor in opcoes){
        opcoes[valor].classList.remove('circulo_ativo')
    }

    param.classList.toggle('circulo_ativo')
}