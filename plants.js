class Plant {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});
        // 28 28 
        // 26 58
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/tilesets/Tilled Dirt.png");
        this.BB = new BoundingBox(this.x, this.y, 28*2, 28*2)
    }
    update() {


    }
    draw(ctx) {
        ctx.drawImage(this.spritesheet, 26, 58,
            28,  28,
            this.x,
            this.y,
            28 * 2,
            28 * 2);
        if (PARAMS.DEBUG) {
            ctx.strokeStyle = 'pink';
            ctx.lineWidth = 2;
            ctx.strokeRect(this.BB.x, this.BB.y, this.BB.width, this.BB.height);
        }
            
    };
};