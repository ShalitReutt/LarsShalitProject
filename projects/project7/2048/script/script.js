import { Grid } from "./grid.js";
import { Tile } from "./tile.js";

const gameBoard = document.getElementById("game");

const grid = new Grid(gameBoard);
grid.RandomCellSpawn().linkTile(new Tile(gameBoard));