export default function ScrollToTopButton() {
    // Kiválasztjuk a gombot
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");

    // Amikor a felhasználó lefelé görget, figyeljük, hogy mikor jelenjen meg a gomb
    window.onscroll = function () {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            scrollToTopBtn.style.display = "block";  // Gomb megjelenítése
        } else {
            scrollToTopBtn.style.display = "none";   // Gomb elrejtése
        }
    };

    // Ha a felhasználó kattint a gombra, akkor görgessen vissza a tetejére
    scrollToTopBtn.onclick = function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"  // Simább görgetés
        });
    };
};