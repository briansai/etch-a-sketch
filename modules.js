// Sketch Grid

class Grid {
  constructor(squareNum) {
    this.squareNum = squareNum;
  }

  createGrid() {
    let arr = [];
    const num = this.squareNum;
    for (let x = 0; x < num; x++) {
      arr.push([...Array(num).fill({ rgb: '255,255,255' })]);
    }
    return arr;
  }

  putGridOnBoard() {
    for (let y = 1; y <= this.squareNum; y++) {
      const newDiv = new DOMManipulation();
      const row = newDiv.createEl('div', `row-${y}`);
      newDiv.appendTo('.board', row);

      for (let x = 1; x <= this.squareNum; x++) {
        const newDiv = new DOMManipulation();
        const square = newDiv.createEl('div', ` .square-${x}`);

        newDiv.appendTo(`.row-${y}`, square);
      }
    }
  }
}

// DOM manipulating class

class DOMManipulation {
  createEl(el, className) {
    const element = document.createElement(el);
    element.className = className;
    return element;
  }

  removeElByClass(className) {
    const elToRemove = document.querySelector(`${className}`);
    elToRemove.remove();
  }

  appendTo(parent, appendItem) {
    const parentEl = document.querySelector(parent);
    parentEl.append(appendItem);
  }
}

export { DOMManipulation, Grid };
