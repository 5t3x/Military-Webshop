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
                                <button class="btn btn-primary">Kosárba</button>
                        </div>
                </div>`
    );
    // this.#szuloElem.appendChild(card);
    // this.#kosarGOMB = card.querySelector("button");
    // this.kosarbaEvent();
  }
}
