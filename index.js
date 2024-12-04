
function toggleInfo(button) {
    const info = button.nextElementSibling;
    if (info.style.display === "block") {
        info.style.display = "none";
        button.textContent = "Mais Informações";
    } else {
        info.style.display = "block";
        button.textContent = "Menos Informações";
    }
}


function openModal(src, title, caption) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const modalCaption = document.getElementById("modalCaption");

    modal.style.display = "block";
    modalImg.src = src;
    modalCaption.innerHTML = `<strong>${title}</strong><br>${caption}`;
}


function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}
//Essa parte referente item do formulario


const form = document.getElementById('feedbackForm');
const feedbackMessage = document.getElementById('feedbackMessage');


form.addEventListener('submit', function (event) {
    event.preventDefault(); 

    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Valida os campos
    if (!name) {
        showFeedbackMessage('Por favor, preencha o nome.', 'red');
        return;
    }

    if (!validateEmail(email)) {
        showFeedbackMessage('Por favor, insira um e-mail válido.', 'red');
        return;
    }

    if (!message) {
        showFeedbackMessage('Por favor, insira sua mensagem.', 'red');
        return;
    }

    // Mostra mensagem de sucesso
    showFeedbackMessage('Obrigado pelo seu feedback!', 'green');
    form.reset(); // Limpa o formulário
});

// Valida o formato do e-mail
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Mostra mensagens de feedback
function showFeedbackMessage(message, color) {
    feedbackMessage.textContent = message;
    feedbackMessage.style.color = color;
}
