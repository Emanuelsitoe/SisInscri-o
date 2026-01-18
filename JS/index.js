document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('startButton');

    // Adiciona a animação de pulso ao carregar
    startButton.classList.add('pulsing');

    // Remove o pulso após 3 segundos, ou quando o mouse passa por cima
    setTimeout(() => {
        startButton.classList.remove('pulsing');
    }, 3000);

    // Opcional: Animação ao clique
    startButton.addEventListener('click', (e) => {
        e.preventDefault(); // Evita o comportamento padrão se for um link
        startButton.textContent = 'Carregando...'; // Feedback ao usuário
        startButton.classList.remove('pulsing');
        startButton.style.opacity = '0.7';

        
        // Simulação de navegação após 1 segundo
        setTimeout(() => {
            window.location.href = '../inscricao.html'; 
            startButton.textContent = 'Começar'; // 
            startButton.style.opacity = '1';
        }, 1000);
    });
});