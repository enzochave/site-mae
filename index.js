// 1. BANCO DE DADOS: Onde você coloca suas fotos e frases
const listaDeMomentos = [
    {
        foto: "foto1.jpeg",
        frase: "Foto no Graal"
    },
    {
        foto: "foto2.jpeg",
        frase: "Foto em Familia"
    },
    {
        foto: "foto3.jpeg",
        frase: "Outra foto no Graal"
    }
];

let indiceAtual = 0;

// 🎵 SOM DA GALERIA
// Coloque o arquivo de áudio na mesma pasta do projeto
// Exemplo: musica.mp3
const somGaleria = new Audio("fundo.mp3");

somGaleria.loop = true; // Faz a música repetir
somGaleria.volume = 0.5; // Volume de 0 até 1

// 2. FUNÇÃO PARA INICIAR
function começarGaleria() {
    const telaInicial = document.getElementById('tela-inicial');
    const galeriaPrincipal = document.getElementById('galeria-principal');

    // ▶️ Toca o som quando clicar no botão
    somGaleria.play();

    // Inicia a transição de saída da tela inicial
    telaInicial.style.opacity = '0';
    telaInicial.style.transform = 'scale(1.1)';

    setTimeout(() => {
        telaInicial.classList.add('hidden');
        galeriaPrincipal.classList.remove('hidden');
        
        // Carrega a primeira foto e frase
        atualizarConteudo();
        
        // Faz o fade-in da galeria
        setTimeout(() => {
            galeriaPrincipal.style.opacity = '1';
        }, 50);
    }, 800);
}

// 3. FUNÇÃO PARA MUDAR A FOTO
function proximaFoto() {
    const imgElement = document.getElementById('imagem');
    const fraseElement = document.getElementById('frase');

    // Efeito de saída
    imgElement.style.opacity = '0';
    imgElement.style.transform = 'scale(0.95)';
    fraseElement.style.opacity = '0';

    setTimeout(() => {
        // Muda o índice
        indiceAtual = (indiceAtual + 1) % listaDeMomentos.length;

        // Atualiza conteúdo
        atualizarConteudo();

        // Efeito de entrada
        imgElement.style.opacity = '1';
        imgElement.style.transform = 'scale(1)';
        fraseElement.style.opacity = '1';
    }, 400);
}

// 4. FUNÇÃO AUXILIAR
function atualizarConteudo() {
    const imgElement = document.getElementById('imagem');
    const fraseElement = document.getElementById('frase');

    imgElement.src = listaDeMomentos[indiceAtual].foto;
    fraseElement.innerText = listaDeMomentos[indiceAtual].frase;
}

// 5. FUNÇÃO PARA VOLTAR
function voltarInicio() {
    const galeriaPrincipal = document.getElementById('galeria-principal');

    // ⏹️ Para a música
    somGaleria.pause();
    somGaleria.currentTime = 0;

    galeriaPrincipal.style.opacity = '0';
    
    setTimeout(() => {
        location.reload();
    }, 500);
}