import Termek from "./Termek.js";
import { termekLista } from "./termekLista_2.js";

export default class TermekLista {
    #szuloElem;

    constructor() {
        this.#szuloElem = document.querySelector(".tartalom");
        this.megjelenit();
    }

    megjelenit() {
        this.#szuloElem.innerHTML = `<div class="row"></div>`;
        const sorElem = this.#szuloElem.querySelector(".row");

        termekLista.forEach((termek, i) => {
            new Termek(termek, sorElem, i);
        });
    }
}