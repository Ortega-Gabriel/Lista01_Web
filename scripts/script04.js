let inputPrimeiroValor = document.querySelector('#inputPrimeiroValor');
let inputSegundoValor = document.querySelector('#inputSegundoValor');
let inputTerceiroValor = document.querySelector('#inputTerceiroValor');
let inputQuartoValor = document.querySelector('#inputQuartoValor');
let btMenor = document.querySelector('#btMenor');
let valorFinal = document.querySelector('#valorFinal');

function calculaMenor()
{
    let primeiroValor = Number(inputPrimeiroValor.value);
    let segundoValor = Number(inputSegundoValor.value);  
    let terceiroValor = Number(inputTerceiroValor.value);
    let quartoValor = Number(inputQuartoValor.value);

    if(primeiroValor < segundoValor && primeiroValor < terceiroValor && primeiroValor < quartoValor)
    {
        let valor = primeiroValor
        valorFinal.textContent = 'O Menor Valor é ' + valor
    }
    else if(segundoValor < primeiroValor && segundoValor < terceiroValor && segundoValor < quartoValor)
    {
        let valor = segundoValor
        valorFinal.textContent = 'O Menor Valor é ' + valor
    }
    else if(terceiroValor < segundoValor && terceiroValor < primeiroValor && terceiroValor < quartoValor)
    {
        let valor = terceiroValor
        valorFinal.textContent = 'O Menor Valor é ' + valor
    }
    else if(quartoValor < segundoValor && quartoValor < primeiroValor && quartoValor < primeiroValor)
    {
        let valor = quartoValor
        valorFinal.textContent = 'O Menor Valor é ' + valor
    }
    else
    {
        valorFinal.textContent = 'Os Valores São Iguais'
    }
}

btMenor.onclick = function()
{
    calculaMenor()
}