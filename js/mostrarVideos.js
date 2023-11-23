import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector("[data-lista]");

// cria um elemento <li> na variavel video / <li> recebe a classe = "videos__item" / <li> recebe o "html" dentro
function constroiCard(titulo, descricao, url, imagem) {
    const video = document.createElement("li");

    video.className = "videos__item";
    video.innerHTML = `
    <iframe width="100%" height="72%" src="${url}"
        title="${titulo}" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
    <div class="descricao-video">
        <img src="${imagem}" alt="logo canal alura">
        <h3>${titulo}</h3>
        <p>${descricao}</p>
    </div>
    `

    return video;
}

async function listaVideos () {
    const listaApi = await conectaApi.listaVideos();

    // para cada listaApi recebe no ultimo da fila dentro da <ul> o constroiCard() 
    listaApi.forEach(elemento => lista.appendChild(constroiCard(
            elemento.titulo, 
            elemento.descricao, 
            elemento.url, 
            elemento.imagem
        )
    ))
}

listaVideos();
