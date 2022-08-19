let inputValor = document.querySelector('#inputValor');
let btCalcular = document.querySelector('#btCalcular');
let valorFinal = document.querySelector('#valorFinal');

function calculaValor()
{
    clearInterval(valorFinal)
    let valor = Number(inputValor.value);
    valorFinal.textContent = 'Valor Reajustado em 1%: '+ (valor * 0.01) + valor;
}
btCalcular.onclick = function()
{
    calculaValor()
}