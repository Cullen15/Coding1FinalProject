class Enemy {
    constructor(x, y, path) {
        this.x = x;
        this.y = y;
        this.path = path;
        this.currentPoint = 0;
        this.speed = 2;
        this.size = 20;
    }

    update() {
        let target = this.path[this.currentPoint];
        let dx = target[0] - this.x;
        let dy = target[1] - this.y;
        let distance = sqrt(dx * dx + dy * dy);

        if (distance < this.speed) {
            this.currentPoint = (this.currentPoint + 1) % this.path.length;
        } else {
            this.x += (dx / distance) * this.speed;
            this.y += (dy / distance) * this.speed;
        }
    }

    draw() {
        fill(255, 0, 0);
        stroke(200, 0, 0);
        ellipse(this.x, this.y, this.size, this.size);
        
        fill(255);
        noStroke();
        ellipse(this.x - 4, this.y - 2, 4, 4);
        ellipse(this.x + 4, this.y - 2, 4, 4);
    }

    collidesWith(player) {
        let distance = dist(this.x, this.y, player.x, player.y);
        return distance < (this.size + player.size) / 2;
    }
}