export default class Gomb {
    constructor() {
        this.initScrollButton();
    }

    initScrollButton() {
        const backToTopBtn = document.getElementById('backToTopBtn');

        if (!backToTopBtn) return;

        window.addEventListener('scroll', () => {
            backToTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    };
}