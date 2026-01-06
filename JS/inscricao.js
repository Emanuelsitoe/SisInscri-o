// Função para atualizar o nome do arquivo carregado
function updateFileName(input, statusId) {
    const statusElement = document.getElementById(statusId);
    
    if (input.files && input.files.length > 0) {
        const fileName = input.files[0].name;
        
        // Adiciona uma pequena animação de fade
        statusElement.style.opacity = '0';
        
        setTimeout(() => {
            statusElement.innerText = "✓ " + fileName;
            statusElement.style.color = "#10b981"; // Verde sucesso
            statusElement.style.fontWeight = "600";
            statusElement.style.opacity = '1';
        }, 200);
    }
}

// Alternar entre modo claro e escuro
function toggleTheme() {
    const body = document.body;
    const icon = document.getElementById('theme-icon');
    
    if (body.classList.contains('light-mode')) {
        body.classList.replace('light-mode', 'dark-mode');
        icon.innerText = 'light_mode';
    } else {
        body.classList.replace('dark-mode', 'light-mode');
        icon.innerText = 'dark_mode';
    }
}

// Simulação de envio
document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = document.querySelector('.btn-submit');
    const originalContent = btn.innerHTML;
    
    btn.innerHTML = "Processando...";
    btn.style.opacity = "0.7";
    
    setTimeout(() => {
        alert("Solicitação de pagamento enviada com sucesso!");
        btn.innerHTML = originalContent;
        btn.style.opacity = "1";
    }, 1500);
});