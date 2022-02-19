class Milk {
    constructor(game, cow, x, y) {
        Object.assign(this, {game, cow, x, y});  
        this.milkspritesheet = ASSET_MANAGER.getAsset("./sprites/objects/Milk animation.png");
        this.removeFromWorld = false;
        this.elapsedTime = 0;
        // where to draw the milk
        this.y = this.cow.y + 20;
        this.milkCreated = false;
        this.width = 0;
        this.height = 3.5;
        this.maxHealth = 20;
        this.x = this.cow.x + 35;
        this.timerbar = new TimerBar(this, this.game);
        this.loadAnimations();
    }


    loadAnimations() {
        this.milkAnimations = []; 
        for (var i = 0; i < 4; i++) {
            this.milkAnimations.push([]);
        }
        this.milkAnimations[0] = new Animator(this.milkspritesheet, 0, 0,  20, 20, 3, 0.5, 0, false, true);
        this.milkAnimations[1] = new Animator(this.milkspritesheet, 0, 20, 20, 20, 3, 0.5, 0, false, true);
        this.milkAnimations[2] = new Animator(this.milkspritesheet, 0, 40, 20, 20, 3, 0.5, 0, false, true);
        this.milkAnimations[3] = new Animator(this.milkspritesheet, 0, 60, 20, 20, 3, 0.5, 0, false, true);
    }
    update(){
        this.barX = this.cow.x + 20;
        this.barY = this.cow.y + 60;
       
        this.elapsed += this.game.clockTick;

        if (this.width <= this.maxHealth) {
            this.width += 0.05; // original
            this.width = (this.width / this.maxHealth) * this.maxHealth;
        } else {
            this.milkCreated = true;
        }

        if (this.removeFromWorld) {
            this.cow.milkGenerated = false;
            this.milkCreated = false;
        }
    };

    draw(ctx){ 
        if (this.milkCreated) {
            this.BB = new BoundingBox(this.x + 10, this.y + 5, 16 * 2 - 8, 16 * 2 - 3);
            this.milkAnimations[this.cow.color].drawFrame(this.game.clockTick, ctx, this.x, this.y, 2);
            if (PARAMS.DEBUG) {
                ctx.strokeStyle = 'Red';
                ctx.strokeRect(this.BB.x, this.BB.y, this.BB.width, this.BB.height);  
            }
          
        }
        this.timerbar.draw(ctx);
    };

}

class Cow {
    constructor(game, x, y, type, direction, color) {
        Object.assign(this, { game, x, y, type, direction, color});  
        this.facing = this.direction; // 0 = right; 1 = left
        this.state = this.type; // 0 = idle, 1 = walking, 2 = sit 3 = sleep 4 = sniff 5 = eat 6 = love
        this.animations = [];
        this.elapsedTime = 0;
        this.milkGenerated = false;
        this.velocity = { x: 0, y: 0};
        if (this.type == 1) {
            this.game.cow = this;
        }
  
        this.collidedRight = false;
        this.collidedLeft = false;    
        this.loadAnimations();
        this.updateBB();
       
    }

    updateBB() {
        this.lastBB = this.BB;
        this.BB = new BoundingBox(this.x + 10, this.y + 30, 45, 27);
        this.BBbottom = new BoundingBox(this.x + 10, this.y+ 40, 45, 10); 
       
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
        if (this.color == 0) {
            this.spritesheet = ASSET_MANAGER.getAsset("./sprites/characters/Animal SpriteSheets/cow/Pink cow animation sprites.png");
        } else if (this.color == 1) {
            this.spritesheet = ASSET_MANAGER.getAsset("./sprites/characters/Animal SpriteSheets/cow/Light cow animation sprites.png");
        } else if (this.color == 2) {
            this.spritesheet = ASSET_MANAGER.getAsset("./sprites/characters/Animal SpriteSheets/cow/Brown cow animation sprites.png");
        } else if (this.color == 3) {
            this.spritesheet = ASSET_MANAGER.getAsset("./sprites/characters/Animal SpriteSheets/cow/Purple cow animation sprites.png");
        }
        // 0 idle
        this.animations[0][0] = new Animator (this.spritesheet, 0, 0, BACKGROUND.COW_SIZE, BACKGROUND.COW_SIZE, 3, 0.2, 0, false, true);
        this.animations[0][1] = new Animator (this.spritesheet, BACKGROUND.COW_SIZE * 3, 0, BACKGROUND.COW_SIZE, BACKGROUND.COW_SIZE, 3, 0.2, 0, false, true);
        // 1 walk 
        this.animations[1][0] = new Animator (this.spritesheet, 0, BACKGROUND.COW_SIZE, BACKGROUND.COW_SIZE, BACKGROUND.COW_SIZE, 8, 0.2, 0, false, true);
        this.animations[1][1] = new Animator (this.spritesheet, BACKGROUND.COW_SIZE * 8,BACKGROUND.COW_SIZE , BACKGROUND.COW_SIZE, BACKGROUND.COW_SIZE, 8, 0.2, 0, true, true);
        // 2 sit
        this.animations[2][0] = new Animator (this.spritesheet, 0, BACKGROUND.COW_SIZE * 3, BACKGROUND.COW_SIZE, BACKGROUND.COW_SIZE, 3, 0.2, 0, false, true);
        this.animations[2][1] = new Animator (this.spritesheet, BACKGROUND.COW_SIZE * 3, BACKGROUND.COW_SIZE * 3, BACKGROUND.COW_SIZE, BACKGROUND.COW_SIZE, 3, 0.2, 0, true, true);
        // 3 eat
        this.animations[3][0] = new Animator (this.spritesheet, 0, BACKGROUND.COW_SIZE * 5, BACKGROUND.COW_SIZE, BACKGROUND.COW_SIZE, 17, 0.3, 0, false, true);
        this.animations[3][1] = new Animator (this.spritesheet, 0, BACKGROUND.COW_SIZE * 6, BACKGROUND.COW_SIZE, BACKGROUND.COW_SIZE, 17, 0.3, 0, true, true);
        // 4 sleep
        this.animations[4][0] = new Animator (this.spritesheet, 0, BACKGROUND.COW_SIZE * 4, BACKGROUND.COW_SIZE, BACKGROUND.COW_SIZE, 4, 0.5, 0, false, true);
        this.animations[4][1] = new Animator (this.spritesheet, BACKGROUND.COW_SIZE * 4, BACKGROUND.COW_SIZE * 4, BACKGROUND.COW_SIZE, BACKGROUND.COW_SIZE, 4, 0.5, 0, true, true);
    }

    update() {
        const MIN_WALK = 10;
        const TICK = this.game.clockTick;
        this.velocity.x = 0;
        this.velocity.y = 0;
         
        if (this.type == 1) {
            if (!this.collidedRight) {
                this.velocity.x += MIN_WALK;
                this.state = 1;
            } else if (!this.collidedLeft) {
                this.state = 1;
                this.velocity.x -= MIN_WALK;
            }
        }
        this.updateBB();
        var that = this;
        this.game.entities.forEach(function(entity) {
           if (entity.BB && that.BB.collide(entity.BB)) {
               if (entity instanceof Fence && that.BB.collide(entity.BBinterior)) {
                    if (that.BB.collide(entity.BBinteriorRight)) {
                        that.collidedRight = true;
                        that.collidedLeft = false;
                    }
                    if (that.BB.collide(entity.BBinteriorLeft)) {   
                        that.collidedLeft = true;
                        that.collidedRight = false;
                    }      
               } else {
                   
               }
               if (entity instanceof Bunny && that.BB.collide(entity.BB)) {
                    that.velocity.x = 0;
                } else {

                }
           }
       })
       this.updateBB();
       if (this.velocity.x > 0) this.facing = 0; // right
       if (this.velocity.x < 0) this.facing = 1; // left
       if (this.velocity.x == 0 && this.type == 1) {
           this.state = 0;
       }
       
       this.x += this.velocity.x * TICK * 2;
       this.y += this.velocity.y * TICK * 2;

      
    };

    draw(ctx) {
        this.animations[this.state][this.facing].drawFrame(this.game.clockTick, ctx, this.x, this.y, 2);
        if (this.game.bunny.milkInteract && this.color == this.game.bunny.cowInteract && !this.milkGenerated) {
            this.game.addEntity(new Milk(this.game, this));  
            this.milkGenerated = true;
            this.game.bunny.milkInteract = false;
        }
       
        if (PARAMS.DEBUG) {
            ctx.strokeStyle = 'Red';
            ctx.strokeRect(this.BB.x, this.BB.y, this.BB.width, this.BB.height);
            ctx.strokeRect(this.BBbottom.x, this.BBbottom.y, this.BBbottom.width, this.BBbottom.height);
        }

      
  
    };
}