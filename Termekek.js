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

// import Termek from "./Termek.js";
// import { termekLista } from "./termekLista_2.js";

// export default class Termekek {
//     #szuloElem;

//     constructor() {
//         this.#szuloElem = document.querySelector(".tartalom");
//         this.megjelenit();
//     }

//     megjelenit() {
//         this.#szuloElem.innerHTML = `<div class="row"></div>`;
//         const sorElem = this.#szuloElem.querySelector(".row");

//         termekLista.forEach((termek, i) => {
//             new Termek(termek, sorElem, i);
//         });
//     }
// }