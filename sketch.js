let currentLevel = 0;
let player;
let enemies = [];
let gameState = 'start';
let startButton;

function setup() {
    createCanvas(400, 400);
    setupLevels();
    resetLevel();
    
    startButton = createButton('Start Game');
    startButton.position(width/2 - 50, height/2 + 50);
    startButton.mousePressed(startGame);
    startButton.class('game-button');
}

function startGame() {
    gameState = 'playing';
    currentLevel = 0;
    resetLevel();
    startButton.hide();
}

function resetLevel() {
    player = new Player(60, 60);
    enemies = LEVELS[currentLevel].enemyPaths.map(path => 
        new Enemy(path.x, path.y, path.path)
    );
}

function draw() {
    if (gameState === 'start') {
        drawStartScreen();
    } else if (gameState === 'playing') {
        LEVELS[currentLevel].draw();
        player.update(LEVELS[currentLevel]);
        player.draw();

        enemies.forEach(enemy => {
            enemy.update();
            enemy.draw();
            if (enemy.collidesWith(player)) {
                gameState = 'lost';
            }
        });

        fill(255);
        noStroke();
        textSize(20);
        text(`Level ${currentLevel + 1}`, 20, 30);

        if (LEVELS[currentLevel].isExit(player.x, player.y)) {
            if (currentLevel < LEVELS.length - 1) {
                currentLevel++;
                resetLevel();
            } else {
                gameState = 'won';
            }
        }
    } else {
        drawEndScreen();
    }
}

function drawStartScreen() {
    background(50);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(32);
    text('Escape Loop', width/2, height/2 - 50);
    textSize(16);
    text('Use WASD keys to move\nAvoid enemies and reach the green exit', 
         width/2, height/2);
}

function drawEndScreen() {
    background(50);
    textSize(32);
    textAlign(CENTER, CENTER);
    fill(255);
    if (gameState === 'won') {
        text('You Won!\nPress R to restart', width/2, height/2);
    } else {
        text('Game Over\nPress R to retry', width/2, height/2);
    }
}

function keyPressed() {
    if (key === 'r' || key === 'R') {
        if (gameState === 'won' || gameState === 'lost') {
            gameState = 'start';
            startButton.show();
        }
    }
}