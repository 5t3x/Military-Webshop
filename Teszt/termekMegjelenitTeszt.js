import Termek from "../Termek.js";

function termekMegjelenitTeszt() {
  const termekAdat = {
    id: 1,
    nev: "Katonai Taktikai Kabát",
    ar: 10000,
    leiras: "Strapabíró, vízálló kabát, 3 zsebbel",
    kategoria: "Ruha fajták",
  };

  const tesztSzuloElem = document.createElement("div");
  document.body.appendChild(tesztSzuloElem);

  new Termek(termekAdat, tesztSzuloElem);

  const cardElem = tesztSzuloElem.querySelector(".card");
  console.assert(cardElem !== null, "A termek elem nem jött létre!");
  console.log("Sikeresen lefutott a termekMegjelenitTeszt!");
}
termekMegjelenitTeszt();
