export default class Termek {
  #adatok;
  #szuloElem;
  #index;
  #kosarGOMB;

  constructor(adatokObjektum, szuloElem, index) {
    this.#adatok = adatokObjektum;
    this.#szuloElem = szuloElem;
    this.#index = index;
    this.megjelenit();
    // this.kosarbaEvent();
  }

  megjelenit() {
    this.#szuloElem.insertAdjacentHTML(
      "beforeend",
      `
                <div class="card text-center mb-3" style="width: 18rem;">
                        <div class="card-body">
                                <h5 class="card-title">${this.#adatok.nev}</h5>
                                <p class="card-text">${this.#adatok.leiras}</p>
                                <p class="card-text">${this.#adatok.ar}</p>
                                <button class="btn btn-primary kosarba" id="kosarba${this.#index}">Kosárba</button>
                        </div>
                </div>`
    );
    this.#kosarbaGombEsemeny();
  }
  #kosarbaGombEsemeny() {
    const kosarbaGomb = document.getElementById(`kosarba${this.#index}`);
    if (kosarbaGomb) {
      kosarbaGomb.addEventListener("click", () => {
        console.log(`${this.#adatok.nev} hozzáadva a kosárhoz!`);
        const esemeny = new CustomEvent("kosarba", {
          detail: this.#adatok,
        });
        window.dispatchEvent(esemeny);
      });
    } else {
      console.error(`Nem található a kosárba gomb: kosarba${this.#index}`);
    }
  }
}
