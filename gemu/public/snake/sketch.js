var socket;
var snake;
var ball;
var food;

function setup() {
    createCanvas(500, 500);
    snake = new Snake();
    ball = new Ball();
    food = createVector(random(width), random(height))
    socket = io.connect("http://localhost:3000/snake/")
    socket.on("snake", anotherSnake);
}

function anotherSnake(data) {
    snake.show();
    snake.update();
}

function draw() {

    background(0);
    snake.show();
    snake.update();

    ball.show();
    ball.update();

    //Seinding data
    //console.log(snake.x + " " + snake.y);
    var snakeData = {
        snakex: snake.x,
        snakey: snake.y
    }

    // var ballData = {
    //     ballx: ball.x,
    //     bally: ball.y
    // }

    // var foodData = {
    //     foodx: food.x,
    //     foody: food.y
    // }

    socket.emit('snake', snakeData);
    console.log(snakeData);
    // socket.emit("ball", ballData);
    // socket.emit("food", foodData);
    //end sending

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



