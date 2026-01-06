/**
 * Máscara para o número de telefone (+258 8X XXX XXXX)
 */
const phoneInput = document.getElementById('phone');
phoneInput.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, ""); // Remove tudo que não é dígito
    
    // Limita a 9 dígitos (padrão 82/83/84/85/86/87...)
    if (value.length > 9) value = value.slice(0, 9);
    
    // Aplica a formatação 84 123 4567
    if (value.length > 5) {
        value = value.replace(/^(\d{2})(\d{3})(\d{4}).*/, "$1 $2 $3");
    } else if (value.length > 2) {
        value = value.replace(/^(\d{2})(\d{0,3}).*/, "$1 $2");
    }
    
    e.target.value = value;
});

/**
 * Atualiza o nome do arquivo com animação e cor de sucesso
 */
function updateFileName(input, statusId) {
    const statusElement = document.getElementById(statusId);
    const card = input.closest('.doc-card');
    
    if (input.files && input.files[0]) {
        const fileName = input.files[0].name;
        
        statusElement.style.opacity = '0';
        
        setTimeout(() => {
            statusElement.innerText = "✓ " + fileName;
            statusElement.style.color = "#10b981"; // Verde sucesso
            statusElement.style.fontWeight = "600";
            statusElement.style.opacity = '1';
            card.style.borderColor = "#10b981"; // Borda verde para indicar que está OK
        }, 200);
    }
}

/**
 * Alternar entre modo claro e escuro (Persistente)
 */
function toggleTheme() {
    const isDark = document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode', !isDark);
    
    const icon = document.getElementById('theme-icon');
    icon.innerText = isDark ? 'light_mode' : 'dark_mode';
}

/**
 * Validação e Envio
 */
document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nome = document.getElementById('fullName').value;
    const telefone = document.getElementById('phone').value;
    const file1 = document.getElementById('upload-bi').files.length;
    const file2 = document.getElementById('upload-cert').files.length;
    const btn = document.querySelector('.btn-submit');

    // Validação simples
    if (!nome || telefone.length < 11 || !file1 || !file2) {
        alert("Por favor, preencha o nome, telefone e anexe todos os documentos.");
        return;
    }

    // Feedback de carregamento no botão
    const originalContent = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = `<span class="material-icons-outlined animate-spin">sync</span> Processando...`;
    btn.style.opacity = "0.7";
    
    setTimeout(() => {
        alert("Solicitação de pagamento enviada com sucesso ao número +258 " + telefone);
        btn.disabled = false;
        btn.innerHTML = originalContent;
        btn.style.opacity = "1";
    }, 2000);
});