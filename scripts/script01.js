let inputProduto = document.querySelector('#inputProduto');
let inputPago = document.querySelector('#inputPago');
let btTroco = document.querySelector('#btTroco');
let h3Troco = document.querySelector('#h3Troco');

function calculaTroco(){
    let valorProduto = Number(inputProduto.value);
    let valorPago = Number(inputPago.value);

    let troco = valorPago - valorProduto;

    h3Troco.textContent = 'O Valor do Troco é: '+troco;
    
}

btTroco.onclick = function(){
    calculaTroco();

}
