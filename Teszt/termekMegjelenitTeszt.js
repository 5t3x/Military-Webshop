import Termek from "../Termek.js";

function termekMegjelenitTeszt() {

  const termekAdat = {
    nev: "Taktikai hátizsák",
    leiras: "50 literes, strapabíró, vízálló",
    ar: 12000,
    kategoria: "Felszerelés",
  };

  const tesztSzuloElem = document.createElement("div");
  document.body.appendChild(tesztSzuloElem);

  new Termek(termekAdat, tesztSzuloElem);

  const cardElem = tesztSzuloElem.querySelector(".card");
  console.assert(cardElem !== null, "A termek elem nem jött létre!");
  console.log("Sikeresen lefutott a termekMegjelenitTeszt!");

}
termekMegjelenitTeszt();
