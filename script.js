import { DOMManipulation, Grid } from './modules.js';

let newBoard = new Grid(64);

// *Figure out what you did wrong here brian
const domBoard = new DOMManipulation();
const board = domBoard.createEl('div', 'board');

const p = domBoard.appendTo('body', board);

newBoard.putGridOnBoard();
