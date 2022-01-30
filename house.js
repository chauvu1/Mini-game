
class HouseInterior {
    constructor(game, x, y) {
        Object.assign(this, { game, x, y});
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/tilesets/Building parts/Wooden House.png"); 
        this.animation = new Animator(this.spritesheet, 60, 147, 60, 49, 5, 0.2, 0, true, false);  
        this.timer = 0;
       
    }
    update() {
        
    };

    draw(ctx) {
       
        if (this.game.house.inside) {
            this.timer += this.game.clockTick;
            if (this.timer > 0.8)
            ctx.drawImage(this.spritesheet, 60, 147, 60, 49, this.x, this.y, 60 * 4, 49 * 4);
        } else {
            ctx.drawImage(this.spritesheet, 0, 147, 60, 49, this.x, this.y, 60 * 4, 49 * 4);
        }
        this.animation.drawFrame(this.game.clockTick, ctx, this.x, this.y, 4);
    };
}

class House {
    constructor(game, x, y) {
        Object.assign(this, { game, x, y});
        this.game.house = this;
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/tilesets/Building parts/Wooden House.png");  
        this.bubblesheet = ASSET_MANAGER.getAsset("./sprites/speech_bubble.png");
        this.door = false;
        this.visible = false;
        this.inside = false;
        this.state = 0;
        this.animation = [];
        for (var i = 0; i < 2; i++) {
            this.animation.push([]);
        }
        this.bubble = new Animator(this.bubblesheet, 0, 0, 11, 11, 8, 0.1, 0, false, true);
        this.loadAnimations();
        this.createBB();
        this.updateBB();
    }

    loadAnimations() {
        this.animation[0] = new Animator(this.spritesheet, 60, 0, 60, 49, 1, 0.2, 0, false, true); // roof 
        this.animation[1] = new Animator(this.spritesheet, 0, 49, 60, 49, 1, 0.2, 0, false, true);  // no roof
        this.animation[2] = new Animator(this.spritesheet, 0, 49, 60, 49, 6, 0.2, 0, false, false); // no roof animation
    }

    updateBB() {
        this.BBdoor = new BoundingBox(this.x + this.BB.width / 2 - 20, this.y + this.BB.height - 50, 40, 50);
        this.BBinterior = new BoundingBox(this.x + 27, this.y + 65, 185, 115);
        this.BBinteriorLeft = new BoundingBox(this.x + 10, this.y + 10, 16, 170);
        this.BBinteriorRight = new BoundingBox(this.x + 10 + 208 - 6, this.y + 10, 16, 170);
        this.BBinteriorBottomLeft = new BoundingBox(this.x + 10, this.y + 168 + 12, 90, 8);
        this.BBinteriorBottomRight = new BoundingBox(this.x + 10 + 130, this.y + 168 + 12, 90, 8);
        this.BBinteriorTop = new BoundingBox(this.x + 10, this.y + 10, 220, 55);

        this.BBbed = new BoundingBox(385, 184, 54, 85);
        this.BBbedRight = new BoundingBox(385 + 54 - 10, 184, 10, 75);
        this.BBbedBottom = new BoundingBox(385, 184 + 85 - 10, 54, 10);

    };

    update() {
        if (this.visible) {
            this.state = 1;
            if (this.door) {
                this.state = 2;
                this.BBdoor.remove();
            }
        } else {
            this.state = 0; 
            this.updateBB();  
        }
       
        
    };

    createBB() {
        this.BB = new BoundingBox(this.x, this.y, 
            BACKGROUND.HOUSE.WIDTH * BACKGROUND.HOUSE.SCALE,
            BACKGROUND.HOUSE.HEIGHT * BACKGROUND.HOUSE.SCALE);
        this.BBleft = new BoundingBox(this.x, this.y + 10, 
            10,
            BACKGROUND.HOUSE.HEIGHT * BACKGROUND.HOUSE.SCALE - 20);
        this.BBright = new BoundingBox(this.x + this.BB.width - 10, this.y + 10, 
            10,
            BACKGROUND.HOUSE.HEIGHT * BACKGROUND.HOUSE.SCALE - 20);
        this.BBtop= new BoundingBox(this.x, this.y, 
            BACKGROUND.HOUSE.WIDTH * BACKGROUND.HOUSE.SCALE,
            10);
        this.BBbottomLeft = new BoundingBox(this.x, this.y + this.BB.height - 10, 
            BACKGROUND.HOUSE.WIDTH * BACKGROUND.HOUSE.SCALE / 2 - 20,
            10);
        this.BBbottomRight = new BoundingBox(this.x + this.BB.width - BACKGROUND.HOUSE.WIDTH * 2 + 20, this.y + this.BB.height - 10, 
            BACKGROUND.HOUSE.WIDTH * BACKGROUND.HOUSE.SCALE / 2 - 20,
            10);
       
    }

    draw(ctx) {
           // base image of the house, with no roof & doors
        ctx.drawImage(this.spritesheet, 0, 0,
            60,  49,
            this.x,
            this.y,
            60 * 4,
            49 * 4);

        this.animation[this.state].drawFrame(this.game.clockTick, ctx, this.x, this.y, 4);

        if (this.visible && ! this.door) {
            this.bubble.drawFrame(this.game.clockTick, ctx, 460, 280, 3);
        } 

        if (PARAMS.DEBUG) {
            if (this.door) {
                ctx.strokeStyle = 'pink';
                
                ctx.strokeRect(this.BBbedRight.x, this.BBbedRight.y, this.BBbedRight.width, this.BBbedRight.height);
                ctx.strokeRect(this.BBbedBottom.x, this.BBbedBottom.y, this.BBbedBottom.width, this.BBbedBottom.height);
                
                ctx.strokeRect(this.BBinteriorLeft.x, this.BBinteriorLeft.y, this.BBinteriorLeft.width, this.BBinteriorLeft.height);
                ctx.strokeRect(this.BBinteriorRight.x, this.BBinteriorRight.y, this.BBinteriorRight.width, this.BBinteriorRight.height);
                ctx.strokeRect(this.BBinteriorTop.x, this.BBinteriorTop.y, this.BBinteriorTop.width, this.BBinteriorTop.height);
                ctx.strokeRect(this.BBinteriorBottomLeft.x, this.BBinteriorBottomLeft.y, this.BBinteriorBottomLeft.width, this.BBinteriorBottomLeft.height);
                ctx.strokeRect(this.BBinteriorBottomRight.x, this.BBinteriorBottomRight.y, this.BBinteriorBottomRight.width, this.BBinteriorBottomRight.height);
                ctx.strokeStyle = 'red';
                ctx.strokeRect(this.BBinterior.x, this.BBinterior.y, this.BBinterior.width, this.BBinterior.height);
                ctx.strokeRect(this.BBbed.x, this.BBbed.y, this.BBbed.width, this.BBbed.height);
            }
            if (!this.door) {
                ctx.strokeStyle = 'yellow';
                ctx.lineWidth = 2;
                ctx.strokeRect(this.BB.x, this.BB.y, this.BB.width, this.BB.height);
                ctx.strokeStyle = 'red';
                ctx.strokeRect(this.BBleft.x, this.BBleft.y, this.BBleft.width, this.BBleft.height);
                ctx.strokeRect(this.BBright.x, this.BBright.y, this.BBright.width, this.BBright.height);
                ctx.strokeStyle = 'yellow';
                ctx.strokeRect(this.BBtop.x, this.BBtop.y, this.BBtop.width, this.BBtop.height);
                ctx.strokeRect(this.BBbottomLeft.x, this.BBbottomLeft.y, this.BBbottomLeft.width, this.BBbottomLeft.height);
                ctx.strokeRect(this. BBbottomRight.x, this. BBbottomRight.y, this. BBbottomRight.width, this. BBbottomRight.height);  
                ctx.strokeStyle = 'pink';
                ctx.strokeRect(this.BBdoor.x, this.BBdoor.y, this.BBdoor.width, this.BBdoor.height);
            }        
        }
        ctx.imageSmoothingEnabled = false;
    }
}