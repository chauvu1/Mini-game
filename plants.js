class Dirt {
    constructor(game, x, y, type) {
        Object.assign(this, {game, x, y, type});
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/tilesets/Tilled Dirt.png");
        this.BB = new BoundingBox(this.x, this.y, 28*2, 28*2)
        this.dirtTaken = false;
        this.elapsedTime = 0;
        this.animators = [];
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
         
        if (this.game.bunny.plowing && this.type == this.game.bunny.dirtTypeInteract && !this.dirtTaken) {
            this.elapsedTime += this.game.clockTick;         
            if (this.elapsedTime > 2) {
                this.game.addEntity(new Plant(this.game, this));  
                this.elapsedTime = 0;
                this.dirtTaken = true;
                this.game.bunny.plowing = false;
            }
        }
        if (PARAMS.DEBUG) {
            ctx.strokeStyle = 'pink';
            ctx.lineWidth = 2;
            ctx.strokeRect(this.BB.x, this.BB.y, this.BB.width, this.BB.height);
        }
            
    };
};

class Plant {
    constructor(game, dirt) {
        Object.assign(this, {game, dirt});
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/objects/Farming Plants.png");
        this.removeFromWorld = false;
        this.x = this.dirt.x + 12;
        this.y = this.dirt.y + 5;
        this.BB = new BoundingBox(this.x, this.y, 16*2, 16*2)
        this.animation = new Animator(this.spritesheet, 16, 32, 16, 16, 4, 1, 0, false, false); // roof 
        this.width = 0;
        this.height = 3.5;
        this.maxHealth = 20;
        this.barX = this.x + 5;
        this.barY = this.y;
        this.timerBar = new TimerBar(this, this.game);
    }
    
    update() {
        this.elapsed += this.game.clockTick;
        if (this.width <= this.maxHealth) {
            this.width += 0.05; // original
            this.width = (this.width / this.maxHealth) * this.maxHealth;
        } else {
            
        }
        if (this.removeFromWorld) {
            this.dirt.dirtTaken = false;
        }

    }

    draw(ctx) {
        this.animation.drawFrame(this.game.clockTick, ctx, this.x, this.y, 2);
        if (this.animation.isDone()){
            ctx.drawImage(this.spritesheet, 64, 32,
                16,  16,
                this.x ,
                this.y,
                16 * 2,
                16 * 2);
        }
        if (PARAMS.DEBUG) {
            ctx.strokeStyle = 'pink';
            ctx.lineWidth = 2;
            ctx.strokeRect(this.BB.x, this.BB.y, this.BB.width, this.BB.height);
        }
        this.timerBar.draw(ctx);
    };
};

class PlantItems {
    constructor(game, dirt) {
        Object.assign(this, {game, dirt});
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/objects/Farming Plants.png");
        this.removeFromWorld = false;
        this.x = this.dirt.x + 12;
        this.y = this.dirt.y + 5;
        this.BB = new BoundingBox(this.x, this.y, 16*2, 16*2)
        this.animation = new Animator(this.spritesheet, 16, 32, 16, 16, 4, 1, 0, false, false); // roof 
        this.width = 0;
        this.height = 3.5;
        this.maxHealth = 20;
        this.barX = this.x + 5;
        this.barY = this.y;
        this.timerBar = new TimerBar(this, this.game);
    }
    
    update() {
        this.elapsed += this.game.clockTick;
        if (this.width <= this.maxHealth) {
            this.width += 0.05; // original
            this.width = (this.width / this.maxHealth) * this.maxHealth;
        } else {
            
        }
        if (this.removeFromWorld) {
            this.dirt.dirtTaken = false;
        }
    }

    draw(ctx) {
        this.animation.drawFrame(this.game.clockTick, ctx, this.x, this.y, 2);
        if (this.animation.isDone()){
            ctx.drawImage(this.spritesheet, 64, 32,
                16,  16,
                this.x ,
                this.y,
                16 * 2,
                16 * 2);
        }
        if (PARAMS.DEBUG) {
            ctx.strokeStyle = 'pink';
            ctx.lineWidth = 2;
            ctx.strokeRect(this.BB.x, this.BB.y, this.BB.width, this.BB.height);
        }
        this.timerBar.draw(ctx);
    };
};