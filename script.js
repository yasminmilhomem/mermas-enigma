const passwordForm = document.getElementById('password-form');

// Função para alternar entre os temas claro e escuro
function toggleTheme() {
    const htmlElement = document.querySelector('html');
    htmlElement.classList.toggle('dark-theme');
    htmlElement.classList.toggle('light-theme');
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
