function sorteiaNumero(max) { 
    return Math.floor(Math.random() * max); 
}

// Seleciona os botões e o elemento de mensagem
const buttons = document.querySelectorAll('.btn');
const messageElement = document.getElementById('message');

const numeroCorreto = sorteiaNumero(5) + 1;

// Adiciona evento de clique a cada botão
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const numeroEscolhido = parseInt(button.textContent); // Obtém o número do botão clicado
        if (numeroEscolhido === numeroCorreto) {
            // Acerto
            messageElement.textContent = `Você acertou! O botão correto é o ${numeroEscolhido}`;
            messageElement.className = 'success'; // Aplica a classe de sucesso (verde)
        } else {
            // Erro
            messageElement.textContent = `Você errou! O botão ${numeroEscolhido} não é o correto`;
            messageElement.className = 'error'; // Aplica a classe de erro (vermelho)
        }
    });
});