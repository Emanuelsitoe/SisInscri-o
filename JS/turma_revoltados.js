// Variável para rastrear onde estamos (perfil, inscricao, mensalidade)
let currentView = 'perfil';

function loadForm(type) {
    const container = document.getElementById('dynamic-content');
    const mainHeader = document.querySelector('.main-header');
    
    // Animação de saída
    container.classList.add('fade-out');

    setTimeout(() => {
        // Atualizar título do header
        let titleElement = mainHeader.querySelector('.step-title');
        if (!titleElement) {
            titleElement = document.createElement('h1');
            titleElement.className = 'step-title';
            mainHeader.appendChild(titleElement);
        }
        
        if (type === 'inscricao') {
            titleElement.innerText = "NOVA INSCRIÇÃO";
            container.innerHTML = renderInscricaoForm();
        } else {
            titleElement.innerText = "PAGAMENTO DE MENSALIDADE";
            container.innerHTML = renderMensalidadeForm();
        }
        
        // Remover fade-out e adicionar fade-in
        container.classList.remove('fade-out');
        container.classList.add('fade-in');
        
        // Remover fade-in após a animação completar
        setTimeout(() => {
            container.classList.remove('fade-in');
        }, 300);
        
        currentView = type;
        window.scrollTo(0, 0);
    }, 300);
}

function handleBack() {
    if (currentView === 'perfil') {
        window.location.href = 'selecao_servico.html';
    } else {
        location.reload(); // Retorna ao perfil original da instituição
    }
}

// Templates dos Formulários (Strings HTML)
function renderInscricaoForm() {
    return `
        <div class="form-view slide-up">
            <h2 class="main-title">Nova Inscrição</h2>
            <p class="description">Preencha os campos obrigatórios para liberar o pagamento.</p>
            
            <form id="registrationForm" class="form-grid">
                <div class="section-group">
                    <h3 class="section-label">DADOS PESSOAIS</h3>
                    <div class="input-group">
                        <label>Nome Completo *</label>
                        <input type="text" id="nome" name="nome" placeholder="Seu nome completo" required>
                    </div>
                    <div class="input-group">
                        <label>E-mail / Contacto *</label>
                        <input type="text" id="contacto" name="contacto" placeholder="8x xxx xxxx" required>
                    </div>
                </div>

                <div class="section-group">
                    <h3 class="section-label">DOCUMENTAÇÃO</h3>
                    <div class="docs-container">
                        <label class="doc-card" for="up-bi">
                            <div class="doc-main">
                                <div class="icon-circle"><span class="material-icons-outlined">badge</span></div>
                                <div class="doc-text">
                                    <span class="doc-name">BI / DIRE *</span>
                                    <span class="doc-status" id="st-bi">Selecione o arquivo</span>
                                </div>
                            </div>
                            <input type="file" id="up-bi" hidden onchange="updateFileDisplay(this, 'st-bi')" required>
                            <div class="upload-icon-box"><span class="material-icons-outlined">file_upload</span></div>
                        </label>

                        <label class="doc-card" for="up-cert">
                            <div class="doc-main">
                                <div class="icon-circle"><span class="material-icons-outlined">school</span></div>
                                <div class="doc-text">
                                    <span class="doc-name">Certificado *</span>
                                    <span class="doc-status" id="st-cert">Certificado de Habilitações</span>
                                </div>
                            </div>
                            <input type="file" id="up-cert" hidden onchange="updateFileDisplay(this, 'st-cert')" required>
                            <div class="upload-icon-box"><span class="material-icons-outlined">file_upload</span></div>
                        </label>
                    </div>
                </div>

                <button type="button" class="btn-submit-form" id =""pagamento onclick="checkAndPay()">
                    Enviar Dados e Pagar <span class="material-icons-outlined">arrow_forward</span>
                </button>
            </form>
        </div>
    `;
}

// Função para validar campos e abrir modal
function checkAndPay() {
    const form = document.getElementById('registrationForm');
    if (form.checkValidity()) {
        document.getElementById('formulariopagamento').showModal();
    } else {
        form.reportValidity(); // Mostra alertas nativos de campo vazio
        
    }
    
}
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

// Atualiza nome do arquivo com animação (como no seu inscricao.js)
function updateFileDisplay(input, statusId) {
    const statusElement = document.getElementById(statusId);
    const card = input.closest('.doc-card');
    
    if (input.files && input.files[0]) {
        const fileName = input.files[0].name;
        statusElement.innerText = "✓ " + fileName;
        statusElement.style.color = "#10b981";
        card.style.borderColor = "#10b981";
        card.style.background = "rgba(16, 185, 129, 0.05)";
    }
}


 // Alternar entre modo claro e escuro (Persistente)
 
function toggleTheme() {
    const isDark = document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode', !isDark);
    
    const icon = document.getElementById('theme-icon');
    icon.innerText = isDark ? 'light_mode' : 'dark_mode';
}