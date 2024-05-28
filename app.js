// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do número secreto';
let listaDeNumerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
console.log(numeroSecreto); // mostra no console

function exibirTextoNaTela(tag, texto) { // boa maneira de repetir código 
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 100');
}

exibirMensagemInicial();

function verificarChute() { // função verificar chute
    let chute = document.querySelector('input').value; // aqui acessa o arquivo html e seleciona a tag input

    if (chute == numeroSecreto) { // se chute for igual ao número secreto
        exibirTextoNaTela('h1', 'Acertou!'); // exibe na tela
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas); // exibe na tela
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {  // se não 
        if (chute > numeroSecreto) { // chute for maior que numero secreto
            exibirTextoNaTela('p', 'O número é menor'); // diz que o número é menor
        } else { // se não ele é maior
            exibirTextoNaTela('p', 'O número é maior');
        } tentativas++ // aqui ele adiciona + 1 tentativa a cada erro
        limparCampo();
    }
}

function gerarNumeroAleatorio() { // função que gera numero aleatorio
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1); // retorna um numero inteiro, e gera um numero de 1 a 10
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute = value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}