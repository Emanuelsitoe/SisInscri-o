 // Alternar entre modo claro e escuro (Persistente)
 
function toggleTheme() {
    const isDark = document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode', !isDark);
    
    const icon = document.getElementById('theme-icon');
    icon.innerText = isDark ? 'light_mode' : 'dark_mode';
}

// Filtrar instituições com base na pesquisa
function filterInstitutions() {
    const input = document.getElementById('instSearch').value.toLowerCase();
    const cards = document.getElementsByClassName('inst-card');
    const noResults = document.getElementById('noResults');
    let hasResults = false;

    for (let i = 0; i < cards.length; i++) {
        const name = cards[i].getAttribute('data-name').toLowerCase();
        if (name.includes(input)) {
            cards[i].style.display = "flex";
            hasResults = true;
        } else {
            cards[i].style.display = "none";
        }
    }

    noResults.classList.toggle('hidden', hasResults);
}

// Staggered entrance for institution cards
document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.inst-grid .inst-card');
    cards.forEach(function(card, i) {
        card.classList.add('slide-up');
        card.style.animationDelay = (0.08 * i) + 's';
    });
});