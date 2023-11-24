import { conectaApi } from "./conectaApi.js";
import constroiCard from "./mostrarVideos.js";

async function buscarVideo(evento) {
    evento.preventDefault();

    // Captura o valor digitado no campo de pesquisa
    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;
    // Envia o valor capturado para o buscaVideo() no servidor que esta na conectaApi.js
    const busca = await conectaApi.buscaVideo(dadosDePesquisa);

    const lista = document.querySelector("[data-lista]");

    // Um laço de repetição que enquanto houver (true) o primeiro filho na lista vai remover até sobrar nada (false)
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }

    // cria um card do video que pesquisou e adiciona na lista
    busca.forEach(elemento => lista.appendChild(
        constroiCard(
            elemento.titulo, 
            elemento.descricao, 
            elemento.url, 
            elemento.imagem
        )
    ))

    // Se na busca a lista for zero retorna essa mensagem
    if (busca.length == 0) {
        lista.innerHTML = `<h2 class="mensagem__titulo">Não existem vídeo com esse termo</h2>` 

    }
}

const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]");

// Quando ouvir o botao de click no botão de pesquisa vai enviar o evento para função buscarVideo()
botaoDePesquisa.addEventListener("click", evento => buscarVideo(evento))
