
// Lógica de envio e integração com PaySuite
async function processarInscricao() {
    const form = document.getElementById('registrationForm');
    const btnText = document.getElementById('btnText');
    const btn = document.getElementById('btnConfirmar');

    // 1. Validação Obrigatória
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    // 2. Feedback de Carregamento
    btn.disabled = true;
    btnText.innerText = "Processando Inscrição...";
    
    try {
        // 3. Chamada para a API (Simulada com base no seu código)
        const response = await fetch("https://paysuite.tech/api/v1/payments", {
            method: "POST",
            headers: {
                "Authorization": "Bearer {YOUR_AUTH_KEY}",
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify({
                "amount": "100.50",
                "reference": "INV" + Date.now(), // Referência dinâmica
                "description": "Inscrição Turma dos Revoltados - " + document.getElementById('nome').value,
                "return_url": window.location.href, // Volta para cá
                "callback_url": "https://seu-servidor.com/webhook" 
            })
        });

        const result = await response.json();

        if (result.status === "success" && result.data.checkout_url) {
            // 4. Redirecionar para o Checkout da PaySuite
            window.location.href = result.data.checkout_url;
        } else {
            alert("Erro ao gerar pagamento. Tente novamente.");
            resetButton();
        }

    } catch (error) {
        console.error("Erro na API:", error);
        alert("Falha na conexão com o servidor de pagamentos.");
        resetButton();
    }
}

function resetButton() {
    const btn = document.getElementById('btnConfirmar');
    const btnText = document.getElementById('btnText');
    btn.disabled = false;
    btnText.innerText = "Confirmar e Ir para Pagamento";
}

// Função de atualização de arquivos (Mantendo sua lógica visual)
function updateFileDisplay(input, statusId) {
    const statusElement = document.getElementById(statusId);
    const card = input.closest('.doc-card');
    
    if (input.files && input.files[0]) {
        statusElement.innerText = "✓ " + input.files[0].name;
        statusElement.style.color = "#10b981";
        card.style.borderColor = "#10b981";
        card.style.background = "rgba(16, 185, 129, 0.05)";
    }
}