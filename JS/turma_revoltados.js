// ============================================
// CONTROLE DE NAVEGAÇÃO
// ============================================

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
            // Reinicializar listeners após renderizar o formulário
            initFormListeners();
        } else {
            titleElement.innerText = "PAGAMENTO DE MENSALIDADE";
            container.innerHTML = renderMensalidadeForm();
            initFormListeners();
        }
        
        // Remover fade-out e adicionar fade-in
        container.classList.remove('fade-out');
        container.classList.add('fade-in');
        
        // Remover fade-in após a animação completar
        setTimeout(() => {
            container.classList.remove('fade-in');
        }, 300);
        
        // Inicializar listeners dos botões
        initActionButtons();
        
        currentView = type;
        window.scrollTo(0, 0);
    }, 300);
}

function backToMenu() {
    const container = document.getElementById('dynamic-content');
    
    // Animação de saída
    container.classList.add('fade-out');

    setTimeout(() => {
        // Recarregar a página para voltar ao estado original
        location.reload();
    }, 300);
}

function handleBack() {
    if (currentView === 'perfil') {
        window.location.href = 'selecao_servico.html';
    } else {
        location.reload(); // Retorna ao perfil original da instituição
    }
}

// ============================================
// TEMPLATES DOS FORMULÁRIOS
// ============================================

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
                        <input type="text" id="contact" name="contacto" placeholder="8x xxx xxxx" required>
                    </div>
                </div>

                <div class="select-curso">
                    <h3 class="section-label">SELEÇÃO DA(S) DISCIPLINA(S)</h3>
                    <div class="input-group">
                        <label for="curso">DISCIPLINA 1 *</label>
                        <select id="curso" name="curso" required>
                            <option value="" disabled selected>Selecione a disciplina desejada</option>
                            <option value="portugues">Português</option>
                            <option value="matematica">Matemática</option>
                            <option value="fisica">Física</option>
                            <option value="quimica">Química</option>
                            <option value="historia">História</option>
                            <option value="biologia">Biologia</option>
                            <option value="geografia">Geografia</option>
                            <option value="desenho">Desenho</option>
                        </select>
                    </div>
                    <div class="input-group">
                        <label for="curso">DISCIPLINA 2 </label>
                        <select id="curso" name="curso">
                            <option value="" disabled selected>Selecione a disciplina desejada</option>
                            <option value="portugues">Português</option>
                            <option value="matematica">Matemática</option>
                            <option value="fisica">Física</option>
                            <option value="quimica">Química</option>
                            <option value="historia">História</option>
                            <option value="biologia">Biologia</option>
                            <option value="geografia">Geografia</option>
                            <option value="desenho">Desenho</option>
                        </select>
                    </div>
                    <div class="input-group">
                        <label for="curso">DISCIPLINA 3 </label>
                        <select id="curso" name="curso" >
                            <option value="" disabled selected>Selecione a disciplina desejada</option>
                            <option value="portugues">Português</option>
                            <option value="matematica">Matemática</option>
                            <option value="fisica">Física</option>
                            <option value="quimica">Química</option>
                            <option value="historia">História</option>
                            <option value="biologia">Biologia</option>
                            <option value="geografia">Geografia</option>
                            <option value="desenho">Desenho</option>
                        </select>
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

                <button type="button" class="btn-submit-form" id="pagamento" onclick="checkAndPay()">
                    Enviar Dados e Pagar <span class="material-icons-outlined">arrow_forward</span>
                </button>
            </form>
        </div>
        ${renderActionButtons()}
    `;
}

function renderMensalidadeForm() {
    return `
        <div class="form-view slide-up">
            <h2 class="main-title">Pagamento de Mensalidade</h2>
            <p class="description">Preencha os dados para efetuar o pagamento da sua mensalidade.</p>
            
            <form id="paymentForm" class="form-grid">
                <div class="section-group">
                    <h3 class="section-label">INFORMAÇÕES DE PAGAMENTO</h3>
                    <div class="input-group">
                        <label>Mês de Referência *</label>
                        <input type="month" id="mes" name="mes" required>
                    </div>
                    <div class="select-curso">
                    <h3 class="section-label">SELEÇÃO DA(S) DISCIPLINA(S)</h3>
                    <div class="input-group">
                        <label for="curso">Disciplina 1 *</label>
                        <select id="curso" name="curso" required>
                            <option value="" disabled selected>Selecione a disciplina</option>
                            <option value="portugues">Português</option>
                            <option value="matematica">Matemática</option>
                            <option value="fisica">Física</option>
                            <option value="quimica">Química</option>
                            <option value="historia">História</option>
                            <option value="biologia">Biologia</option>
                            <option value="geografia">Geografia</option>
                            <option value="desenho">Desenho</option>
                        </select>
                    </div>
                    <div class="input-group">
                        <label for="disciplina">Disciplina 2</label>
                        <select id="curso" name="curso">
                            <option value="" disabled selected>Selecione a disciplina</option>
                            <option value="portugues">Português</option>
                            <option value="matematica">Matemática</option>
                            <option value="fisica">Física</option>
                            <option value="quimica">Química</option>
                            <option value="historia">História</option>
                            <option value="biologia">Biologia</option>
                            <option value="geografia">Geografia</option>
                            <option value="desenho">Desenho</option>
                        </select>
                    </div>
                    <div class="input-group">
                        <label for="curso">Disciplina 3</label>
                        <select id="curso" name="curso" >
                            <option value="" disabled selected>Selecione a disciplina</option>
                            <option value="portugues">Português</option>
                            <option value="matematica">Matemática</option>
                            <option value="fisica">Física</option>
                            <option value="quimica">Química</option>
                            <option value="historia">História</option>
                            <option value="biologia">Biologia</option>
                            <option value="geografia">Geografia</option>
                            <option value="desenho">Desenho</option>
                        </select>
                    </div>
                </div>  
                <div class="input-group">
                    <label>Valor total *</label>
                    <div class="input-with-addon">
                        <span class="currency-badge">MZN</span>
                        <input type="text" id="valor" name="valor_display" placeholder="0,00" inputmode="decimal" class="valor-input" required>
                    </div>
                    <input type="hidden" id="valor_raw" name="valor">
                </div>
                <section class="section-group">
                    <div class="payment-header">
                        <h3 class="section-label">PAGAMENTO DA MENSALIDADE</h3>
                        <span class="badge-price">650 MT</span>
                    </div>
                    <div class="payment-card">
                        <div class="mpesa-brand">
                            <span class="mpesa-logo">M-Pesa</span>
                            <span class="mpesa-text">Pagamento via telemóvel</span>
                        </div>
                        <div class="input-group">
                            <label>Número de Telefone</label>
                            <div class="phone-wrapper">
                                <span class="prefix">+258</span>
                                <input type="tel" id="phone" placeholder="84 123 4567">
                            </div>
                        </div>
                        <p class="helper-text">Será enviada uma notificação para confirmar o pagamento no seu telemóvel.</p>
                    </div>
                </section>
                </div>
                
                <button type="submit" class="btn-submit-form" onclick="processPayment()">
                    Proceder com Pagamento <span class="material-icons-outlined">payment</span>
                </button>
            </form>
        </div>
        ${renderActionButtons()}
    `;
}

// Formatação e UX para input de valor
function onValorInput(e) {
    const input = e.target;
    // manter somente dígitos e separador decimal
    let v = input.value.replace(/[^0-9.,]/g, '');
    // permitir apenas um separador decimal
    const parts = v.split(/[.,]/);
    if (parts.length > 2) {
        v = parts.slice(0, parts.length - 1).join('') + '.' + parts[parts.length - 1];
    }
    // guardar raw em dataset para usar no blur
    input.dataset.raw = v.replace(',', '.');
}

function onValorBlur(e) {
    const input = e.target;
    const raw = (input.dataset.raw || input.value).toString().replace(',', '.');
    const num = parseFloat(raw);
    if (isNaN(num)) {
        input.value = '';
        const hidden = document.getElementById('valor_raw'); if (hidden) hidden.value = '';
        return;
    }
    // formatar para pt-PT com 2 casas decimais
    input.value = num.toLocaleString('pt-PT', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    const hidden = document.getElementById('valor_raw'); if (hidden) hidden.value = num.toFixed(2);
}

function renderActionButtons() {
    return `
        <div class="action-panel visible">
            <div class="action-buttons">
                <button class="btn-action btn-action-back" onclick="backToMenu()" title="Voltar ao Menu">
                    <span class="material-icons-outlined">home</span>
                    <span class="btn-label">Voltar ao Menu</span>
                </button>
                <button class="btn-action btn-action-mensalidade" onclick="loadForm('mensalidade')" title="Ir para Mensalidades">
                    <span class="material-icons-outlined">payments</span>
                    <span class="btn-label">Mensalidades</span>
                </button>
            </div>
        </div>
    `;
}

// Função para validar campos e abrir modal de inscrição
function checkAndPay() {
    const form = document.getElementById('registrationForm');
    if (form.checkValidity()) {
        document.getElementById('formulariopagamento').showModal();
    } else {
        form.reportValidity(); // Mostra alertas nativos de campo vazio
    }
}

// ============================================
// INICIALIZAÇÃO DE BOTÕES DE AÇÃO
// ============================================

function initActionButtons() {
    const backBtn = document.querySelector('.btn-action-back');
    const mensalidadeBtn = document.querySelector('.btn-action-mensalidade');
    
    if (backBtn) {
        backBtn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.02)';
        });
        backBtn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    }
    
    if (mensalidadeBtn) {
        mensalidadeBtn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.02)';
        });
        mensalidadeBtn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    }
}

// ============================================
// VALIDAÇÃO E SUBMISSÃO DO FORMULÁRIO
// ============================================
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


// ============================================
// INICIALIZAÇÃO DE LISTENERS
// ============================================

function initFormListeners() {
    // Modal de Pagamento
    const dialog = document.getElementById("formulariopagamento");
    const closeBtn = document.getElementById("fecharpagamento");
    
    if (closeBtn && dialog) {
        closeBtn.addEventListener("click", function() {
            dialog.close();
        });
    }
    
    // Formatação de Telefone/Contacto
    const phoneInput = document.getElementById('contacto');
    if (phoneInput) {
        phoneInput.addEventListener('input', formatPhoneNumber);
    }
    
    // Melhorias do Select de Cursos
    initCursoSelect();

    // Listeners para input de valor (format/UX)
    const valorInput = document.getElementById('valor');
    if (valorInput) {
        valorInput.addEventListener('input', onValorInput);
        valorInput.addEventListener('blur', onValorBlur);
        valorInput.addEventListener('focus', function(e) {
            const raw = e.target.dataset.raw || e.target.value;
            e.target.value = (raw || '').toString().replace('.', ',');
        });
    }
}

function initCursoSelect() {
    const cursoSelect = document.getElementById('curso');
    
    if (cursoSelect) {
        // Adicionar visual feedback ao selecionar
        cursoSelect.addEventListener('change', function() {
            if (this.value !== '') {
                this.style.borderColor = '#10b981';
                this.style.backgroundColor = 'rgba(16, 185, 129, 0.05)';
            }
        });
        
        // Remover feedback ao clicar
        cursoSelect.addEventListener('focus', function() {
            this.style.borderColor = 'var(--primary)';
        });
        
        // Restaurar ao sair se vazio
        cursoSelect.addEventListener('blur', function() {
            if (this.value === '') {
                this.style.borderColor = 'var(--border)';
                this.style.backgroundColor = 'var(--surface)';
            }
        });
    }
}

function formatPhoneNumber(e) {
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
}

// ============================================
// TEMA (MODO CLARO/ESCURO)
// ============================================

function toggleTheme() {
    const isDark = document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode', !isDark);
    
    const icon = document.getElementById('theme-icon');
    icon.innerText = isDark ? 'light_mode' : 'dark_mode';
    
    // Persistir preferência no localStorage
    localStorage.setItem('theme', isDark ? 'dark-mode' : 'light-mode');
}