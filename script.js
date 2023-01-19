import { DOMManipulation, Grid, Slider } from './modules.js';

// Manipulate DOM
const newManipulation = new DOMManipulation();

// Create main
const main = newManipulation.createEl('div', 'main');
newManipulation.appendTo('body', main);

// Create slider
const newSlider = new Slider(64);
newSlider.createSlider();

// Create new grid
const newBoard = new Grid(64);
const board = newManipulation.createEl('div', 'board');

newManipulation.appendTo('.main', board);

newBoard.putGridOnBoard();
