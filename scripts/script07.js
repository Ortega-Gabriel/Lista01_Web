let inputPrimeiro = document.querySelector('#inputPrimeiro');
let inputSegundo = document.querySelector('#inputSegundo');
let inputTerceiro = document.querySelector('#inputTerceiro');
let inputQuarto = document.querySelector('#inputQuarto');
let inputQuinto = document.querySelector('#inputQuinto');
let inputSexto   = document.querySelector('#inputSexto');

let mediaPrimeiros = document.querySelector('#mediaPrimeiros');
let mediaUltimos = document.querySelector('#mediaUltimos');
let somaMedias = document.querySelector('#somaMedias');
let mediaMedias = document.querySelector('#mediaMedias');
let btCalcular = document.querySelector('#btCalcular');

function realizarCalculos()
{
    clearInterval(mediaPrimeiros)
    clearInterval(mediaUltimos)
    clearInterval(somaMedias)
    clearInterval(mediaMedias)

    let primeiroNumero = Number(inputPrimeiro.value);
    let segundoNumero = Number(inputSegundo.value);
    let terceiroNumero = Number(inputTerceiro.value);
    let quartoNumero = Number(inputQuarto.value);
    let quintoNumero = Number(inputQuinto.value);
    let sextoNumero = Number(inputSexto.value);
    

    let primeiraMedia = (primeiroNumero + segundoNumero + terceiroNumero) / 3;
    mediaPrimeiros.textContent = 'A Média dos Primeiros Números é: '+ primeiraMedia;

    let mediaSegunda = (quartoNumero + quintoNumero + sextoNumero) / 3;
    mediaUltimos.textContent = 'A Média dos Últimos Números é: '+ mediaSegunda;

    let mediasSomadas = + (primeiraMedia + mediaSegunda);
    somaMedias.textContent = 'As Médias Somadas é: '+ mediasSomadas;

    let mediasDivididas = + (primeiraMedia + mediaSegunda) / 2;
    mediaMedias.textContent = 'As Média das Médias é: '+ mediasDivididas;



}

btCalcular.onclick =  function()
{
    realizarCalculos()
}