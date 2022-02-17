class TimerBar {
    constructor(entity, game) {
        Object.assign(this, {entity, game});
      
    };

    update() {  
        
    }   
    
    draw(ctx) {
        var ratio = this.entity.width / this.entity.maxHealth;
        ctx.strokeStyle = '#4a588e'
        ctx.lineWidth = 0.5;
        if (ratio <= 1) {
            ctx.fillStyle = ratio < 0.2 ? "Red" : ratio < 0.5 ? "#e8b5ac" : "#99c5de";
            ctx.fillRect(this.entity.x + 20, this.entity.y + 60, this.entity.width * PARAMS.SCALE, this.entity.height);
            ctx.strokeRect(this.entity.x + 20, this.entity.y + 60, this.entity.maxHealth * PARAMS.SCALE, this.entity.height);
        }
    }

}

