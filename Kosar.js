import { KosarElem } from "./KosarElem.js";


export class Kosar {
    
    #KosarLista = [];
    #szoloELEM;
    constructor() {
        this.#KosarLista = [];
        this.#szoloELEM = document.querySelector(".kosar");
        this.megjelenit();
        this.hozaAd();

    }
    megjelenit() {
        console.log(this.#szoloELEM);

        this.#szoloELEM.innerHTML = "";
        for (let index = 0; index < this.#KosarLista.length; index++) {
            const element = this.#KosarLista[index];
            new KosarElem(element, this.#szoloELEM, index);
        }
    }
    torol() { }
    hozaAd() {
        window.addEventListener("kosarba", () => {
            console.log(event.detail);
            this.#KosarLista.push(event.detail);
            console.log(this.#KosarLista)
            this.megjelenit();
        });
    }
}