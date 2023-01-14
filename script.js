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
