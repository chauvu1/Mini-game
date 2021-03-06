class House {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});
        this.game.house = this;
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/tilesets/Building parts/Wooden House.png");  
        //this.bubblesheet = ASSET_MANAGER.getAsset("./sprites/speech_bubble.png");
        this.nightLight = new Animator(this.spritesheet, 60, 196, 60, 49, 4, 0.2, 0, false, true);
        this.light = false;
        this.door = false;
        this.visible = false;
        this.inside = false;
        this.nightLampInteract = false;
        this.state = 0;
        this.animation = [];
        for (var i = 0; i < 4; i++) {
            this.animation.push([]);
        }
        //this.bubble = new Animator(this.bubblesheet, 0, 0, 11, 11, 8, 0.1, 0, false, true);
        this.loadAnimations();
        this.createBB();
        this.updateBB();
    }

    loadAnimations() {
        this.animation[0] = new Animator(this.spritesheet, 60, 0, 60, 49, 1, 0.2, 0, false, true); // roof 
        this.animation[1] = new Animator(this.spritesheet, 0, 49, 60, 49, 1, 0.2, 0, false, true);  // no roof
        this.animation[2] = new Animator(this.spritesheet, 0, 49, 60, 49, 6, 0.1, 0, false, false); // no roof animation
        this.animation[3] = new Animator(this.spritesheet, 0, 0, 60, 49, 1, 0.1, 0, false, true); // no roof no doors
    }

    updateBB() {
        this.BBdoor = new BoundingBox(this.x + this.BB.width / 2 - 20, this.y + this.BB.height - 50, 40, 50);
        this.BBinterior = new BoundingBox(this.x + 27, this.y + 65, 185, 115);
        this.BBinteriorLeft = new BoundingBox(this.x + 10, this.y + 10, 16, 170);
        this.BBinteriorRight = new BoundingBox(this.x + 10 + 208 - 6, this.y + 10, 16, 170);
        this.BBinteriorBottomLeft = new BoundingBox(this.x + 10, this.y + 168 + 12, 90, 8);
        this.BBinteriorBottomRight = new BoundingBox(this.x + 10 + 130, this.y + 168 + 12, 90, 8);
        this.BBinteriorTop = new BoundingBox(this.x + 10, this.y + 10, 220, 55);
        //this.BBinteriorDoor = new BoundingBox(this.x + this.BB.width / 2 - 20, this.y + this.BB.height - 20, 40, 10);


        this.BBbed = new BoundingBox(385, 184, 54, 85);
        this.BBbedRight = new BoundingBox(385 + 54 - 10, 184, 10, 75);
        this.BBbedBottom = new BoundingBox(385, 184 + 85 - 10, 54, 10);
        this.BBtable = new BoundingBox(447, 206, 44, 40);
        this.BBtableRight = new BoundingBox(447 + 34, 206, 10, 30);
        this.BBtableBottom = new BoundingBox(447, 206 + 30, 44, 10);
    };

    update() {
        if (this.visible) {
            if (this.door) {
                this.BBdoor.remove();
            } 
       } else {
        this.updateBB(); 
    }

    };

    createBB() {
        this.BB = new BoundingBox(this.x, this.y, 
            BACKGROUND.HOUSE.WIDTH * BACKGROUND.HOUSE.SCALE,
            BACKGROUND.HOUSE.HEIGHT * BACKGROUND.HOUSE.SCALE + 5);
        this.BBleft = new BoundingBox(this.x, this.y + 10, 
            10,
            BACKGROUND.HOUSE.HEIGHT * BACKGROUND.HOUSE.SCALE - 15);
        this.BBright = new BoundingBox(this.x + this.BB.width - 10, this.y + 10, 
            10,
            BACKGROUND.HOUSE.HEIGHT * BACKGROUND.HOUSE.SCALE - 15);
        this.BBtop= new BoundingBox(this.x, this.y, 
            BACKGROUND.HOUSE.WIDTH * BACKGROUND.HOUSE.SCALE,
            10);
        this.BBbottomLeft = new BoundingBox(this.x, this.y + this.BB.height - 5 - 5, 
            BACKGROUND.HOUSE.WIDTH * BACKGROUND.HOUSE.SCALE / 2 - 20,
            10);
        this.BBbottomRight = new BoundingBox(this.x + this.BB.width - BACKGROUND.HOUSE.WIDTH * 2 + 20, this.y + this.BB.height - 5 - 5, 
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

        if (this.visible && ! this.door) {
            this.animation[1].drawFrame(this.game.clockTick, ctx, this.x, this.y, 4);
            //this.bubble.drawFrame(this.game.clockTick, ctx, 460, 280, 3);
        } else if (this.visible && this.door) {
            this.animation[2].drawFrame(this.game.clockTick, ctx, this.x, this.y, 4);
        }  else {
            this.animation[0].drawFrame(this.game.clockTick, ctx, this.x, this.y, 4);
        }
        if (this.nightLampInteract && !this.light) {
            //this.bubble.drawFrame(this.game.clockTick, ctx, this.x + 100, this.y, 3);
        }
        if (this.light) {
            this.nightLight.drawFrame(this.game.clockTick, ctx, this.x, this.y, 4);
            
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

                ctx.strokeRect(this.BBtable.x, this.BBtable.y, this.BBtable.width, this.BBtable.height);
                ctx.strokeRect(this.BBtableRight.x, this.BBtableRight.y, this.BBtableRight.width, this.BBtableRight.height);
                ctx.strokeRect(this.BBtableBottom.x, this.BBtableBottom.y, this.BBtableBottom.width, this.BBtableBottom.height);
                //ctx.strokeRect(this.BBinteriorDoor.x, this.BBinteriorDoor.y, this.BBinteriorDoor.width, this.BBinteriorDoor.height);
            }
            if (!this.door) {
                ctx.strokeStyle = 'yellow';
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