import Termek from "./Termek.js";

export default class Termekek {
    #termekLista = [];
    #szElem;
    constructor(termekAdatok, szuloElem) {
        this.#termekLista = termekAdatok;
        this.#szElem = szuloElem;
        this.#szElem.innerHTML = "";
        this.megjelenit();
    }

    TermekekMegjelenit() {
        this.#szElem.innerHTML = "";
        this.#termekLista.forEach((adat, index) => {
            const termek = new Termek(adat, this.#szElem, index);

        });
    }
}