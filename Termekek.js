import  Termek  from "./Termek.js";
import  termekLista  from "./termekLista_2.js";

export class TermekLista{
    #szuloElem;
    #termekLista= [];
    constructor(){
        this.#termekLista = termekLista;
        this.#szuloElem = document.getElementById('carCards');
        this.megjelenit();
    }

    megjelenit(){
    // Iteráljuk a termékeket és létrehozzuk a kártyákat
        for (let i = 0; i < termekLista.length; i++) {
            new Termek(termekLista[i], this.#szuloElem, i);            
        }
    }

  
  
}