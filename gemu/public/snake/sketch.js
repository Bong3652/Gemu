var socket;
var snake;
var ball;
var food;

function setup() {
    createCanvas(500, 500);
    //socket = io.connect("http://localhost:3000")
    snake = new Snake();
    ball = new Ball();
    food = createVector(random(width), random(height))
}

function draw() {
    background(0);
    snake.show();
    snake.update();

    ball.show();
    ball.update();

    fill(240, 10, 100);
    rect(food.x, food.y, 10, 10)
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        snake.direction(0, -1);
    } else if (keyCode === DOWN_ARROW) {
        snake.direction(0, 1);
    } else if (keyCode === RIGHT_ARROW) {
        snake.direction(1, 0);
    } else if (keyCode === LEFT_ARROW) {
        snake.direction(-1, 0);
    } else if (keyCode ==  SPACE) {
        snake.direction(0, 0);
    }
}



