import KosarElem from "./KosarElem.js";

export default class Kosar {
  #lista = [];

  constructor() {
    this.kosarElem = document.querySelector("#kosarModalContent");
    this.kosarCountElem = document.querySelector("#kosarCount");
    this.#setupListener();
    this.frissitMegjelenites();
  }

  #setupListener() {
    window.addEventListener("kosarba", (event) => {
      const termek = event.detail;
      const existingItem = this.#lista.find(
        (item) => item.termek.id === termek.id
      );
      if (existingItem) {
        existingItem.mennyiseg++;
      } else {
        this.#lista.push({ termek, mennyiseg: 1 });
      }
      this.frissitMegjelenites();
    });

    window.addEventListener("novel", (event) => {
      const index = event.detail;
      this.#lista[index].mennyiseg++;
      this.frissitMegjelenites();
    });

    window.addEventListener("csokkent", (event) => {
      const index = event.detail;
      if (this.#lista[index].mennyiseg > 1) {
        this.#lista[index].mennyiseg--;
        this.frissitMegjelenites();
      }
    });

    window.addEventListener("torles", (event) => {
      const index = event.detail;
      this.#lista.splice(index, 1);
      this.frissitMegjelenites();
    });
  }

  frissitMegjelenites() {
    const kosarElem = this.kosarElem;
    kosarElem.innerHTML = "";

    if (this.#lista.length === 0) {
      kosarElem.innerHTML = "<p>A kosár üres.</p>";
    } else {
      this.#lista.forEach((item, index) => {
        new KosarElem(item, kosarElem, index);
      });
    }

    const osszegElem = document.getElementById("kosarOsszeg");
    if (osszegElem) {
      const osszeg = this.#lista.reduce(
        (acc, item) => acc + item.termek.ar * item.mennyiseg,
        0
      );
      osszegElem.textContent = `Összesen: ${osszeg.toLocaleString("hu-HU")} Ft`;
    }

    this.kosarCountElem.textContent = this.#lista.reduce(
      (total, item) => total + item.mennyiseg,
      0
    );
  }

}
