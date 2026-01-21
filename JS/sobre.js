
// Alternar entre modo claro e escuro (Persistente)
function toggleTheme() {
    const isDark = document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode', !isDark);
    
    const icon = document.getElementById('theme-icon');
    icon.innerText = isDark ? 'light_mode' : 'dark_mode';
}