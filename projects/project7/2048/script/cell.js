export class Cell {
  constructor(gridElement, x, y) {
    const cellBox = document.createElement("div");
    cellBox.classList.add("cell");
    gridElement.append(cellBox);
    this.x = x;
    this.y = y;
  }

  linkTile(tile) {
    tile.setCordinate(this.x, this.y);
    this.linkedTile = tile;
  }

  isEmpty() {
    return !this.linkedTile;
  }
}