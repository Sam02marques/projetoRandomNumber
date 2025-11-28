const botao = document.getElementById('botao');
botao.addEventListener('click', () => {
    identifier();
    document.getElementById('imagem').src = 'nova-imagem.jpg'; // Altere para o caminho da sua imagem
});