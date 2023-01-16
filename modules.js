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
        const square = newDiv.createEl('div', ` square-${x}`);

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

export { DOMManipulation, Grid };
