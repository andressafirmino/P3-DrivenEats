let nome_prato = '';
let nome_bebida = '';
let nome_sobremesa = '';

let cliente = '';
let endereco = '';

let pratoSelecionado = '';
let bebidaSelecionada = '';
let sobremesaSelecionada = '';

let valor_prato = '';
let valor_bebida = '';
let valor_sobremesa = '';


let valor1 ='';
let valor2 ='';
let valor3 ='';

let total = 0;

let mensagem = '';



function selecionarPrato (seletor) {
    nome_prato = seletor.innerHTML;
    valor_prato = seletor.innerHTML;

    const selecionadoP = document.querySelector('.prato .selecionado');

    if ( selecionadoP !== null ) {
        selecionadoP.classList.remove('selecionado');
    }

    const prato = document.querySelector(seletor);
    
    prato.classList.add('selecionado');

    pratoSelecionado = document.querySelector('.prato .selecionado .nome-item');
    nome_prato = pratoSelecionado.innerHTML;

    valor1 = document.querySelector('.prato .selecionado .preco-item');
    valor_prato = valor1.innerHTML;

    valor_prato = parseFloat(valor_prato.replace("R$", "").replace(",", "."));
    console.log(valor_prato);

    finalizar();


}

function selecionarBebida (seletor) {
    
    nome_bebida = seletor.innerHTML;
    valor_bebida = seletor.innerHTML;

    const selecionadoB = document.querySelector('.bebida .selecionado');

    if ( selecionadoB !== null ) {
        selecionadoB.classList.remove('selecionado');
    }

    const bebida = document.querySelector(seletor);
    
    bebida.classList.add('selecionado');

    bebidaSelecionada = document.querySelector('.bebida .selecionado .nome-item');
    nome_bebida = bebidaSelecionada.innerHTML;
    
    valor2 = document.querySelector('.bebida .selecionado .preco-item');
    valor_bebida = valor2.innerHTML;

    valor_bebida = parseFloat(valor_bebida.replace("R$", "").replace(",", "."));

    finalizar();

}

function selecionarSobremesa (seletor) {
    nome_sobremesa = seletor.innerHTML;
    valor_sobremesa = seletor.innerHTML;

    const selecionadoS = document.querySelector('.sobremesa .selecionado');

    if ( selecionadoS !== null ) {
        selecionadoS.classList.remove('selecionado');
    }

    const sobremesa = document.querySelector(seletor);
    
    sobremesa.classList.add('selecionado');

    sobremesaSelecionada = document.querySelector('.sobremesa .selecionado .nome-item');
    nome_sobremesa = sobremesaSelecionada.innerHTML;
    
    valor3 = document.querySelector('.sobremesa .selecionado .preco-item');
    valor_sobremesa = valor3.innerHTML;

    valor_sobremesa = parseFloat(valor_sobremesa.replace("R$", "").replace(",", "."));

    finalizar();
}


function infosEntrega () {
    cliente = prompt('Qual o seu nome?');
    endereco = prompt('Qual o seu endereço?');
}


function finalizar () {
    if (nome_prato !== ''){
        if (nome_bebida !== '') {
            if (nome_sobremesa !== '') {
                const continuar = document.querySelector('.botao').removeAttribute('disabled');
                const cont = document.querySelector('.botao');
                cont.classList.add('avancar');
                cont.innerHTML = "Fechar pedido";
            }
        }
    }

}


function calcular(valor_prato, valor_bebida, valor_sobremesa) {
   
    total = (valor_prato) + (valor_bebida) + (valor_sobremesa);
}


function mensagemWpp () {
   mensagem = "Olá, gostaria de fazer o pedido: " + "\n" +
                        "- Prato: " + nome_prato + "\n" +
                        "- Bebida: " + nome_bebida + "\n" +
                        "- Sobremesa: " + nome_sobremesa + "\n" +
                        "Total: R$" + total;

     alert(mensagem);                   
    window.open("https://wa.me/55999999999?text=" + mensagem);
                        
}

    
    
   
   
