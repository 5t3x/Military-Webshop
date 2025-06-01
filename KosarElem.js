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

