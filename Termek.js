export default class Termek {
    #adatok = {};
    #szElem;
    #index;

    constructor(adatok, szElem, index) {
        this.#adatok = adatok;
        this.#szElem = szElem;
        this.#index = index;
        this.megjelenit();
    }

    megjelenit() {
        this.#szElem.insertAdjacentHTML("beforeend",
            `<div class="card" style="width: 18rem;">
                            <img src="..." class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${this.#adatok.nev}</h5>
                                <p class="card-text">${this.#adatok.leiras}</p>
                                <p class="card-text">${this.#adatok.ar}</p>
                                <button class="btn btn-primary kosarba" id="kosarba">Kosárba</button>
                            </div>
                        </div>`);

    }
    #kosarbaGombEsemeny() {
        const kosarbaGomb = document.gelElemntById(`kosarba$`)
    }
}