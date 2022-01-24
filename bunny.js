class Bunny {
    constructor(game, x, y) {
        Object.assign(this, { game, x, y});
        this.game.x = this;
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/bunny_spritesheet.png");     
        this.velocity = { x: 0, y: 0};
        this.facing = 2; // 0 = right; 1 = left; 2 = down; 3 = up
        this.state = 0; // 0 = idle, 1 = walking
        this.animations = [];
        this.loadAnimations();
    };

    loadAnimations() {
           // array with [state] [face] of the same animator.
           for (var i = 0; i < 2; i++) {
            this.animations.push([]);
            for (var j = 0; j < 4; j++) {
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
    }

        
    draw(ctx) {
        let scale = 1;
        this.animations[this.state][this.facing].drawFrame(this.game.clockTick, ctx, this.x, this.y, scale);
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
        }

        if (Math.abs(this.velocity.x) > 0) {
            this.state = 1;
        } else if (Math.abs(this.velocity.y) > 0) {
            this.state = 1;
        } else {
            this.state = 0;
        }

        // update direction
        if (this.velocity.x > 0) this.facing = 0; // right
        if (this.velocity.x < 0) this.facing = 1; // left
        if (this.velocity.y > 0) this.facing = 2; // down
        if (this.velocity.y < 0) this.facing = 3; // up
       

        this.x += this.velocity.x * TICK * 2;
        this.y += this.velocity.y * TICK * 2;
    }


}