class TimerBar {
    constructor(game, x, y, width, height, moving) {
        Object.assign(this, {game, x, y, width, height, moving});
        this.game.timerBar = this;
        this.maxHealth = this.width; // this sets the width of the whole breath bar
    
        
    };

    update() {
        this.elapsed += this.game.clockTick;
            if (this.width > 0) {
                this.width -= 0.005; // original
                this.width = (this.width / this.maxHealth) * this.maxHealth;
            } else {
            }

        if (this.moving) {
            this.x = this.game.cow.x + 20;
        }
    }   
    
    draw(ctx) {
        var ratio = this.width / this.maxHealth;
        ctx.strokeStyle = '#aa759'
        ctx.lineWidth = 0.5;
        if(ratio <= 1) {
        ctx.fillStyle = ratio < 0.2 ? "Red" : ratio < 0.5 ? "#e8b5ac" : "#99c5de";
        }
        ctx.fillRect(this.x, this.y, this.width * PARAMS.SCALE, this.height);
        ctx.strokeRect(this.x, this.y, this.maxHealth * PARAMS.SCALE, this.height);
    }

}

