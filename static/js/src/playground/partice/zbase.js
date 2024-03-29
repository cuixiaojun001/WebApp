class Particle extends AcGameObject {
    constructor(playground, x, y, radius, vx, vy, color, speed, move_length) {
        super();
        this.playground = playground;
        this.ctx = this.playground.game_map.ctx;
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.vx = vx;
        this.vy = vy;
        this.color = color;
        this.speed = speed;
        this.move_length = move_length;
        this.friction = 0.9;
        this.eps = 0.01;
    }
    start() {
    }
    update() {
        if(this.move_length < this.eps || this.speed < this.eps) {
            this.destroy();
            return false;
        }
        let moved = Math.min(this.move_length,this.speed*this.timedelta/1000);
        this.x += this.vx*moved;//因为单位是毫秒，所以/1000
        this.y += this.vy*moved;
        this.speed *= this.friction;
        this.move_length -= moved;
        this.render();
    }

    render() {
        this.ctx.beginPath();
        this.ctx.arc(this.x*this.playground.scale,this.y*this.playground.scale,this.radius*this.playground.scale,0,Math.PI * 2,false);
        this.ctx.fillstyle = this.color;
        this.ctx.fill();
    }

}
