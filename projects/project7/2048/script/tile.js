export class Tile {
    constructor(gridElem) {
    this.tileElem = document.createElement("div")
    this.tileElem.classList.add("tile");
    this.value = Math.random() > 0.5 ? 2 : 4;
    this.tileElem.textContent = this.value;
    gridElem.append(this.tileElem);
    }

    setCordinate(x, y) {
        this.x = x;
        this.y = y;
        this.tileElem.style.setProperty("--x", x);
        this.tileElem.style.setProperty("--y", y);
    }
}