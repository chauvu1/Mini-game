class TimerBar {
    constructor(entity, game) {
        Object.assign(this, {entity, game});
      
    };

    update() {  
        
    }   
    
    draw(ctx) {
        var ratio = this.entity.width / this.entity.maxHealth;
        ctx.strokeStyle = '#f3f2c0'
        ctx.lineWidth = 1;
        ctx.fillStyle = ratio < 0.2 ? "#c89dd1" : ratio < 0.5 ? "#e8b5ac" : "#99c5de";
        ctx.fillRect(this.entity.barX, this.entity.barY, this.entity.width * PARAMS.SCALE, this.entity.height);
        ctx.strokeRect(this.entity.barX, this.entity.barY, this.entity.maxHealth * PARAMS.SCALE, this.entity.height);
    }
}

