// ============================================
// CONTROLE DE NAVEGAÇÃO
// ============================================

let currentView = 'perfil';

function loadForm(type) {
    const container = document.getElementById('dynamic-content');
    const mainHeader = document.querySelector('.main-header');
    
    container.classList.add('fade-out');

    setTimeout(() => {
        let titleElement = mainHeader.querySelector('.step-title');
        if (!titleElement) {
            titleElement = document.createElement('h1');
            titleElement.className = 'step-title';
            mainHeader.appendChild(titleElement);
        }
        
        if (type === 'inscricao') {
            titleElement.innerText = "NOVA INSCRIÇÃO";
            container.innerHTML = renderInscricaoForm();
            initFormListeners();
        } else {
            titleElement.innerText = "PAGAMENTO DE MENSALIDADE";
            container.innerHTML = renderMensalidadeForm();
            initFormListeners();
        }
        
        container.classList.remove('fade-out');
        container.classList.add('fade-in');
        
        setTimeout(() => {
            container.classList.remove('fade-in');
        }, 300);
        
        currentView = type;
        window.scrollTo(0, 0);
    }, 300);
}

// ============================================
// COMPONENTES DE INTERFACE (RENDERIZAÇÃO)
// ============================================

// ... (mantenha o loadForm e as funções de tema)

function renderInscricaoForm() {
    return `
        <div class="form-view fade-in" id="registration-container">
            <h2 class="main-title">Nova Inscrição</h2>
            <p class="description">Preencha seus dados para gerar sua fatura de inscrição.</p>
            
            <form id="mainRegistrationForm" action="/seu-endpoint-de-submissao" method="POST" enctype="multipart/form-data">
                <div id="step-1">
                    <div class="section-group">
                        <h3 class="section-label">DADOS PESSOAIS</h3>
                        <div class="input-group">
                            <label>Nome Completo *</label>
                            <input type="text" name="nome" id="nome_aluno" placeholder="Como no BI" required>
                        </div>
                        <div class="input-group">
                            <label>Contacto *</label>
                            <input type="tel" id="phone" name="telefone" placeholder="8x xxx xxxx" >
                        </div>
                    </div>
                    <div class="select-curso">
                        <h3 class="section-label">SELEÇÃO DA(S) DISCIPLINA(S)</h3>
                        <div class="input-group">
                            <label for="curso">DISCIPLINA 1 *</label>
                            <select id="curso1" name="disciplina1" >
                                <option value="" disabled selected>Selecione a disciplina desejada</option>
                                <option value="portugues">Português</option>
                                <option value="Matematica">Matemática</option>
                                <option value="Fisica">Física</option>
                                <option value="quimica">Química</option>
                                <option value="historia">História</option>
                                <option value="biologia">Biologia</option>
                                <option value="geografia">Geografia</option>
                                <option value="desenho">Desenho</option>
                            </select>
                        </div>
                        <div class="input-group">
                            <label for="curso">DISCIPLINA 2 </label>
                            <select id="curso" name="disciplina2">
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
                            <select id="curso" name="disciplina3" >
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
                            <div class="doc-upload-minimal">
                                <input type="file" name="doc_bi" id="up-bi" hidden onchange="updateFileName(this, 'status-bi')" required>
                                <label for="up-bi"><span class="material-icons-outlined">badge</span> <span id="status-bi">BI ou DIRE</span></label>
                            </div>
                            <div class="doc-upload-minimal">
                                <input type="file" name="doc_cert" id="up-cert" hidden onchange="updateFileName(this, 'status-cert')" required>
                                <label for="up-cert"><span class="material-icons-outlined">school</span> <span id="status-cert">Certificado</span></label>
                            </div>
                        </div>
                    </div>

                    <button type="button" class="btn-primary-full" onclick="gerarFatura()">
                        Gerar Fatura e Instruções <span class="material-icons-outlined">description</span>
                    </button>
                </div>

                <div id="step-2" class="hidden">
                    <div class="invoice-card slide-up">
                        <div class="invoice-header">
                            <span class="invoice-badge">FATURA PROFORMA</span>
                            <span class="invoice-ref" id="display-ref">#---</span>
                        </div>
                        
                        <div class="invoice-details">
                            <p><strong>Candidato:</strong> <span id="confirm-nome">---</span></p>
                            <p><strong>Telefone:</strong> <span id="confirm-numero">---</span></p>
                            <p><strong>Serviço:</strong> Inscrição Anual</p>
                            <p><strong>Valor:</strong> <mark>500.00 MT</mark></p>
                        </div>

                        <div class="mpesa-instructions">
                            <h4>PAGAMENTO VIA M-PESA</h4>
                            <div class="pay-row" onclick="copiarTexto('841234567')">
                                <span>Número: <strong>84 123 4567</strong></span>
                                <span class="material-icons-outlined">content_copy</span>
                            </div>
                            <div class="pay-row" onclick="copiarTexto(document.getElementById('input-ref').value)">
                                <span>Referência: <strong id="confirm-ref">---</strong></span>
                                <span class="material-icons-outlined">content_copy</span>
                            </div>
                        </div>

                        <input type="hidden" name="referencia_sistema" id="input-ref">
                        
                        <div class="input-group transaction-input">
                            <label>Código da Transação (SMS M-Pesa) *</label>
                            <input type="text" name="codigo_transacao" id="cod_mpesa" placeholder="Ex: RJ82X..." required>
                        </div>

                        <div class="invoice-footer">
                            <button type="button" class="btn-primary-full" onclick="mostrarFaturaDownload()">
                                Confirmar Pagamento <span class="material-icons-outlined">verified</span>
                            </button>
                            <button type="button" class="btn-text" onclick="voltarDados()">Editar dados</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        ${renderActionButtonsincricao()}
    `;
}

function gerarFatura() {
    const nome = document.getElementById('nome_aluno').value;
    const phone = document.getElementById('phone').value;
    const bi = document.getElementById('up-bi').files.length;
    const cert = document.getElementById('up-cert').files.length;

    if (!nome || !phone || !bi || !cert) {
        alert("Por favor, preencha todos os dados e anexe os documentos.");
        return;
    }

    const ref = "TR-" + Math.floor(1000 + Math.random() * 9000);
    
    // Preencher dados na fatura
    document.getElementById('display-ref').innerText = "#" + ref;
    document.getElementById('confirm-ref').innerText = ref;
    document.getElementById('input-ref').value = ref;
    document.getElementById('confirm-nome').innerText = nome;
    document.getElementById('confirm-numero').innerText = phone;
    //document.getElementById('confirm-disciplina1').innerText = document.getElementById('curso1').value;

    // Trocar visões
    document.getElementById('step-1').classList.add('hidden');
    document.getElementById('step-2').classList.remove('hidden');
    
    // Salvar no localStorage caso a página recarregue
    localStorage.setItem('temp_reg', JSON.stringify({nome, phone, ref}));
}

function voltarDados() {
    document.getElementById('step-2').classList.add('hidden');
    document.getElementById('step-1').classList.remove('hidden');
}

// ... (mantenha updateFileName, copiarTexto, etc)

function renderMensalidadeForm() {
    return `
        <div class="form-view">
            <h2 class="main-title">Pagamento de Quotas</h2>
            <p class="description">Informe seu código de aluno para verificar faturas pendentes.</p>
            <div class="payment-card-modern">
                <div class="input-group">
                    <label>Código do Aluno / Membro</label>
                    <input type="text" placeholder="Ex: TR-2024-001">
                </div>
                <button class="btn-primary-full">Verificar Faturas</button>
                <div class="mpesa-info-box">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/29/M-Pesa_Logo.png" style="height:20px">
                    <span>Pagamento via M-Pesa</span>
                </div>
            </div>
        </div>
        ${renderActionButtonsincricao()}
    `;

}

function renderActionButtonsincricao() {
    return `
        <div class="action-panel visible">
            <div class="action-buttons">
                <button class="btn-action btn-action-back" onclick="backToMenu()" title="Voltar ao Menu">
                    <span class="material-icons-outlined">home</span>
                    <span class="btn-label">Voltar ao Menu</span>
                </button>
                <button class="btn-action btn-action-mensalidade" onclick="loadForm('inscricao')" title="Ir para Inscrição">
                    <span class="material-icons-outlined">payments</span>
                    <span class="btn-label">Incrições</span>
                </button>
            </div>
        </div>
    `;
}


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
// LÓGICA DE PAGAMENTO MANUAL (NOVO)
// ============================================
function validarEGerarPagamento() {
    const form = document.getElementById('registrationForm');
    
    // Valida se todos os campos (incluindo os 2 arquivos) estão preenchidos
    if (form.checkValidity()) {
        const referencia = "INS-" + Math.floor(1000 + Math.random() * 9999);
        abrirModalMpesa(referencia);
    } else {
        form.reportValidity();
    }
}

function abrirModalMpesa(ref) {
    let modal = document.getElementById('modalMpesa');
    if (!modal) {
        modal = document.createElement('dialog');
        modal.id = 'modalMpesa';
        modal.className = 'modern-modal';
        document.body.appendChild(modal);
    }

    modal.innerHTML = `
        <div class="modal-body" style="padding: 2.5rem; position: relative; max-width: 400px;">
            <span onclick="this.closest('dialog').close()" style="position:absolute; right:1.5rem; top:1rem; cursor:pointer; font-size:1.5rem">×</span>
            <h3 style="font-weight: 800; margin-bottom: 1.5rem;">PAGAMENTO M-PESA</h3>
            
            <div style="background: var(--surface); padding: 1.5rem; border-radius: 1rem; border: 1px solid var(--border); margin-bottom: 1.5rem;">
                <p style="font-size: 0.8rem; color: var(--text-sec); margin-bottom: 0.5rem;">1. Valor a enviar: <b>500.00 MT</b></p>
                <div onclick="copiarTexto('841234567')" style="display:flex; justify-content:space-between; background:var(--bg); padding:0.8rem; border-radius:0.5rem; cursor:pointer; border:1px solid var(--border); margin-bottom:1rem">
                    <span style="font-weight:700">84 123 4567</span> <span class="material-icons-outlined">content_copy</span>
                </div>
                
                <p style="font-size: 0.8rem; color: var(--text-sec); margin-bottom: 0.5rem;">2. Use esta Referência:</p>
                <div onclick="copiarTexto('${ref}')" style="display:flex; justify-content:space-between; background:rgba(24,24,27,0.05); padding:0.8rem; border-radius:0.5rem; cursor:pointer; border:2px dashed var(--primary)">
                    <span style="font-weight:700">${ref}</span> <span class="material-icons-outlined">content_copy</span>
                </div>
            </div>

            <label style="display:block; margin-bottom:0.5rem; font-size:0.85rem; font-weight:600">3. Introduza o Código da Transação:</label>
            <input type="text" id="cod_mpesa" placeholder="Ex: RJ82..." style="width:100%; padding:1rem; border-radius:0.8rem; border:1px solid var(--border); text-transform:uppercase; margin-bottom: 1rem;">
            
            <button class="btn-primary-full" onclick="finalizarProcesso('${ref}')">Confirmar Envio</button>
        </div>
    `;
    modal.showModal();
}

function finalizarProcesso(ref) {
    const cod = document.getElementById('cod_mpesa').value;
    if (cod.length < 5) {
        alert("Por favor, introduza o código da transação M-Pesa recebido por SMS.");
        return;
    }


    document.getElementById('modalMpesa').close();
    const container = document.getElementById('dynamic-content');
    
    // Sucesso - Mostra a tela de confirmação sem deixar em branco
    container.innerHTML = `
        <div class="success-view fade-in" style="text-align:center; padding: 4rem 1.5rem;">
            <span class="material-icons-outlined" style="font-size:5rem; color:#10b981">history_toggle_off</span>
            <h2 style="margin: 1.5rem 0 0.5rem 0;">Aguardando Confirmação</h2>
            <p style="color:var(--text-sec); margin-bottom: 2rem;">Sua inscrição (Referência: <b>${ref}</b>) está sendo verificada. O código <b>${cod}</b> foi registrado.</p>
            <button class="btn-primary-full" onclick="location.reload()">Voltar ao Perfil</button>
        </div>
    `;

}
// ============================================
// UTILITÁRIOS E AUXILIARES (MANTIDOS)
// ============================================

function updateFileName(input, statusId) {
    const status = document.getElementById(statusId);
    if (input.files[0]) {
        status.innerText = "✓ " + input.files[0].name;
        status.style.color = "#10b981";
    }
}

function initFormListeners() {
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', formatPhoneNumber);
    }
}

function formatPhoneNumber(e) {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 9) value = value.slice(0, 9);
    if (value.length > 5) {
        value = value.replace(/^(\d{2})(\d{3})(\d{4}).*/, "$1 $2 $3");
    } else if (value.length > 2) {
        value = value.replace(/^(\d{2})(\d{0,3}).*/, "$1 $2");
    }
    e.target.value = value;
}

function toggleTheme() {
    const isDark = document.body.classList.toggle('dark-mode');
    const icon = document.getElementById('theme-icon');
    if (icon) {
        icon.innerText = isDark ? 'light_mode' : 'dark_mode';
    }
}

// ============================================
// VISUALIZAÇÃO E DOWNLOAD DA FATURA (PDF)
// ============================================
function mostrarFaturaDownload() {
    const container = document.getElementById('dynamic-content');
    const temp = JSON.parse(localStorage.getItem('temp_reg') || 'null');
    const ref = (document.getElementById('input-ref') && document.getElementById('input-ref').value) || (temp && temp.ref) || ('TR-' + Math.floor(1000 + Math.random() * 9000));
    const nome = (document.getElementById('confirm-nome') && document.getElementById('confirm-nome').innerText) || (temp && temp.nome) || '---';
    const numero = (document.getElementById('confirm-numero') && document.getElementById('confirm-numero').innerText) || (temp && temp.phone) || '---';
    const cod = document.getElementById('cod_mpesa') ? document.getElementById('cod_mpesa').value : '---';

    container.innerHTML = `
        <div class="invoice-download-view fade-in" style="max-width:900px; margin: 2rem auto; padding:0 1rem;">
            <div id="invoice-pdf" style="padding:2rem; border-radius:1rem; background:var(--white); border:1px solid var(--border); color:var(--text-main);">
                <header style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem;">
                    <div>
                        <h2 style="; color:var(--primary); text-align: center;">Turma dos Revoltados</h2>
                        <div style="color:var(--text-sec); font-size:0.9rem;">Fatura Proforma</div>
                    </div>
                    <div style="text-align:right;">
                        <div style="font-weight:800; font-size:1rem;">Ref: ${ref}</div>
                        <div style="color:var(--text-sec); font-size:0.85rem;">Valor: <strong>500.00 MT</strong></div>
                    </div>
                </header>

                <section style="display:flex; gap:2rem; margin-bottom:1rem; flex-wrap:wrap;">
                    <div style="flex:1; min-width:230px;">
                        <p style="margin:0; color:var(--text-sec);">Candidato</p>
                        <h3 style="margin:0.25rem 0 0 0;">${nome}</h3>
                        <p style="margin:0.25rem 0 0 0; color:var(--text-sec)">${numero}</p>
                    </div>
                    <div style="flex:1; min-width:230px;">
                        <p style="margin:0; color:var(--text-sec)">Serviço</p>
                        <h4 style="margin:0.25rem 0 0 0;">Inscrição Anual</h4>
                        <p style="margin:0.25rem 0 0 0; color:var(--text-sec)">Validade: 30 dias</p>
                    </div>
                </section>

                <hr style="border:none; border-top:1px solid var(--border); margin:1rem 0;">

                <p style="font-size:0.85rem; color:var(--text-sec);">Instruções de Pagamento via M-Pesa:</p>
                <div style="display:flex; gap:1rem; margin-top:1rem; flex-wrap:wrap;">
                    <div style="flex:1; min-width:180px; background:var(--surface); padding:0.75rem; border-radius:0.6rem; border:1px solid var(--border);">
                        <strong>Número</strong>
                        <div style="margin-top:0.25rem; font-weight:700">84 123 4567</div>
                    </div>
                    <div style="flex:1; min-width:180px; background:rgba(24,24,27,0.03); padding:0.75rem; border-radius:0.6rem; border:1px dashed var(--primary);">
                        <strong>Referência</strong>
                        <div style="margin-top:0.25rem; font-weight:700">${ref}</div>
                        
                    </div>
                </div>
                <div style="display:flex; gap:1rem; margin-top:1rem; flex-wrap:wrap;">
                    <div style="flex:1; min-width:180px; background:rgba(24,24,27,0.03); padding:0.75rem; border-radius:0.6rem; border:1px dashed var(--primary);">
                        <strong>Código da transação</strong>
                        <div style="margin-top:0.25rem; font-weight:700">${cod}</div>
                </div>

                <div style="margin-top:1.25rem; font-size:0.85rem; color:var(--text-sec);">
                    <p>Após efetuar o pagamento, guarde o código da transação e utilize a opção de enviar para confirmação junto à nossa equipa.</p>
                </div>
            </div>

            <div style="display:flex; gap:0.75rem; justify-content:flex-end; margin-top:1.25rem;">
                <button id="backFromInvoice" class="btn-text" style="padding:0.85rem 1rem; border-radius:0.8rem; border:1px solid var(--border); background:transparent;">Voltar</button>
                <button id="downloadPdfBtn" class="btn-primary-full" style="padding:0.85rem 1rem;">Baixar PDF <span class="material-icons-outlined">download</span></button>
            </div>
        </div>
    `;

    // instalar handlers
    const downloadBtn = document.getElementById('downloadPdfBtn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function () {
            const element = document.getElementById('invoice-pdf');
            const opt = {
                margin:       0.4,
                filename:     `${ref}_fatura.pdf`,
                image:        { type: 'jpeg', quality: 0.98 },
                html2canvas:  { scale: 2 },
                jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
            };
            if (window.html2pdf) {
                html2pdf().set(opt).from(element).save();
            } else {
                alert('Erro: biblioteca de geração de PDF não carregada.');
            }
        });
    }

    const backBtn = document.getElementById('backFromInvoice');
    if (backBtn) {
        backBtn.addEventListener('click', function () {
            // Voltar para o formulário da inscrição e restaurar a vista da fatura (step-2) se houver dados temporários
            loadForm('inscricao');
            setTimeout(() => {
                const temp2 = JSON.parse(localStorage.getItem('temp_reg') || 'null');
                if (temp2) {
                    const inp = document.getElementById('input-ref');
                    if (inp) inp.value = temp2.ref;
                    const disp = document.getElementById('display-ref');
                    if (disp) disp.innerText = '#' + temp2.ref;
                    const cr = document.getElementById('confirm-ref');
                    if (cr) cr.innerText = temp2.ref;
                    const cn = document.getElementById('confirm-nome');
                    if (cn) cn.innerText = temp2.nome;
                    const cnum = document.getElementById('confirm-numero');
                    if (cnum) cnum.innerText = temp2.phone;

                    const s1 = document.getElementById('step-1');
                    const s2 = document.getElementById('step-2');
                    if (s1 && s2) {
                        s1.classList.add('hidden');
                        s2.classList.remove('hidden');
                    }
                }
            }, 350);
        });
    }
}