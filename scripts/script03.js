let inputPrimeiroValor = document.querySelector('#inputPrimeiroValor')
let inputSegundoValor = document.querySelector('#inputSegundoValor')
let btMaior = document.querySelector('#btMaior')
let maiorValor = document.querySelector('#maiorValor')

function calculaValores()
{
    let primeiroValor = Number(inputPrimeiroValor.value);
    let segundoValor = Number(inputSegundoValor.value);

    if(primeiroValor > segundoValor)
    {
        let valor = primeiroValor
        maiorValor.textContent = 'O Maior Valor é: '+ valor
    }
    else if(segundoValor > primeiroValor)
    {
        let valor = segundoValor
        maiorValor.textContent = 'O Maior Valor é: '+ valor
    }
    else
    {
        maiorValor.textContent = 'Os Valores são Iguais!'
    }
}

btMaior.onclick = function ()
{
    calculaValores()
}