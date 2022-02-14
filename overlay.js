

class Overlay {    
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});
        this.game.overlay = this;
        this.spritesheetTree = ASSET_MANAGER.getAsset("./sprites/objects/Trees, stumps and bushes.png");
        this.spritesheetFence = ASSET_MANAGER.getAsset("./sprites/tilesets/Building parts/Fences.png");
        this.spritesheetHouse = ASSET_MANAGER.getAsset("./sprites/tilesets/Building parts/Wooden House.png"); 
        this.animationHouseDoor = new Animator(this.spritesheetHouse, 60, 147, 60, 49, 5, 0.2, 0, true, false);  
        this.animationHouseNightTime= new Animator(this.spritesheetHouse, 0, 196, 60, 49, 1, 0.2, 0, false, true);
        this.houseTimer = 0;
    }

    update(){
        
    };

    draw(ctx) {   
        if (this.game.bunny.under) {
            ctx.drawImage(this.spritesheetTree, 16, 0,
                32,  32,
                OVERLAY.TREE[0].X,
                OVERLAY.TREE[0].Y,
                32 * 3,
                32 * 3); 
            ctx.drawImage(this.spritesheetTree, 16, 0,
                32,  32,
                OVERLAY.TREE[1].X,
                OVERLAY.TREE[1].Y,
                32 * 3,
                32 * 3);
        }
        if (this.game.fence.inside) {
            ctx.drawImage(this.spritesheetFence, 0, 64,
                64,  64,
                OVERLAY.FENCE.X,
                OVERLAY.FENCE.Y,
                64 * 3,
                64 * 3);
        } 
        if (this.game.house.inside) {
            ctx.drawImage(this.spritesheetHouse, 60, 147, 60, 49, OVERLAY.HOUSE.X, OVERLAY.HOUSE.Y, 60 * 4, 49 * 4);
            if (this.game.bunny.sleep) {
                this.animationHouseNightTime.drawFrame(this.game.clockTick, ctx, OVERLAY.HOUSE.X, OVERLAY.HOUSE.Y, 4);
            }
        } 
    }
}