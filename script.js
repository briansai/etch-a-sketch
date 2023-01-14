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
}

const board = new Grid(64);

// DOM manipulating class
class DOMManipulation {
  constructor(el) {
    this.el = el;
  }

  createEl() {
    return document.createElement(this.el);
  }

  removeElByClass(className) {
    const elToRemove = document.querySelector(`.${className}`);
    elToRemove.remove();
  }

  appendElementTo(className) {
    const parentEl = document.querySelector(`${className}`);
    parentEl.append(this.createEl());
  }
}
