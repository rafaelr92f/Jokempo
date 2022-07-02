// Capturando elementos HTML
const circulos = document.querySelectorAll('.circulo') // Nodelist
const img_player01 = document.querySelector('#img_player01')
const img_player02 = document.querySelector('#img_player02')
const placar_player01 = document.querySelector('#placar_player01')
const placar_player02 = document.querySelector('#placar_player02')
const btn_jogar = document.querySelector('#btn_jogar')
const btn_recomecar = document.querySelector('#btn_recomecar')
const tela_jogar = document.querySelector('#tela_jogar')
const tela_recomecar = document.querySelector('#tela_recomecar')
const resultado = document.querySelector('#resultado')

// Variaveis para analise
let escolhaJogador
let escolhaCPU
let start = false
let pontosJogador = 0
let pontosCPU = 0

// Convertendo Nodelist para Array
const opcoes = [...circulos]

// Adicionando eventos
opcoes.forEach((opcao) => {
    opcao.addEventListener('click', () => {

        // Adicionar valor a variavel START

        start = true

        // Mudar tela de escolha do jogador

        escolhaJogador = opcoes.indexOf(opcao)

        switch (escolhaJogador) {
            case 0:
                img_player01.setAttribute('src', './assets/pedra.png')
                break
            case 1:
                img_player01.setAttribute('src', './assets/papel.png')
                break
            case 2:
                img_player01.setAttribute('src', './assets/tesoura.png')
                break
        }

        // Ativar efeito borda no circulo selecionado

        for (value in opcoes) {
            opcoes[value].classList.remove('circulo_ativo')
        }

        opcao.classList.toggle('circulo_ativo')

    })
})

btn_jogar.addEventListener('click', jogar)

btn_recomecar.addEventListener('click', recomecar)


// Função principal
function jogar() {

    // Verificar se tem algum valor na variável START
    if (start == true) {
        jogadaCPU()
        analise()
        mostrarResultado()

        // Definição dos valores do placar
        placar_player01.textContent = pontosJogador
        placar_player02.textContent = pontosCPU

    } else {
        alert('Selecione uma opção para iniciar o jogo!')
    }

}


// Funções declaradas:



function jogadaCPU() {
    escolhaCPU = Math.floor(Math.random() * 3)

    switch (escolhaCPU) {
        case 0:
            img_player02.setAttribute('src', './assets/pedra.png')
            break
        case 1:
            img_player02.setAttribute('src', './assets/papel.png')
            break
        case 2:
            img_player02.setAttribute('src', './assets/tesoura.png')
            break
    }
}


function analise() {
    if (escolhaCPU == escolhaJogador) {
        resultado.textContent = 'Empatou!'

    } else if (escolhaCPU == 0 && escolhaJogador == 1) {
        pontosJogador += 1
        resultado.textContent = 'Você Venceu!'

    } else if (escolhaCPU == 0 && escolhaJogador == 2) {
        pontosCPU += 1
        resultado.textContent = 'A CPU Venceu u.u'

    } else if (escolhaCPU == 1 && escolhaJogador == 2) {
        pontosJogador += 1
        resultado.textContent = 'Você Venceu!'

    } else if (escolhaCPU == 1 && escolhaJogador == 0) {
        pontosCPU += 1
        resultado.textContent = 'A CPU Venceu u.u'

    } else if (escolhaCPU == 2 && escolhaJogador == 0) {
        pontosJogador += 1
        resultado.textContent = 'Você Venceu!'

    } else if (escolhaCPU == 2 && escolhaJogador == 1) {
        pontosCPU += 1
        resultado.textContent = 'A CPU Venceu u.u'

    }
}

function mostrarResultado() {
    tela_recomecar.style.display = 'block'
    tela_jogar.style.display = 'none'
}

function recomecar() {
    tela_recomecar.style.display = 'none'
    tela_jogar.style.display = 'block'
}


