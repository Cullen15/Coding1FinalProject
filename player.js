class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.speed = 4;
        this.size = 20;
    }

    update(currentLevel) {
        let newX = this.x;
        let newY = this.y;

        if (keyIsDown(65)) newX -= this.speed; 
        if (keyIsDown(68)) newX += this.speed; 
        if (keyIsDown(87)) newY -= this.speed; 
        if (keyIsDown(83)) newY += this.speed; 

        if (!currentLevel.isWall(newX, this.y)) this.x = newX;
        if (!currentLevel.isWall(this.x, newY)) this.y = newY;
    }

    draw() {
        fill(255, 255, 0);
        stroke(200, 200, 0);
        ellipse(this.x, this.y, this.size, this.size);
        
        fill(0);
        noStroke();
        ellipse(this.x - 4, this.y - 2, 4, 4);
        ellipse(this.x + 4, this.y - 2, 4, 4);
    }
}