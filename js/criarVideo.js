import { conectaApi } from "./conectaApi.js";

const formulario = document.querySelector("[data-formulario]");

async function criarVideo(evento) {
    evento.preventDefault();

    const imagem = document.querySelector("[data-imagem]").value;
    const url = document.querySelector("[data-url]").value;
    const titulo = document.querySelector("[data-titulo]").value;
    const descricao = Math.floor(Math.random() * 10).toString();

    try{
        await conectaApi.criaVideo(titulo, descricao, url, imagem);

        window.location.href = "../pages/envio-concluído.html";

    } catch (e) {
        alert(e);
        
    }
}

// Quando "ouvir" o submit no formulario vai executar a função criarVideo()
formulario.addEventListener("submit", evento => criarVideo(evento));
