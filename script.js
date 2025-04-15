document.addEventListener("DOMContentLoaded", function(){
const botaoDeAcesibilidade = document.getElementById('botao-acessibilidade')
const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade')

botaoDeAcesibilidade.addEventListener('click', function (){
    botaoDeAcesibilidade.classList.toggle('rotacao-botao');
    botaoDeAcesibilidade.classList.toggle('apresenta-lista')
})

const aumentaFonteBotao = document.getElementById("aumentar-fonte");
const diminuiFonteBotao = document.getElementById("diminuir-fonte");

let tamanhoAtualFonte = 1;

aumentaFonteBotao.addEventListener("click", function(){
tamanhoAtualFonte += 0.1;
document.body.style.fontSize = `${tamanhoAtualFonte}rem`

})

diminuiFonteBotao.addEventListener("click", function(){
    tamanhoAtualFonte -= 0.1;
    document.body.style.fontSize = `${tamanhoAtualFonte}rem`
    
    })


})