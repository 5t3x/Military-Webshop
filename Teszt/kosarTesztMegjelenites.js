import Kosar from '../Kosar.js';
import Termek from '../Termek.js';
import KosarElem from '../KosarElem.js';

function kosarTeszt() {

  const termekek = [
    {
      id: 1,
      nev: "Katonai Taktikai Kabát",
      ar: 10000,
      leiras: "Strapabíró, vízálló kabát, 3 zsebbel",
      kategoria: "Ruha fajták"
    },
  ];

  const vartSzoveg = [
    "Katonai Taktikai Kabát",
    "10000",
    "Strapabíró, vízálló kabát, 3 zsebbel",
    "Ruha fajták"
  ];

  let pElem = document.createElement("div");
  let kosarCountElem = document.createElement("div");
  let kosarOsszegElem = document.createElement("div");

  const tesztKosar = new Kosar();
  tesztKosar.kosarElem = pElem;
  tesztKosar.kosarCountElem = kosarCountElem;

  const esemenyKosarba = new CustomEvent("kosarba", { detail: termekek[0] });
  window.dispatchEvent(esemenyKosarba);

  tesztKosar.frissitMegjelenites();

  let kiirtElem = pElem.querySelector(".kosar-item");
  console.assert(kiirtElem !== null, "A kosár elem nem található!");

  console.log("A teszt sikeresen lefutott. (Kosar teszt)");
}
kosarTeszt();
