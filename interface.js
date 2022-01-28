class Interface {
    constructor(game, x, y) {
        Object.assign(this, { game, x, y});
        this.bunsheet = ASSET_MANAGER.getAsset("./sprites/bun_interface.png");
        this.backsheet = ASSET_MANAGER.getAsset("./sprites/back_interface.png");
        this.animation =  new Animator(this.bunsheet, 0, 0, 96, 116, 2, 1, 0, false, true); 
        this.background = new Animator(this.backsheet, 0, 0, 145, 28, 1, 1, 0, false, true);
    }
   
    update () {

    };
    
    draw(ctx) {
        // this.animation.drawFrame
        this.background.drawFrame(this.game.clockTick, ctx, this.x + 150, this.y + 30, 5);
        this.animation.drawFrame(this.game.clockTick, ctx, this.x, this.y, 1.5);
    };

}