document.addEventListener('DOMContentLoaded', () => {
    const feedbackForm = document.querySelector('.feedback-form');
    const emailInput = feedbackForm.querySelector('input[name="email"]');
    const messageInput = feedbackForm.querySelector('textarea[name="message"]');
    const storageKey = 'feedback-form-state';

    const loadState = () => {
        const savedState = localStorage.getItem(storageKey);
        if (savedState) {
            const { email, message } = JSON.parse(savedState);
            emailInput.value = email;
            messageInput.value = message;
        }
    };

    const saveState = () => {
        const currentState = { email: emailInput.value.trim(), message: messageInput.value.trim() };
        localStorage.setItem(storageKey, JSON.stringify(currentState));
    };

    feedbackForm.addEventListener('input', saveState);

    feedbackForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const currentState = { email: emailInput.value.trim(), message: messageInput.value.trim() };
        console.log('form sending data:', currentState);

        localStorage.removeItem(storageKey);
        emailInput.value = '';
        messageInput.value = '';
    });

    loadState();
});