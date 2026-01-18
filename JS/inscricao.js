//seta para voltar
let arrow_back = document.getElementById("arrow_back")
arrow_back.addEventListener("click", (e) => {
    
    setTimeout(() => {
        Processando.style.display = "block";
    }, 400);
    setInterval(() => {
        window.location.href = '../index.html';
    })
    
})
//Processando
const Processando = document.getElementById("processando")

 /* Atualiza o nome do arquivo com animação e cor de sucesso
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


//modal pagamento
let dialog = document.getElementById("formulariopagamento");
let openBtn = document.getElementById("pagamento");
let closeBtn = document.getElementById("fecharpagamento");

if (openBtn) {
    openBtn.addEventListener("click", function() {
        dialog.showModal();
    });
}

if (closeBtn) {
    closeBtn.addEventListener("click", function() {
        dialog.close();
    });
}

 // Máscara para o número de telefone (+258 8X XXX XXXX)
 
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
 * Impede o recarregamento da página ao enviar o formulário
 */
/*const registrationForm = document.getElementById('registrationForm');
if (registrationForm) {
    registrationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        
    });
}*/