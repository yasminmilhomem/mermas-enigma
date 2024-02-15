document.addEventListener("DOMContentLoaded", function () {
    const confettiContainer = document.getElementById("confetti-container");

    // Função para criar um confete colorido
    function createConfetti() {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.backgroundColor = getRandomColor(); // Cor aleatória
        confetti.style.left = Math.random() * window.innerWidth + "px"; // Posição horizontal aleatória
        confettiContainer.appendChild(confetti);

        // Remover o confete após a animação
        confetti.addEventListener("animationend", function () {
            confetti.remove();
        });
    }

    // Função para gerar uma cor aleatória
    function getRandomColor() {
        const colors = ["#330043", "#FFC300", "#FF1493"]; // Cores divertidas: roxo, amarelo e rosa
        return colors[Math.floor(Math.random() * colors.length)];
    }

    // Função para criar uma explosão de confetes
    function confettiExplosion() {
        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement("div");
            confetti.classList.add("confetti");
            confetti.style.backgroundColor = getRandomColor(); // Cor aleatória
            confetti.style.left = Math.random() * window.innerWidth + "px"; // Posição horizontal aleatória
            confetti.style.animationDuration = Math.random() * 3 + 2 + "s"; // Duração da animação aleatória
            confetti.style.top = Math.random() * window.innerHeight + "px"; // Posição vertical aleatória
            confetti.style.transform = "rotate(" + Math.random() * 360 + "deg)"; // Rotação aleatória
            confettiContainer.appendChild(confetti);

            // Remover o confete após a animação
            confetti.addEventListener("animationend", function () {
                confetti.remove();
            });
        }
    }

    // Criar uma explosão de confetes quando a página for carregada
    confettiExplosion();

    // Criar confetes coloridos a cada 0.5 segundos após a explosão inicial
    setTimeout(function () {
        setInterval(createConfetti, 500);
    }, 3000); // Tempo em milissegundos antes de iniciar a queda contínua de confetes
});
