// ===============================
// GALERIA DIA DAS MÃES
// ===============================

// 1. BANCO DE DADOS
// Coloque todas as fotos na mesma pasta do projeto

const listaDeMomentos = [

    {
        foto: "foto1.jpeg",
        frase: "Foto no Graal"
    },

    {
        foto: "foto2.jpeg",
        frase: "Foto em Família"
    },

    {
        foto: "foto3.jpeg",
        frase: "Outra foto no Graal"
    },

    {
        foto: "foto5.jpg",
        frase: "Foto com a rainha"
    },

    {
        foto: "foto4.jpg",
        frase: "Foto zuada com a coroa"
    }

];

// ===============================
// CONFIGURAÇÕES
// ===============================

let indiceAtual = 0;

// 🎵 MÚSICA DA GALERIA
// Coloque o arquivo mp3 na mesma pasta
// Exemplo: musica.mp3

const somGaleria = new Audio("musica.mp3");

somGaleria.loop = true;
somGaleria.volume = 0.5;

// ===============================
// INICIAR GALERIA
// ===============================

function começarGaleria() {

    const telaInicial = document.getElementById("tela-inicial");

    const galeriaPrincipal =
        document.getElementById("galeria-principal");

    // ▶️ Toca música
    somGaleria.play();

    // Efeito de saída
    telaInicial.style.opacity = "0";

    telaInicial.style.transform = "scale(1.1)";

    setTimeout(() => {

        telaInicial.classList.add("hidden");

        galeriaPrincipal.classList.remove("hidden");

        // Carrega primeira foto
        atualizarConteudo();

        // Fade da galeria
        setTimeout(() => {

            galeriaPrincipal.style.opacity = "1";

        }, 50);

    }, 800);
}

// ===============================
// PRÓXIMA FOTO
// ===============================

function proximaFoto() {

    const imgElement =
        document.getElementById("imagem");

    const fraseElement =
        document.getElementById("frase");

    // Efeito saída
    imgElement.style.opacity = "0";

    imgElement.style.transform = "scale(0.95)";

    fraseElement.style.opacity = "0";

    setTimeout(() => {

        // Troca índice
        indiceAtual =
            (indiceAtual + 1) % listaDeMomentos.length;

        // Atualiza conteúdo
        atualizarConteudo();

        // Efeito entrada
        imgElement.style.opacity = "1";

        imgElement.style.transform = "scale(1)";

        fraseElement.style.opacity = "1";

    }, 400);
}

// ===============================
// ATUALIZA FOTO E FRASE
// ===============================

function atualizarConteudo() {

    const imgElement =
        document.getElementById("imagem");

    const fraseElement =
        document.getElementById("frase");

    imgElement.src =
        listaDeMomentos[indiceAtual].foto;

    fraseElement.innerText =
        listaDeMomentos[indiceAtual].frase;
}

// ===============================
// VOLTAR AO INÍCIO
// ===============================

function voltarInicio() {

    const galeriaPrincipal =
        document.getElementById("galeria-principal");

    // ⏹️ Para música
    somGaleria.pause();

    somGaleria.currentTime = 0;

    galeriaPrincipal.style.opacity = "0";

    setTimeout(() => {

        location.reload();

    }, 500);
}