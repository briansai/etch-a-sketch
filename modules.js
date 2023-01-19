// Sketch Grid

class Grid {
  constructor(squareNum) {
    this.squareNum = squareNum;
    this.mousedown = false;
  }

  putGridOnBoard() {
    for (let y = 1; y <= this.squareNum; y++) {
      const newDiv = new DOMManipulation();
      const row = newDiv.createEl('div', `row-${y}`);
      newDiv.appendTo('.board', row);

      for (let x = 1; x <= this.squareNum; x++) {
        const newDiv = new DOMManipulation();
        const square = newDiv.createEl('div', `square-${x}`);

        square.style.width = 500 / this.squareNum + 'px';
        square.style.height = 500 / this.squareNum + 'px';

        square.addEventListener('mouseover', this.fillSquare);

        newDiv.appendTo(`.row-${y}`, square);
      }
    }
  }

  fillSquare(e) {
    const path = e.path;
    const classes = `.${path[1].className} .${path[0].className.trim()}`;
    const square = document.querySelector(classes);
    square.style.background = 'black';
  }
}

// Slider

class Slider {
  constructor(val) {
    this.val = val;
  }

  createSlider() {
    const newManipulation = new DOMManipulation();

    const slider = newManipulation.createEl('div');
    slider.className = 'slider';

    const sliderMain = newManipulation.createEl('input');
    sliderMain.className = 'slider-main';
    sliderMain.setAttribute('type', 'range');
    sliderMain.setAttribute('min', 10);
    sliderMain.setAttribute('max', 100);
    sliderMain.setAttribute('value', 64);
    sliderMain.oninput = this.changeValue;

    const sliderText = newManipulation.createEl('div');
    sliderText.className = 'slider-text';
    sliderText.textContent = `${this.val} x ${this.val}`;

    slider.append(sliderText);
    slider.append(sliderMain);
    newManipulation.appendTo('.main', slider);
  }

  changeValue(e) {
    const newManipulation = new DOMManipulation();
    const sliderText = newManipulation.selectEl('.slider-text');

    this.val = e.target.value;
    sliderText.textContent = `${this.val} x ${this.val}`;

    const removeBoard = newManipulation.selectEl('.board');
    removeBoard.remove();

    const newBoard = new Grid(this.val);
    const board = newManipulation.createEl('div', 'board');

    newManipulation.appendTo('.main', board);

    newBoard.putGridOnBoard();
  }
}

// DOM manipulating class

class DOMManipulation {
  appendTo(parent, appendItem) {
    const parentEl = this.selectEl(parent);
    parentEl.append(appendItem);
  }

  createEl(el, className) {
    const element = document.createElement(el);
    element.className = className;
    return element;
  }

  removeElByClass(className) {
    const elToRemove = this.selectEl(`${className}`);
    elToRemove.remove();
  }

  selectEl(item) {
    return document.querySelector(item);
  }
}

export { DOMManipulation, Grid, Slider };
