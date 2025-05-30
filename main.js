import Higlight from "./Highlight.js";
import Gomb from "./Gomb.js";
import TermekLista from "./Termekek.js";
import Kosar from "./Kosar.js";

new TermekLista();
new Kosar();
const higlight = new Higlight();
const gomb = new Gomb();


document.getElementById("kosarButton").addEventListener("click", () => {
  const modal = new bootstrap.Modal(document.getElementById("kosarModal"));
  modal.show();
});
