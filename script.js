const passwordForm = document.getElementById('password-form');

// Função para alternar entre os temas claro e escuro
function toggleTheme() {
    const htmlElement = document.querySelector('html');
    htmlElement.classList.toggle('dark-theme');
    htmlElement.classList.toggle('light-theme');

    // Verifica se o tema escuro está ativo
    const isDarkTheme = htmlElement.classList.contains('dark-theme');
    
    // Seleciona o elemento com a palavra "poema"
    const poemElement = document.getElementById('poema');

    // Se o tema escuro estiver ativo, mostra a palavra "poema", senão, esconde
    if (isDarkTheme) {
        poemElement.style.display = 'block';
    } else {
        poemElement.style.display = 'none';
    }
}

// Evento de envio do formulário
passwordForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const passwordInput = document.getElementById('password');
    const passwordValue = passwordInput.value.trim().toLowerCase();
    if (passwordValue === 'poema') {
        window.location.href = 'https://www.google.com';
    } else {
        alert('Senha incorreta. Tente novamente.');
    }
});
