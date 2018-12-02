function Snake() {

    this.x = 50;
    this.y = 50;
    this.pos = createVector(this.x, this.y);
    this.xSpeed = 1;
    this.ySpeed = 0;
    this.update = function() {
        this.x += this.xSpeed;
        this.y += this.ySpeed;
        if (this.x == width) {
            this.x = 0;
        } else if (this.x < 0) {
            this.x = 500;
        }
        if (this.y == height) {
            this.y = 0;
        } else if (this.y < 0) {
            this.y = 500;
        }
        this.pos = createVector(this.x, this.y);
    }

    this.show = function() {
        fill(255);
        rect(this.x, this.y, 10, 10);
    }

    this.direction = function(x, y) {
        this.xSpeed = x;
        this.ySpeed = y;
    }
}