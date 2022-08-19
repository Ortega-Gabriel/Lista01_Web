let inputValorQuilo = document.querySelector('#inputValorQuilo');
let inputQuantQuilos = document.querySelector('#inputQuantQuilos');
let valorTotal = document.querySelector('#valorTotal');
let btTotal = document.querySelector('#btTotal');

function calcularValorTotal()
{
    let valorQuilo = Number(inputValorQuilo.value);
    let quantQuilos = Number(inputQuantQuilos.value);

    let total = valorQuilo * quantQuilos;

    valorTotal.textContent = 'O Valor Total em reais é: '+ total;
}

btTotal.onclick = function()
{
    calcularValorTotal()
}