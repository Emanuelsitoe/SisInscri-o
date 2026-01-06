# Sistema de Pagamento - Inscrição

## Descrição

Este projeto é um sistema web simples para inscrição em cursos ou serviços, desenvolvido em HTML, CSS e JavaScript. Permite aos usuários preencher dados pessoais, fazer upload de documentos necessários (como Bilhete de Identidade e Certificado Acadêmico) e realizar pagamentos via M-Pesa, um serviço móvel popular em Moçambique.

## Funcionalidades

- **Formulário de Inscrição**: Coleta dados pessoais do usuário.
- **Upload de Documentos**: Permite anexar arquivos como BI (Bilhete de Identidade) e Certificado Acadêmico, com limite de tamanho (máx. 5MB).
- **Pagamento Integrado**: Integração com M-Pesa para pagamentos móveis, incluindo prefixo +258 para números de Moçambique.
- **Modo Claro/Escuro**: Toggle para alternar entre temas claro e escuro.
- **Design Responsivo**: Layout adaptável para diferentes tamanhos de tela.
- **Validação Básica**: Verificação de campos obrigatórios e formatos.

## Tecnologias Usadas

- **HTML5**: Estrutura da página.
- **CSS3**: Estilização com variáveis CSS para temas dinâmicos.
- **JavaScript**: Funcionalidades interativas, como toggle de tema e manipulação de uploads.
- **Material Icons**: Ícones do Google para interface.
- **Google Fonts (Inter)**: Tipografia moderna.

## Pré-requisitos

- Navegador web moderno (Chrome, Firefox, Safari, etc.).
- Conexão com a internet para carregar fontes e ícones externos.

## Como Executar

1. **Clone o repositório** ou baixe os arquivos para o seu computador.
2. **Abra o arquivo `index.html`** diretamente no navegador.
   - Não é necessário um servidor local, pois é um projeto estático.
3. **Interaja com o formulário**: Preencha os campos, faça uploads e teste o toggle de tema.

## Estrutura do Projeto

```
app/
├── index.html          # Página principal do formulário
├── CSS/
│   └── inscricao.css   # Arquivo de estilos CSS
├── JS/
│   └── inscricao.js    # Scripts JavaScript
└── IMG/                # Pasta para imagens (se houver)
```

## Como Contribuir

1. Faça um fork do projeto.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`).
3. Commit suas mudanças (`git commit -am 'Adiciona nova funcionalidade'`).
4. Push para a branch (`git push origin feature/nova-funcionalidade`).
5. Abra um Pull Request.

## Licença

Este projeto é de código aberto e está sob a licença MIT. Sinta-se à vontade para usar e modificar.

## Autor

Desenvolvido por Emanuel.

## Notas

- O projeto simula o pagamento via M-Pesa; em produção, seria necessário integrar com APIs reais do M-Pesa.
- Certifique-se de que os arquivos de upload sejam tratados adequadamente no backend para um ambiente real.</content>
<parameter name="filePath">d:\EMANUEL\Projectos\Sistema de pagamento\app\README.md