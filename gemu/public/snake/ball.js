function Ball() {
    this.x = width/2;
    this.y = height/2;
    this.pos = createVector(this.x, this.y);
    this.xSpeed = 0; 
    this.ySpeed = 0;
    this.update = function() {
        var goalDis = p5.Vector.dist(food, this.pos);
        if (goalDis < 10) {
            food.x = random(0, 500);
            food.y = random(0, 500);
        }
        this.x += this.xSpeed;
        if (this.xSpeed > 0) {
            this.xSpeed -= .1;
        } else if (this.xSpeed < 0) {
            this.xSpeed += .1;
        }
        this.y += this.ySpeed;
        if (this.ySpeed > 0) {
            this.ySpeed -= .1;
        } else if (this.ySpeed < 0) {
            this.ySpeed += .1;
        }
        //constrain(this.x, 0, width)

        if (this.x > width) {
            this.x = 0;
        } else if (this.x < 0) {
            this.x = 500;
        }
        if (this.y > height) {
            this.y = 0;
        } else if (this.y < 0) {
            this.y = 500;
        }
        this.pos = createVector(this.x, this.y);
        var dis = p5.Vector.dist(snake.pos, this.pos);
        if (dis < 10) {
            ball.xSpeed = snake.xSpeed * 2;
            ball.ySpeed = snake.ySpeed * 2;
        }
    }

    this.show = function() {
        fill(255);
        ellipse(this.x, this.y, 10, 10);
    }

    this.direction = function(x, y) {
        this.xSpeed = x;
        this.ySpeed = y;
    }
}