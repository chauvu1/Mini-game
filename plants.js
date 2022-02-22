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

        if (this.game.bunny.withinRangeDirt && this.type == this.game.bunny.dirtTypeInteract) {
            ctx.drawImage(this.spritesheet, 114, 56,
                32, 32,
                this.x -4,
                this.y -4 ,
                32 * 2,
                32 * 2);
        } else {
            ctx.drawImage(this.spritesheet, 26, 58,
                28, 28,
                this.x,
                this.y,
                28 * 2,
                28 * 2);
        }
        
        if (this.game.bunny.plowing && this.type == this.game.bunny.dirtTypeInteract && !this.dirtTaken && this.game.bunny.withinRangeDirt) {   
            this.elapsedTime += this.game.clockTick;   
            if (this.elapsedTime > 2) {
                this.game.addEntity(new Plant(this.game, this));  
                this.game.bunny.carrotPlantedCount = this.game.bunny.carrotPlantedCount + 1;
                this.elapsedTime = 0;
                this.game.bunny.plowing = false;
                this.dirtTaken = true; 
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
        if (this.removeFromWorld && this.dirt.type == this.game.bunny.dirtTypeInteract) {
            this.dirt.dirtTaken = false;
        } else {
           
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

class Flower {
    constructor(game, x, y, type, color) {
        Object.assign(this, {game, x, y, type, color});
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/objects/Mushrooms, Flowers, Stones.png");       
        this.flower = this.type;
        this.state = 0;
        this.BB = new BoundingBox(this.x - 16, this.y - 10, 16*2 + 38, 16*2 + 20)
        this.animation = [];
        this.loadAnimations();
        this.alreadyWatered = false;

        // this.width = 0;
        // this.height = 3.5;
        // this.maxHealth = 20;
        // this.barX = this.x + 5;
        // this.barY = this.y;
        // this.timerBar = new TimerBar(this, this.game);
    }

    loadAnimations() {
        for (var i = 0; i < 5; i++) {
            this.animation.push([]);
            for (var j = 0; j < 2; j++) {
                this.animation[i].push([]);
            }
        }
  
        // type 0 is pink
        this.animation[0][0] = new Animator(this.spritesheet, 64, 48, 16, 16, 1, 1, 0, false, true); 
        this.animation[0][1] = new Animator(this.spritesheet, 64, 48, 16, 16, 3, 1, 0, false, false);
        this.animation[0][2] = new Animator(this.spritesheet, 112, 48, 16, 16, 1, 1, 0, false, true);  
        // type 1 is blue
        this.animation[1][0] = new Animator(this.spritesheet, 64, 64, 16, 16, 1, 1, 0, false, true); 
        this.animation[1][1] = new Animator(this.spritesheet, 64, 64, 16, 16, 3, 1, 0, false, false); 
        this.animation[1][2] = new Animator(this.spritesheet, 112, 64, 16, 16, 1, 1, 0, false, true); 
        // type 2 is white
        this.animation[2][0] = new Animator(this.spritesheet, 144, 48, 16, 16, 1, 1, 0, false, true);
        this.animation[2][1] = new Animator(this.spritesheet, 144, 48, 16, 16, 3, 1, 0, false, false);
        this.animation[2][2] = new Animator(this.spritesheet, 176, 48, 16, 16, 1, 1, 0, false, true);
        // type 3 is purple 
        this.animation[3][0] = new Animator(this.spritesheet, 0, 64, 16, 16, 1, 1, 0, false, true); 
        this.animation[3][1] = new Animator(this.spritesheet, 0, 64, 16, 16, 3, 1, 0, false, false);
        this.animation[3][2] = new Animator(this.spritesheet, 32, 64, 16, 16, 1, 1, 0, false, true);  
        // type 4 is yellow
        this.animation[4][0] = new Animator(this.spritesheet, 0, 48, 16, 16, 1, 1, 0, false, true); 
        this.animation[4][1] = new Animator(this.spritesheet, 0, 48, 16, 16, 3, 1, 0, false, false); 
        this.animation[4][2] = new Animator(this.spritesheet, 32, 48, 16, 16, 1, 1, 0, false, true); 
    }
    
    update() {
    //     this.elapsed += this.game.clockTick;
    //     if (this.width <= this.maxHealth) {
    //         this.width += 0.05; // original
    //         this.width = (this.width / this.maxHealth) * this.maxHealth;
    //     } else {
            
    //     }
       
    // }
    }

    draw(ctx) {      
        if (!this.alreadyWatered && this.game.bunny.withinRangeFlower && this.color == this.game.bunny.flowerTypeInteract && this.game.bunny.waterPlants) {
            this.animation[this.flower][1].drawFrame(this.game.clockTick, ctx, this.x, this.y, 2);
            if (this.animation[this.flower][1].isDone()) {
                this.game.bunny.waterFlowerCount = this.game.bunny.waterFlowerCount + 1;
                this.animation[this.flower][2].drawFrame(this.game.clockTick, ctx, this.x, this.y, 2);
                this.game.bunny.waterPlants = false;
                this.state = 2;
            }
        } else {
            this.animation[this.flower][this.state].drawFrame(this.game.clockTick, ctx, this.x, this.y, 2);
        }
        if (this.state == 2 && this.color == this.game.bunny.flowerTypeInteract) {
            this.alreadyWatered = true;
            this.game.bunny.waterPlants = false;
        }
      
        if (this.game.bunny.withinRangeFlower && this.color == this.game.bunny.flowerTypeInteract) {
            ctx.drawImage(this.spritesheet, 112, 0,
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
        //this.timerBar.draw(ctx);
    };
};