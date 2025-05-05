class Level {
  constructor(layout, enemyPaths, backgroundColor) {
      this.layout = layout;
      this.enemyPaths = enemyPaths;
      this.cellSize = 40;
      this.backgroundColor = backgroundColor;
  }

  draw() {
      background(this.backgroundColor[0], this.backgroundColor[1], this.backgroundColor[2]);
      for (let i = 0; i < this.layout.length; i++) {
          for (let j = 0; j < this.layout[i].length; j++) {
              if (this.layout[i][j] === 1) {
                  fill(100);
                  stroke(80);
                  rect(j * this.cellSize, i * this.cellSize, 
                       this.cellSize, this.cellSize);
              } else if (this.layout[i][j] === 2) {
                  fill(0, 255, 0);
                  stroke(0, 200, 0);
                  rect(j * this.cellSize, i * this.cellSize, 
                       this.cellSize, this.cellSize);
              }
          }
      }
  }

  isWall(x, y) {
      let gridX = floor(x / this.cellSize);
      let gridY = floor(y / this.cellSize);
      
      if (gridY < 0 || gridY >= this.layout.length || 
          gridX < 0 || gridX >= this.layout[0].length) {
          return true;
      }
      
      return this.layout[gridY][gridX] === 1;
  }

  isExit(x, y) {
      let gridX = floor(x / this.cellSize);
      let gridY = floor(y / this.cellSize);
      
      if (gridY < 0 || gridY >= this.layout.length || 
          gridX < 0 || gridX >= this.layout[0].length) {
          return false;
      }
      
      return this.layout[gridY][gridX] === 2;
  }
}

let LEVELS;

function setupLevels() {
  LEVELS = [
      new Level([
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
          [1, 0, 1, 1, 0, 1, 1, 1, 0, 1],
          [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
          [1, 0, 1, 1, 1, 1, 1, 1, 0, 1],
          [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
          [1, 0, 1, 1, 0, 1, 1, 1, 0, 1],
          [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
          [1, 0, 0, 0, 0, 0, 0, 0, 2, 1],
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
      ], [
          {x: 200, y: 200, path: [[200, 200], [200, 300], [300, 300], [300, 200]]}
      ], [50, 50, 100]),

      new Level([
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          [1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
          [1, 1, 1, 0, 1, 0, 1, 1, 0, 1],
          [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
          [1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
          [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
          [1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
          [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
          [1, 0, 1, 1, 1, 0, 1, 0, 2, 1],
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
      ], [
          {x: 160, y: 160, path: [[160, 160], [160, 320], [320, 320], [320, 160]]},
          {x: 280, y: 280, path: [[280, 280], [280, 120], [120, 120], [120, 280]]}
      ], [100, 50, 50]),

      new Level([
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          [1, 0, 0, 0, 0, 0, 1, 0, 0, 1],
          [1, 0, 1, 1, 1, 0, 1, 0, 0, 1],
          [1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
          [1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
          [1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
          [1, 0, 1, 1, 1, 0, 0, 1, 0, 1],
          [1, 0, 1, 0, 1, 1, 0, 0, 0, 1],
          [1, 0, 0, 0, 0, 0, 0, 1, 2, 1],
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
      ], [
          {x: 160, y: 160, path: [[160, 160], [160, 320], [320, 320], [320, 160]]},
          {x: 280, y: 280, path: [[280, 280], [280, 120], [120, 120], [120, 280]]},
          {x: 200, y: 200, path: [[200, 200], [200, 360], [360, 360], [360, 200]]}
      ], [50, 100, 50])
  ];
}