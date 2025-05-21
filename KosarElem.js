export class KosarElem {

    #adatok;
    #szoloElem;
    #torolGOMB
    #index
    constructor(adatok, szoloElem, index) {
        this.#adatok = adatok;
        this.#szoloElem = szoloElem;
        this.#index = index;
        this.megjelenit()

    }



    megjelenit() {
        const card = document.createElement('div');
        card.classList.add('col-md-12', 'mb-4');
        card.innerHTML = `
        <div class="card">
          
            <div class="card-body">
            <h5 class="card-title">${this.#adatok.nev}</h5>
        
            <p class="card-text"><strong>Ár: ${this.#adatok.Ar} Ft</strong></p>
            <button class="btn btn-primary">Töröl</button>
            </div>
        </div>
        `;

        this.#szoloElem.appendChild(card);

    }


}
