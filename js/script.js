// Função para alternar entre modo claro e escuro
function toggleDarkMode() {
    const body = document.body;
    const themeToggleBtn = document.getElementById('theme-toggle');
    
    // Alternar o atributo data-theme
    if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
        themeToggleBtn.textContent = 'Clique para Modo Noturno';
        localStorage.setItem('theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
        themeToggleBtn.textContent = 'Clique para Modo Claro';
        localStorage.setItem('theme', 'dark');
    }
}

// Verificar preferência salva ao carregar a página
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    const themeToggleBtn = document.getElementById('theme-toggle');
    
    if (savedTheme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
        themeToggleBtn.textContent = 'Clique para Modo Claro';
    } else {
        document.body.removeAttribute('data-theme');
        themeToggleBtn.textContent = 'Clique para Modo Noturno';
    }
}

// Adicionar event listener quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    // Carregar tema salvo
    loadTheme();
    
    // Adicionar event listener ao botão
    const themeToggleBtn = document.getElementById('theme-toggle');
    themeToggleBtn.addEventListener('click', toggleDarkMode);
});