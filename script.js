
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const closeModal = document.querySelector('.close');
const buttons = document.querySelectorAll('.show-modal');
const buttonContainer = document.querySelector('.button-container');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const modalNumber = button.getAttribute('data-modal');
        modalTitle.textContent = `I’m modal window ${modalNumber}`;
        modal.classList.remove('hidden');
        buttonContainer.classList.add('blur');
    });
});

closeModal.addEventListener('click', () => {
    modal.classList.add('hidden');
    buttonContainer.classList.remove('blur'); 
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.classList.add('hidden');
        buttonContainer.classList.remove('blur');
    }
});
