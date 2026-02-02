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
                        <input type="text" id="contact" name="contacto" placeholder="8x xxx xxxx" >
                    </div>
                </div>

                <div class="select-curso">
                    <h3 class="section-label">SELEÇÃO DA(S) DISCIPLINA(S)</h3>
                    <div class="input-group">
                        <label for="curso">DISCIPLINA 1 *</label>
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
                            <input type="file" id="up-bi" hidden onchange="updateFileDisplay(this, 'st-bi')" >
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
                            <input type="file" id="up-cert" hidden onchange="updateFileDisplay(this, 'st-cert')" >
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