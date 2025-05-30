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
        this.kosarbaEvent();
    }

    megjelenit() {
        const card = document.createElement('div');
        card.classList.add('col-md-4', 'mb-4', 'termek');
        card.innerHTML = `
      <div class="card">
        <img src="${this.#adatok.kep ?? 'https://via.placeholder.com/150'}" class="card-img-top" alt="${this.#adatok.nev}">
        <div class="card-body">
          <h5 class="card-title">${this.#adatok.nev}</h5>
          <p class="card-text">${this.#adatok.leiras}</p>
          <p class="card-text"><strong>Ár: ${this.#adatok.ar} Ft</strong></p>
          <button class="btn btn-primary">Kosárba rakom</button>
        </div>
      </div>
    `;
        this.#szuloElem.appendChild(card);
        this.#kosarGOMB = card.querySelector("button");
    }

    kosarbaEvent() {
        this.#kosarGOMB.addEventListener("click", () => {
            window.dispatchEvent(new CustomEvent("kosarba", { detail: this.#adatok }));
        });
    }
}