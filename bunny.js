class Bunny {
    constructor(game, x, y) {
        Object.assign(this, { game, x, y});
        this.game.bunny = this;
        this.game.x = this;
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/bunny_spritesheet.png"); 
        this.bubblesheet = ASSET_MANAGER.getAsset("./sprites/speech_bubble.png");

        this.emotesheet = ASSET_MANAGER.getAsset("./sprites/emotes.png");
        this.emoteAnim = [];

        this.velocity = { x: 0, y: 0};
        this.facing = 2; // 0 = right; 1 = left; 2 = down; 3 = up; 4 = bed
        this.state = 0; // 0 = idle, 1 = walking, 2 = crouch
        this.animations = [];
        this.sleep = false;
        this.bedVisible = false;
        this.loadAnimations();
        this.updateBB();
    };

    loadAnimations() {
           // array with [state] [face] of the same animator.
           for (var i = 0; i < 3; i++) {
            this.animations.push([]);
            for (var j = 0; j < 5; j++) {
                this.animations[i].push([]);
            }
        }
        // idle right row 3
        // idle left row 4
        // idle down row 1
        // idle up row 2
        this.animations[0][0] = new Animator (this.spritesheet, 0, PARAMS.BITWIDTH * 2, PARAMS.BITWIDTH, PARAMS.BITWIDTH, 4, 0.2, 0, false, true);
        this.animations[0][1] = new Animator (this.spritesheet, 0, PARAMS.BITWIDTH * 3, PARAMS.BITWIDTH, PARAMS.BITWIDTH, 4, 0.2, 0, false, true);
        this.animations[0][2] = new Animator (this.spritesheet, 0, 0, PARAMS.BITWIDTH, PARAMS.BITWIDTH, 4, 0.2, 0, false, true);
        this.animations[0][3] = new Animator (this.spritesheet, 0, PARAMS.BITWIDTH, PARAMS.BITWIDTH, PARAMS.BITWIDTH, 4, 0.2, 0, false, true);

        // walk right 7
        // walk left 8
        // walk down 5
        // walk up 6
        this.animations[1][0] = new Animator (this.spritesheet, 0, PARAMS.BITWIDTH * 6, PARAMS.BITWIDTH, PARAMS.BITWIDTH, 4, 0.2, 0, false, true);
        this.animations[1][1] = new Animator (this.spritesheet, 0, PARAMS.BITWIDTH * 7, PARAMS.BITWIDTH, PARAMS.BITWIDTH, 4, 0.2, 0, false, true);
        this.animations[1][2] = new Animator (this.spritesheet, 0, PARAMS.BITWIDTH * 4, PARAMS.BITWIDTH, PARAMS.BITWIDTH, 4, 0.2, 0, false, true);
        this.animations[1][3] = new Animator (this.spritesheet, 0, PARAMS.BITWIDTH * 5, PARAMS.BITWIDTH, PARAMS.BITWIDTH, 4, 0.2, 0, false, true);
        // bed animation
        this.animations[1][4] = new Animator (this.spritesheet, 332, 632, 56, 88, 1, 0.2, 0, false, true);

        // 0 640 80 80 right crouch
        // 80 640 80 80 left crouch
        // 160 640 down 
        // 240 640 up

        this.animations[2][0] = new Animator (this.spritesheet, 0, PARAMS.BITWIDTH * 8, PARAMS.BITWIDTH, PARAMS.BITWIDTH, 1, 0.2, 0, false, true);
        this.animations[2][1] = new Animator (this.spritesheet, 80, PARAMS.BITWIDTH * 8, PARAMS.BITWIDTH, PARAMS.BITWIDTH, 1, 0.2, 0, false, true);
        this.animations[2][2] = new Animator (this.spritesheet, 160, PARAMS.BITWIDTH * 8, PARAMS.BITWIDTH, PARAMS.BITWIDTH, 1, 0.2, 0, false, true);
        this.animations[2][3] = new Animator (this.spritesheet, 240, PARAMS.BITWIDTH * 8, PARAMS.BITWIDTH, PARAMS.BITWIDTH, 1, 0.2, 0, false, true);

        // this.animations[0][4] = new Animator (this.spritesheet, 400, 400, 100, 151, 1, 0.2, 0, false, true);
        this.emoteAnim = new Animator (this.emotesheet, 0,0, 32, 32, 4, 0.2, 0, false, true);
        this.bubble = new Animator(this.bubblesheet, 0, 0, 11, 11, 8, 0.1, 0, false, true);
    }
    /* Update the bounding box of the player for collision detection */
    updateBB() {
        this.lastBB = this.BB;
        this.BB = new BoundingBox(this.x + 25, this.y + 74, 64 - 36, 5); 
    };
        
    draw(ctx) {
        let scale = 1;
       
        if (this.sleep) {
            this.animations[1][4].drawFrame(this.game.clockTick, ctx, 385, 182, 1);
            this.emoteAnim.drawFrame(this.game.clockTick, ctx, 400, 175, 1);
            this.bedVisible = false;
        } else {
            this.animations[this.state][this.facing].drawFrame(this.game.clockTick, ctx, this.x, this.y, 1);
        }
        if (this.bedVisible) {
            this.bubble.drawFrame(this.game.clockTick, ctx, 404, 160, 3);
            this.bedVisible = false;
        } 
        if (PARAMS.DEBUG) {
            ctx.strokeStyle = 'Red';
            ctx.strokeRect(this.BB.x, this.BB.y, this.BB.width, this.BB.height);
        }
        ctx.imageSmoothingEnabled = false;
    }

    update() {
        const MIN_WALK = 100;
        const TICK = this.game.clockTick;

        this.velocity.x = 0;
        this.velocity.y = 0;
        if (this.game.left) {
            this.velocity.x -= MIN_WALK;
        } else if (this.game.right) {
            this.velocity.x += MIN_WALK;
        } else if (this.game.down) {
            this.velocity.y += MIN_WALK;
        } else if (this.game.up) {
            this.velocity.y -= MIN_WALK;
        } else if (this.game.crouch) {
            this.state = 2;
        }
        if (!this.game.crouch) {
            if (Math.abs(this.velocity.x) > 0) {
                this.state = 1;
            } else if (Math.abs(this.velocity.y) > 0) {
                this.state = 1;
            } else {
                this.state = 0;
            }
        }
       
        this.updateBB();

        var that = this; 
        this.game.entities.forEach(function (entity) {         
            if (entity.BB && that.BB.collide(entity.BB)) { // if the bunny collide with the box  
                if ((entity instanceof House || entity instanceof Fence) && that.BB.collide(entity.BB)) {
                    if (that.BB.collide(entity.BBbottomLeft)  && that.lastBB.bottom <= entity.BBbottomLeft.bottom) {
                        if (that.velocity.y < 0) that.velocity.y = 0;
                    }
                    if (that.BB.collide(entity.BBbottomRight) && that.lastBB.bottom <= entity.BBbottomRight.bottom) {
                        if (that.velocity.y < 0) that.velocity.y = 0;
                    }
                    if (that.BB.collide(entity.BBtop) && that.lastBB.bottom >= entity.BBtop.top) {
                        if (that.velocity.y > 0) that.velocity.y = 0;
                    }
                    if (that.BB.collide(entity.BBleft) && that.lastBB.right >= entity.BBleft.left) {
                        if (that.velocity.x > 0) that.velocity.x = 0;
                    }
                    if (that.BB.collide(entity.BBright) && that.lastBB.left <= entity.BBright.right) {
                        if (that.velocity.x < 0) that.velocity.x = 0;
                    }
                    if (that.BB.collide(entity.BBdoor) && that.lastBB.bottom <= entity.BBdoor.bottom) {
                        if (that.velocity.y < 0) that.velocity.y = 0;
                    }
                }
                that.updateBB();
            }

            if ((entity instanceof Fence || entity instanceof House) && that.BB.collide(entity.BBinterior)) {
                
                if (that.BB.collide(entity.BBinteriorBottomLeft) && that.lastBB.bottom >= entity.BBinteriorBottomLeft.top) {
                    if (that.velocity.y > 0) that.velocity.y = 0;
                }
                if (that.BB.collide(entity.BBinteriorBottomRight) && that.lastBB.bottom >= entity.BBinteriorBottomRight.top) {
                    if (that.velocity.y > 0) that.velocity.y = 0;
                }
                if (that.BB.collide(entity.BBinteriorLeft) && that.lastBB.left <= entity.BBinteriorLeft.right) {
                    if (that.velocity.x < 0) that.velocity.x = 0;
                }
                if (that.BB.collide(entity.BBinteriorRight) && that.lastBB.right >= entity.BBinteriorRight.left) {
                    if (that.velocity.x > 0) that.velocity.x = 0;
                }
                if (that.BB.collide(entity.BBinteriorTop) && that.lastBB.top <= entity.BBinteriorTop.bottom) {
                    if (that.velocity.y < 0) that.velocity.y = 0;
                }    
                that.updateBB();
            } 
            // walk out - door disappears.
            if ((entity instanceof House)) {
                if (that.lastBB.left + 3 > entity.BBinteriorLeft.right 
                    && that.lastBB.right - 3 < entity.BBinteriorRight.left
                    && that.lastBB.bottom - 3 < entity.BBinteriorBottomLeft.top
                    && that.lastBB.bottom - 3 < entity.BBinteriorBottomRight.top 
                    && that.lastBB.top + 3 > entity.BBinteriorTop.bottom) {
                    entity.inside = true;
                } else {
                    entity.inside = false;
                   
                }
                that.updateBB();
            }
            if ((entity instanceof Fence)) {
                if (that.lastBB.left + 3 > entity.BBinteriorLeft.right 
                    && that.lastBB.right - 3 < entity.BBinteriorRight.left
                    && that.lastBB.bottom - 3 < entity.BBinteriorBottomLeft.top
                    && that.lastBB.bottom - 3 < entity.BBinteriorBottomRight.top 
                    && that.lastBB.top + 3 > entity.BBinteriorTop.bottom) {
                    entity.inside = true;
                } else {
                    entity.inside = false;
                }
                that.updateBB();
            }
        
            if (entity instanceof House && that.BB.collide(entity.BBbed)) {
                if (that.BB.collide(entity.BBbedRight) && that.lastBB.left <= entity.BBbedRight.right) {
                    if (that.velocity.x < 0) that.velocity.x = 0;
                }
                if (that.BB.collide(entity.BBbedBottom) && that.lastBB.top <= entity.BBbedBottom.bottom) {
                    if (that.velocity.y < 0) that.velocity.y = 0;
                }
                that.updateBB();
            }

            if (entity instanceof House && that.BB.collide(entity.BBtable)) {
                if (that.BB.collide(entity.BBtableRight) && that.lastBB.left <= entity.BBtableRight.right) {
                    if (that.velocity.x < 0) that.velocity.x = 0;
                }
                if (that.BB.collide(entity.BBtableBottom) && that.lastBB.top <= entity.BBtableBottom.bottom) {
                    if (that.velocity.y < 0) that.velocity.y = 0;
                }
                console.log(entity.light);
                if ((that.BB.collide(entity.BBtableBottom) || that.BB.collide(entity.BBtableRight)) && that.game.interact) {
                    entity.light = true;
                } 
                that.updateBB();
            } else {
                entity.light = false;
            }
  

            if (entity instanceof Grass && that.BB.collide(entity.BB)) {
                if (that.BB.collide(entity.BB) && that.lastBB.left <= entity.BB.left) {
                    if (that.velocity.x < 0) that.velocity.x = 0;
                }
                if (that.BB.collide(entity.BB) && that.lastBB.right >= entity.BB.right) {
                    if (that.velocity.x > 0) that.velocity.x = 0;
                }
                if (that.BB.collide(entity.BB) && that.lastBB.bottom >= entity.BB.bottom) {
                    if (that.velocity.y > 0) that.velocity.y = 0;
                }
                if (that.BB.collide(entity.BB) && that.lastBB.top <= entity.BB.top) {
                    if (that.velocity.y < 0) that.velocity.y = 0;
                }
                that.updateBB();
            }
                
            if (entity instanceof Tree && that.BB.collide(entity.BB)) {
                if (that.BB.collide(entity.BBbottom) && that.lastBB.bottom <= entity.BBbottom.bottom) {
                    if (that.velocity.y < 0) that.velocity.y = 0;
                }
                if (that.BB.collide(entity.BBbottomTop) && that.lastBB.bottom >= entity.BBbottomTop.top) {
                    if (that.velocity.y > 0) that.velocity.y = 0;
                }
                if (that.BB.collide(entity.BBtop) && that.lastBB.bottom >= entity.BBtop.top) {
                    entity.under = true;
                } 
                if (that.BB.collide(entity.BBleft) && that.lastBB.right >= entity.BBleft.left) {
                    entity.under = true;
                }
                if (that.BB.collide(entity.BBright) && that.lastBB.left <= entity.BBright.right) {
                    entity.under = true;
                }   
                that.updateBB();
            } else {
                entity.under = false;
            }
            if (entity.BB && that.BB.withinRange(entity.BB)) {

                if (entity instanceof House && that.BB.withinRange(entity.BBbed)) {
                    that.bedVisible = true;
                    if (that.BB.withinRange(entity.BBbed) && that.game.interact) {
                         that.sleep = true;
                    } 
                    if (that.velocity.y > 0 || that.velocity.x < 0 || that.velocity.y < 0 || that.velocity.x > 0){
                        that.sleep = false;
                    }
                } 
                that.updateBB();
            }   


            
            if (entity.BB && that.BB.withinRange(entity.BB)) {
                if ((entity instanceof House || entity instanceof Fence) && that.BB.withinRange(entity.BBdoor)) {
                    entity.visible = true;
                    if (that.BB.withinRange(entity.BBdoor) && that.game.interact)
                        entity.door = true;
                    } 

                    that.updateBB();
                }  else {
                    entity.visible = false;
                    entity.door = false;
                }
            }
        
        );          

        // update direction
        if (this.velocity.x > 0) this.facing = 0; // right
        if (this.velocity.x < 0) this.facing = 1; // left
        if (this.velocity.y > 0) this.facing = 2; // down
        if (this.velocity.y < 0) this.facing = 3; // up
       

        this.x += this.velocity.x * TICK * 2;
        this.y += this.velocity.y * TICK * 2;
    }


}