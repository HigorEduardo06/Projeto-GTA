/*

Objetivo 1 - quando o usuario clicar no botao de seleção de plataformas deve abrir uma caixa com os botões de seleção de plataforma

    Passo 1 - pegar o botao de seleção de plataforma no JS pra poder verificar quando o usuario clica em cima dele
    
    Passo 2 - pegar o elemento do conteudo que precisa ser mostrado

    Passo 3 - pegar o clique do usuario no js

    Passo 4 - quando o usuario clicar, adicionar a classe ativo na listagem de plataformas dentro do botao pra que o conteudo dele apareça 

    
Objetivo 2 - caso a lista de botões de plataformas ja esteja aparecendo e o usuario clicar no botao de fechar, o conteudo deve ser escondido 

    Passo 1 - verificar se o botão ja esta aberto, se sim, devemos remover a classe ativo para que ele esconda o conteudo novamente 

*/

const botao = document.querySelector(".btn-plataforma");
const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");

botao.addEventListener("click", () => {

        elementoPlataformas.classList.toggle("ativo");
});
