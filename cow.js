class Cow {
    constructor(game, x, y) {
        Object.assign(this, { game, x, y});
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/characters/Animal SpriteSheets/cow/Pink cow animation sprites.png");
        this.facing = 0; // 0 = right; 1 = left
        this.state = 0; // 0 = idle, 1 = walking, 2 = sit 3 = sleep 4 = sniff 5 = eat 6 = love
        this.animations = [];
        this.velocity = { x: 0, y: 0};
        this.collidedRight = false;
        this.collidedLeft = false;
        this.loadAnimations();
        this.updateBB();
    }

    updateBB() {
        this.lastBB = this.BB;
        this.BB = new BoundingBox(this.x + 10, this.y + 30, 45, 27); 
    }

    loadAnimations() {
         // array with [state] [face] of the same animator.
         for (var i = 0; i < 7; i++) {
            this.animations.push([]);
            for (var j = 0; j < 2; j++) {
                this.animations[i].push([]);
            }
        }
        // idle
        this.animations[0][0] = new Animator (this.spritesheet, 0, 0, PARAMS.COW_SIZE, PARAMS.COW_SIZE, 3, 0.2, 0, false, true);
        this.animations[0][1] = new Animator (this.spritesheet, PARAMS.COW_SIZE * 3, 0, PARAMS.COW_SIZE, PARAMS.COW_SIZE, 3, 0.2, 0, false, true);
        // walk 
        this.animations[1][0] = new Animator (this.spritesheet, 0, PARAMS.COW_SIZE, PARAMS.COW_SIZE, PARAMS.COW_SIZE, 8, 0.2, 0, false, true);
        this.animations[1][1] = new Animator (this.spritesheet, PARAMS.COW_SIZE * 8,PARAMS.COW_SIZE , PARAMS.COW_SIZE, PARAMS.COW_SIZE, 8, 0.2, 0, true, true);
    }

    update() {
        const MIN_WALK = 10;
        const TICK = this.game.clockTick;
        this.velocity.x = 0;
        this.velocity.y = 0;
        // automaticaly walk right
        // hit a collision 
        // turns left 
        // randomize actions? 
        // change state every now and then?
        // set a timer to do idle before moving  
        this.updateBB();  
        if (!this.collidedRight) {
            this.velocity.x += MIN_WALK;
            this.state = 1;
        } else if (!this.collidedLeft) {
            this.state = 1;
            this.velocity.x -= MIN_WALK;
        }
      
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
                //that.idleState = false;
               }
           }
       })
       if (this.velocity.x > 0) this.facing = 0; // right
       if (this.velocity.x < 0) this.facing = 1; // left
       this.x += this.velocity.x * TICK * 2;
       this.y += this.velocity.y * TICK * 2;
    };

    draw(ctx) {
        this.animations[this.state][this.facing].drawFrame(this.game.clockTick, ctx, this.x, this.y, 2);
        if (PARAMS.DEBUG) {
            ctx.strokeStyle = 'Red';
            ctx.strokeRect(this.BB.x, this.BB.y, this.BB.width, this.BB.height);
        }
    };
}
