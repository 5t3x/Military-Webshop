export default class KosarElem {
  constructor(item, szuloElem, index) {
    this.item = item;
    this.index = index;
    this.szuloElem = szuloElem;
    this.render();
  }

  render() {
    const termek = this.item.termek;
    const index = this.index;

    const elem = document.createElement("div");
    elem.classList.add("d-flex", "justify-content-between", "align-items-center", "border-bottom", "py-2", "kosar-item");
    elem.dataset.index = index;

    elem.innerHTML = `
      <div><strong>${termek.nev}</strong> - ${termek.ar} Ft</div>
      <div>
        <button class="btn btn-sm btn-secondary btn-novel">+</button>
        <span>${this.item.mennyiseg}</span>
        <button class="btn btn-sm btn-warning btn-csokkent">-</button>
        <button class="btn btn-sm btn-danger btn-torles">Törlés</button>
      </div>
    `;

    this.szuloElem.appendChild(elem);
    this.addEventListeners(elem, index);
  }

  addEventListeners(elem, index) {
    elem.addEventListener("click", (e) => {
      if (e.target.classList.contains("btn-novel")) {
        window.dispatchEvent(new CustomEvent("novel", { detail: index }));
      } else if (e.target.classList.contains("btn-csokkent")) {
        window.dispatchEvent(new CustomEvent("csokkent", { detail: index }));
      } else if (e.target.classList.contains("btn-torles")) {
        window.dispatchEvent(new CustomEvent("torles", { detail: index }));
      }
    });
  }
}


// export default class KosarElem {

//    constructor(item, szuloElem, index) {
//     this.item = item;
//     this.index = index;
//     this.szuloElem = szuloElem;
//     this.render();
//   }

//   render() {
//     const termek = this.item.termek;
//     const index = this.index;

//     this.szuloElem.innerHTML += `
//       <div class="d-flex justify-content-between align-items-center border-bottom py-2 kosar-item" data-index="${index}">
//         <div><strong>${termek.nev}</strong> - ${termek.ar} Ft</div>
//         <div>
//           <button class="btn btn-sm btn-secondary" data-index="${index}">+</button>
//           <span>${this.item.mennyiseg}</span>
//           <button class="btn btn-sm btn-warning" data-index="${index}">-</button>
//           <button class="btn btn-sm btn-danger" data-index="${index}">Törlés</button>
//         </div>
//       </div>
//     `;
//     this.addEventListeners(index);
//   }

//   addEventListeners(index) {
//     const plusButton = this.szuloElem.querySelector(`[data-index="${index}"].btn-secondary`);
//     const minusButton = this.szuloElem.querySelector(`[data-index="${index}"].btn-warning`);
//     const deleteButton = this.szuloElem.querySelector(`[data-index="${index}"].btn-danger`);

//     if (plusButton) {
//       plusButton.addEventListener('click', () => this.novel(index));
//     }

//     if (minusButton) {
//       minusButton.addEventListener('click', () => this.csokkent(index));
//     }

//     if (deleteButton) {
//       deleteButton.addEventListener('click', () => this.torles(index));
//     }
//   }

//   novel(index) {
//     window.dispatchEvent(new CustomEvent("novel", { detail: index }));
//   }

//   csokkent(index) {
//     window.dispatchEvent(new CustomEvent("csokkent", { detail: index }));
//   }

//   torles(index) {
//     window.dispatchEvent(new CustomEvent("torles", { detail: index }));
//   }
// }
