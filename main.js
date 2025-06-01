import Higlight from "./Highlight.js";
import Gomb from "./Gomb.js";
import Termekek from "./Termekek.js";
import Kosar from "./Kosar.js";
import { termekLista } from "./termekLista_2.js";

new Kosar();
const higlight = new Higlight();
const gomb = new Gomb();

let aktualisLista = [];

document.getElementById("kosarButton").addEventListener("click", () => {
  const modal = new bootstrap.Modal(document.getElementById("kosarModal"));
  modal.show();
});

document.addEventListener("DOMContentLoaded", () => {
  const szuloElem = document.querySelector(".tartalom");

  const alapLista = termekLista.filter(
    (termek) => termek.kategoria !== "BlackMarket"
  );
  aktualisLista = alapLista; 
  new Termekek(alapLista, szuloElem);

  const kategoriak = document.querySelectorAll("a.nav-link[data-kategoria]");

  kategoriak.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const kategoria = link.dataset.kategoria;

      document.body.classList.toggle("darkmode", kategoria === "BlackMarket");

      if (kategoria === "BlackMarket") {
        document.body.classList.add("darkmode");
      } else {
        document.body.classList.remove("darkmode");
      }

      const szurtLista = termekLista.filter(
        (termek) => termek.kategoria === kategoria
      );
      aktualisLista = szurtLista; 
      new Termekek(szurtLista, szuloElem);
    });
  });

  document.querySelector(".navbar-brand").addEventListener("click", (e) => {
    e.preventDefault();
    document.body.classList.remove("darkmode");

    const alapLista = termekLista.filter(
      (termek) => termek.kategoria !== "BlackMarket"
    );
    aktualisLista = alapLista; 
    new Termekek(alapLista, szuloElem);
  });

  document.getElementById("rendezes-novekvo").addEventListener("click", () => {
    const rendezett = [...aktualisLista].sort((a, b) => a.ar - b.ar);
    new Termekek(rendezett, szuloElem);
  });

  document.getElementById("rendezes-csokkeno").addEventListener("click", () => {
    const rendezett = [...aktualisLista].sort((a, b) => b.ar - a.ar);
    new Termekek(rendezett, szuloElem);
  });
});
