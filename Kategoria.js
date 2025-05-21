import Termek from "./Termek.js";
import { termekLista } from "./termekLista_2.js";

const kategoriak = [
    { nev: "Ruhák", kategoria: "ruhak" },
    { nev: "Kések", kategoria: "kesek" },
    { nev: "Tartozékok", kategoria: "tartozekok" },
    { nev: "Ételek", kategoria: "etelek" }
];

export default class Kategoria {
    megjelenit() {
        const tartalomElem = document.querySelector("article.tartalom");
        tartalomElem.innerHTML = ""; 

        kategoriak.forEach((kat, i) => {
            tartalomElem.insertAdjacentHTML("beforeend", `
                <div class="card text-center mb-3 kategoria-kartya" style="width: 17rem; display:inline-block; cursor:pointer;" data-kategoria="${kat.kategoria}">
                    <div class="card-body">
                        <h5 class="card-title">${kat.nev}</h5>
                        <p class="card-text">Válassz kategóriát!</p>
                    </div>
                </div>
            `);
        });


        tartalomElem.addEventListener("click", (e) => {
            const kartya = e.target.closest(".kategoria-kartya");
            if (!kartya) return;
            const kategoria = kartya.dataset.kategoria;
            this.megjelenitTermekek(kategoria, tartalomElem);
        });
    }

    megjelenitTermekek(kategoria, tartalomElem) {
        tartalomElem.innerHTML = "";
        const szurtTermekek = Termek.filter(t => t.kategoria === kategoria);
        szurtTermekek.forEach((adatok, index) => {
            new Termek(adatok, tartalomElem, index);
        });
    }
}