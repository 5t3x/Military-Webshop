import Higlight from "./Highlight.js";
import Gomb from "./Gomb.js";
import Termekek from "./Termekek.js";
import Kosar from "./Kosar.js";
import { termekLista } from "./termekLista_2.js";

// new TermekLista();
new Kosar();
const higlight = new Higlight();
const gomb = new Gomb();


document.getElementById("kosarButton").addEventListener("click", () => {
  const modal = new bootstrap.Modal(document.getElementById("kosarModal"));
  modal.show();
});


document.addEventListener("DOMContentLoaded", () => {
  const szuloElem = document.querySelector(".tartalom");

  // Alapértelmezett lista (BlackMarket nélkül)
  const alapLista = termekLista.filter(
    (termek) => termek.kategoria !== "BlackMarket"
  );
  new Termekek(alapLista, szuloElem);

  // Kategória linkek, amiknek van data-kategoria attribútuma
  const kategoriak = document.querySelectorAll('a.nav-link[data-kategoria]');

  kategoriak.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const kategoria = link.dataset.kategoria;

      // Dark mode a BlackMarket esetén
      if (kategoria === "BlackMarket") {
        document.body.classList.add("darkmode");
      } else {
        document.body.classList.remove("darkmode");
      }

      // Szűrt terméklista készítése
      const szurtLista = termekLista.filter(
        (termek) => termek.kategoria === kategoria
      );

      // Új Termekek példány megjelenítése
      new Termekek(szurtLista, szuloElem);
    });
  });

  // Home gomb - vissza az alap nézethez
  document.querySelector(".navbar-brand").addEventListener("click", (e) => {
    e.preventDefault();
    document.body.classList.remove("darkmode");

    const alapLista = termekLista.filter(
      (termek) => termek.kategoria !== "BlackMarket"
    );
    new Termekek(alapLista, szuloElem);
  });
});