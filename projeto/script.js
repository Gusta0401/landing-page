document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("DOMContentLoaded", () => {
        const track = document.querySelector(".carousel-track");
        const items = Array.from(track.children); // Pega os itens do carrossel
        const prevButton = document.querySelector(".carousel-button.prev");
        const nextButton = document.querySelector(".carousel-button.next");
    
        let currentIndex = 0; // Índice do item atual
    
        // Função para atualizar a posição do carrossel
        function updateCarousel() {
            const itemWidth = items[0].getBoundingClientRect().width; // Largura de um item
            track.style.transform = `translateX(-${currentIndex * itemWidth}px)`; // Move o carrossel
        }
    
        // Evento para o botão "❮" (anterior)
        prevButton.addEventListener("click", () => {
            currentIndex = (currentIndex === 0) ? items.length - 1 : currentIndex - 1; // Volta ao último item se estiver no primeiro
            updateCarousel();
        });
    
        // Evento para o botão "❯" (próximo)
        nextButton.addEventListener("click", () => {
            currentIndex = (currentIndex === items.length - 1) ? 0 : currentIndex + 1; // Volta ao primeiro item se estiver no último
            updateCarousel();
        });
    });

    // Formulário de Contato
    const form = document.getElementById("contact-form");
    const responseMessage = document.getElementById("form-response");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        responseMessage.classList.remove("hidden");
        form.reset();
    });
});