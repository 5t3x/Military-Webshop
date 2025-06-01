import Termek from "./Termek.js";

export default class Termekek {
    #termekLista = [];
    #szuloElem;
    constructor(termekAdatok, szuloElem) {
        this.#termekLista = termekAdatok;
        this.#szuloElem = szuloElem;
        this.#szuloElem.innerHTML = ""; 
        this.megjelenit();
    }

    megjelenit() {
        this.#szuloElem.innerHTML = ""; 
        this.#termekLista.forEach((adat, index) => {
            const termek = new Termek(adat, this.#szuloElem, index);
          
        });
    }
}
