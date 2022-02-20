class Overlay {    
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});
        this.game.overlay = this;
        this.spritesheetTree = ASSET_MANAGER.getAsset("./sprites/objects/Trees, stumps and bushes.png");
        this.spritesheetFence = ASSET_MANAGER.getAsset("./sprites/tilesets/Building parts/Fences.png");
        this.spritesheetHouse = ASSET_MANAGER.getAsset("./sprites/tilesets/Building parts/Wooden House.png"); 
        this.animationHouseDoor = new Animator(this.spritesheetHouse, 60, 147, 60, 49, 5, 0.2, 0, true, false);  
        this.animationHouseNightTime= new Animator(this.spritesheetHouse, 0, 196, 60, 49, 1, 0.2, 0, false, true);
        this.animations = [];
        this.loadAnimations();
        this.houseTimer = 0;
    }

    loadAnimations() {

        // array with [state] [face] of the same animator.
        for (var i = 0; i < 7; i++) {
            this.animations.push([]);
            for (var j = 0; j < 2; j++) {
                this.animations[i].push([]);
            }
        }
        // color 0 pink 1 light 2 brown 3 purple different spritesheet?
       
        this.cowspritesheet = ASSET_MANAGER.getAsset("./sprites/characters/Animal SpriteSheets/cow/Light cow animation sprites.png");
        
        // 0 idle
        this.animations[0][0] = new Animator (this.cowspritesheet, 0, 0, BACKGROUND.COW_SIZE, BACKGROUND.COW_SIZE, 3, 0.2, 0, false, true);
        this.animations[0][1] = new Animator (this.cowspritesheet, BACKGROUND.COW_SIZE * 3, 0, BACKGROUND.COW_SIZE, BACKGROUND.COW_SIZE, 3, 0.2, 0, false, true);
        // 1 walk 
        this.animations[1][0] = new Animator (this.cowspritesheet, 0, BACKGROUND.COW_SIZE, BACKGROUND.COW_SIZE, BACKGROUND.COW_SIZE, 8, 0.2, 0, false, true);
        this.animations[1][1] = new Animator (this.cowspritesheet, BACKGROUND.COW_SIZE * 8,BACKGROUND.COW_SIZE , BACKGROUND.COW_SIZE, BACKGROUND.COW_SIZE, 8, 0.2, 0, true, true);
        // 2 sit
        this.animations[2][0] = new Animator (this.cowspritesheet, 0, BACKGROUND.COW_SIZE * 3, BACKGROUND.COW_SIZE, BACKGROUND.COW_SIZE, 3, 0.2, 0, false, true);
        this.animations[2][1] = new Animator (this.cowspritesheet, BACKGROUND.COW_SIZE * 3, BACKGROUND.COW_SIZE * 3, BACKGROUND.COW_SIZE, BACKGROUND.COW_SIZE, 3, 0.2, 0, true, true);
        // 3 eat
        this.animations[3][0] = new Animator (this.cowspritesheet, 0, BACKGROUND.COW_SIZE * 5, BACKGROUND.COW_SIZE, BACKGROUND.COW_SIZE, 17, 0.3, 0, false, true);
        this.animations[3][1] = new Animator (this.cowspritesheet, 0, BACKGROUND.COW_SIZE * 6, BACKGROUND.COW_SIZE, BACKGROUND.COW_SIZE, 17, 0.3, 0, true, true);
        // 4 sleep
        this.animations[4][0] = new Animator (this.cowspritesheet, 0, BACKGROUND.COW_SIZE * 4, BACKGROUND.COW_SIZE, BACKGROUND.COW_SIZE, 4, 0.5, 0, false, true);
        this.animations[4][1] = new Animator (this.cowspritesheet, BACKGROUND.COW_SIZE * 4, BACKGROUND.COW_SIZE * 4, BACKGROUND.COW_SIZE, BACKGROUND.COW_SIZE, 4, 0.5, 0, true, true);
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

        this.animations[this.game.cow.state][this.game.cow.facing].drawFrame(this.game.clockTick, ctx, this.game.cow.x, this.game.cow.y, 2);
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
            ctx.drawImage(this.spritesheetHouse, 0, 147, 60, 49, OVERLAY.HOUSE.X, OVERLAY.HOUSE.Y, 60 * 4, 49 * 4);
            if (this.game.bunny.sleep) {
                //this.animationHouseNightTime.drawFrame(this.game.clockTick, ctx, OVERLAY.HOUSE.X, OVERLAY.HOUSE.Y, 4);
            }
        } 
    }
}