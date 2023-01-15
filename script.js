import { DOMManipulation, Grid } from './modules.js';

const newBoard = new Grid(64);
const newManipulation = new DOMManipulation();
const board = newManipulation.createEl('div', 'board');
const main = newManipulation.createEl('div', 'main');
newManipulation.appendTo('body', main);
newManipulation.appendTo('.main', board);

newBoard.putGridOnBoard();
