export default function ScrollToTopButton() {
    // Wait until DOM is ready
    window.addEventListener("DOMContentLoaded", () => {
        const scrollToTopBtn = document.getElementById("scrollToTopBtn");
        if (!scrollToTopBtn) return;

        window.addEventListener("scroll", () => {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                scrollToTopBtn.style.display = "block";
            } else {
                scrollToTopBtn.style.display = "none";
            }
        });

        scrollToTopBtn.onclick = function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        };
    });
}