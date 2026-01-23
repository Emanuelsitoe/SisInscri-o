let currentView = 'perfil';

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    renderView('perfil');
});

function renderView(view) {
    const stage = document.getElementById('main-stage');
    const title = document.getElementById('header-title');
    stage.classList.add('fade-out');

    setTimeout(() => {
        stage.innerHTML = '';
        if(view === 'perfil') {
            title.innerText = "PERFIL DA INSTITUIÇÃO";
            stage.innerHTML = renderPerfil();
        } else if(view === 'inscricao') {
            title.innerText = "INSCRIÇÃO 1/1";
            stage.innerHTML = renderInscricao();
        } else if(view === 'mensalidade') {
            title.innerText = "MENSALIDADES";
            stage.innerHTML = renderMensalidade();
        }
        stage.classList.remove('fade-out');
        stage.classList.add('fade-in');
        currentView = view;
        setupPhoneMask();
    }, 300);
}

function renderPerfil() {
    return `
        <section class="inst-hero fade-in">
            <div class="inst-cover"><img src="https://images.unsplash.com/photo-1523050853021-ea759f974026?auto=format&fit=crop&q=80&w=1000" class="cover-img"></div>
            <div class="inst-profile-info">
                <div class="inst-logo-large"><img src="https://ui-avatars.com/api/?name=Turma+Revoltados&background=18181b&color=fff"></div>
                <div class="inst-text">
                    <h2 class="inst-title">Turma dos Revoltados</h2>
                    <p class="inst-tagline"><span class="material-icons-outlined">verified</span> Maputo, MZ</p>
                </div>
            </div>
        </section>
        <div class="services-grid slide-up">
            <h3 class="section-label">O QUE DESEJA FAZER?</h3>
            <div class="action-cards">
                <div class="action-card" onclick="renderView('inscricao')">
                    <div class="action-icon"><span class="material-icons-outlined">person_add</span></div>
                    <div class="action-info"><h4>Inscrição</h4><p>Novos alunos e cursos</p></div>
                </div>
                <div class="action-card" onclick="renderView('mensalidade')">
                    <div class="action-icon icon-alt"><span class="material-icons-outlined">payments</span></div>
                    <div class="action-info"><h4>Mensalidade</h4><p>Pagamentos correntes</p></div>
                </div>
            </div>
        </div>`;
}

function renderInscricao() {
    return `
        <div class="form-container slide-up">
            <h2 class="main-title">Nova Inscrição</h2>
            <p class="description">Preencha os dados e anexe os documentos.</p>
            <form id="regForm" class="form-grid">
                <div class="section-group">
                    <h3 class="section-label">DADOS PESSOAIS</h3>
                    <div class="input-group">
                        <label>Nome Completo</label>
                        <input type="text" placeholder="Ex: João Manuel Silva" required>
                    </div>
                </div>
                <div class="section-group">
                    <h3 class="section-label">DOCUMENTAÇÃO</h3>
                    <div class="docs-container">
                        <label class="doc-card" for="up-bi">
                            <div class="doc-main">
                                <div class="icon-circle"><span class="material-icons-outlined">badge</span></div>
                                <div class="doc-text">
                                    <span class="doc-name">BI / Dire</span>
                                    <span class="doc-status" id="st-bi">PDF ou Imagem (Max 5MB)</span>
                                </div>
                            </div>
                            <input type="file" id="up-bi" hidden onchange="updateFileName(this, 'st-bi')">
                            <div class="upload-icon-box"><span class="material-icons-outlined">file_upload</span></div>
                        </label>
                    </div>
                </div>
                <button type="button" class="btn-primary-full" onclick="openPayment('500 MT')">Enviar e Pagar</button>
            </form>
        </div>`;
}

function updateFileName(input, statusId) {
    const status = document.getElementById(statusId);
    if (input.files[0]) {
        status.innerText = "✓ " + input.files[0].name;
        status.style.color = "#10b981";
        input.closest('.doc-card').style.borderColor = "#10b981";
    }
}

function openPayment(price) {
    document.getElementById('display-price').innerText = price;
    document.getElementById('modalPagamento').showModal();
}

function closePayment() { document.getElementById('modalPagamento').close(); }

function handleBack() {
    currentView === 'perfil' ? window.location.href = 'selecao_servico.html' : renderView('perfil');
}