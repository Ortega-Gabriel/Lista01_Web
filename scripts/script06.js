let inputCodigo = document.querySelector('#inputCodigo');
let resultadoProduto = document.querySelector('#resultadoProduto');
let btProcurar = document.querySelector('#btProcurar');

function procuraCodigo()
{
    let codigo = Number(inputCodigo.value);

    if(codigo == 001)
    {
        resultadoProduto.textContent = 'Parafuso'
    }
    else if(codigo == 002)
    {
        resultadoProduto.textContent = 'Porca'
    }
    else if(codigo == 003)
    {
        resultadoProduto.textContent = 'Prego'
    }
    else
    {
       resultadoProduto.textContent = 'Diversos' 
    }
}
btProcurar.onclick = function()
{
    procuraCodigo()
}

