class Grass {
    constructor(game, x, y) {
        Object.assign(this, { game, x, y});
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/background_spritesheet.png");      
    }

    update() {

    };

    draw(ctx) {
        let countX = PARAMS.CANVAS_WIDTH / PARAMS.TILEWIDTH;
        let countY = PARAMS.CANVAS_HEIGHT / PARAMS.TILEWIDTH;
        let xGreenTileLocation = 192;
        for (var i = 0; i < countX; i++) {
            for (var j = 0; j < countY; j++) {
                ctx.drawImage(this.spritesheet, xGreenTileLocation, 0, PARAMS.TILEWIDTH, PARAMS.TILEWIDTH,
                    PARAMS.SCALE * PARAMS.TILEWIDTH * i + this.x, PARAMS.TILEWIDTH * j * PARAMS.SCALE + this.y, PARAMS.TILEWIDTH * PARAMS.SCALE, PARAMS.TILEWIDTH  * PARAMS.SCALE);
            }
        }
        ctx.imageSmoothingEnabled = false;
    }
}

class House {
    constructor(game, x, y) {
        Object.assign(this, { game, x, y});
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/background_spritesheet.png");  
        let chimmey = ASSET_MANAGER.getAsset("./sprites/chimmey_smoke.png");   
        this.animations = new Animator(chimmey, 0, 0, 48, 48, 4, .2, 0, false, true);
        this.scale = 2.5;
        this.houseWidth = 160;
        this.houseHeight = 128;
        this.padding = 80;
        // make more bounding box for doors
        this.BB = new BoundingBox(this.x + this.padding / PARAMS.SCALE, this.y, this.houseWidth * this.scale - this.padding, 
            this.houseHeight * this.scale - this.padding);
    }
    update() {};

    draw(ctx) {
        let xHouseLocation = 96;
        let yHouseLocation = 2112;
        ctx.drawImage(this.spritesheet, xHouseLocation, yHouseLocation,  this.houseWidth, this.houseHeight,
           this.x, this.y, this.houseWidth * this.scale, this.houseHeight * this.scale) ;
        this.animations.drawFrame(this.game.clockTick, ctx, 145, 60, 2.5);
        
        if (PARAMS.DEBUG) {
            ctx.strokeStyle = 'yellow';
            ctx.lineWidth = 2;
            ctx.strokeRect(this.BB.x, this.BB.y, this.BB.width, this.BB.height);
        }
        ctx.imageSmoothingEnabled = false;
    }
}
class Pavement {
    constructor(game, x, y) {
        Object.assign(this, { game, x, y});
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/background_spritesheet.png"); 
    }
    update() {};

    draw(ctx) {
        let row1 = 32;
        let row2 = 64;
        let row3 = 96;
        let row4 = 192; 
        let row5 = 160;
    
        //left side
        ctx.drawImage(this.spritesheet, row1, row1, PARAMS.TILEWIDTH, PARAMS.TILEWIDTH, 
            this.x, this.y, PARAMS.TILEWIDTH * PARAMS.SCALE, PARAMS.TILEWIDTH * PARAMS.SCALE);
        ctx.drawImage(this.spritesheet, row4, row1, PARAMS.TILEWIDTH, PARAMS.TILEWIDTH, 
            this.x - PARAMS.TILEWIDTH * PARAMS.SCALE , this.y, PARAMS.TILEWIDTH * PARAMS.SCALE, PARAMS.TILEWIDTH * PARAMS.SCALE); 
            
        // bottom top left
        ctx.drawImage(this.spritesheet, row1, row2, PARAMS.TILEWIDTH, PARAMS.TILEWIDTH, 
            this.x, this.y + PARAMS.TILEWIDTH * PARAMS.SCALE, PARAMS.TILEWIDTH * PARAMS.SCALE, PARAMS.TILEWIDTH * PARAMS.SCALE);
            
        // connect bottom top left 
        for (var i = 1; i < 5; i++) {     
            ctx.drawImage(this.spritesheet, row5, row3, PARAMS.TILEWIDTH, PARAMS.TILEWIDTH, 
                this.x - PARAMS.TILEWIDTH * PARAMS.SCALE * i , this.y + PARAMS.TILEWIDTH * PARAMS.SCALE, PARAMS.TILEWIDTH * PARAMS.SCALE, PARAMS.TILEWIDTH * PARAMS.SCALE); 
        }
        // connect middle left 
        for (var i = 2; i < 7; i++) {
            ctx.drawImage(this.spritesheet, row1, row3, PARAMS.TILEWIDTH, PARAMS.TILEWIDTH, 
                this.x, this.y + PARAMS.TILEWIDTH * PARAMS.SCALE * i, PARAMS.TILEWIDTH * PARAMS.SCALE, PARAMS.TILEWIDTH * PARAMS.SCALE);   
        }
        // connect blank bottom left
        for (var i = 2; i < 7; i++) {
            for (var j = 1; j < 5; j++)
            ctx.drawImage(this.spritesheet, row5, 0, PARAMS.TILEWIDTH, PARAMS.TILEWIDTH, 
                this.x - PARAMS.TILEWIDTH * PARAMS.SCALE * j, this.y + PARAMS.TILEWIDTH * PARAMS.SCALE * i, PARAMS.TILEWIDTH * PARAMS.SCALE, PARAMS.TILEWIDTH * PARAMS.SCALE); 
        }

        // right bottom side
        ctx.drawImage(this.spritesheet, row3, row1, PARAMS.TILEWIDTH, PARAMS.TILEWIDTH, 
            this.x + PARAMS.TILEWIDTH * PARAMS.SCALE + 75, this.y, PARAMS.TILEWIDTH * PARAMS.SCALE, PARAMS.TILEWIDTH * PARAMS.SCALE);
        ctx.drawImage(this.spritesheet, row5, row1, PARAMS.TILEWIDTH, PARAMS.TILEWIDTH, 
            this.x + PARAMS.TILEWIDTH * PARAMS.SCALE * 2 + 75, this.y, PARAMS.TILEWIDTH * PARAMS.SCALE, PARAMS.TILEWIDTH * PARAMS.SCALE);    
        ctx.drawImage(this.spritesheet, row3, row2, PARAMS.TILEWIDTH, PARAMS.TILEWIDTH, 
            this.x + PARAMS.TILEWIDTH * PARAMS.SCALE + 75, this.y + PARAMS.TILEWIDTH * PARAMS.SCALE, PARAMS.TILEWIDTH * PARAMS.SCALE, PARAMS.TILEWIDTH * PARAMS.SCALE);
       
        // connect bottom top right
        for (var i = 2; i < 9; i++) {
            ctx.drawImage(this.spritesheet, row4, row3, PARAMS.TILEWIDTH, PARAMS.TILEWIDTH, 
                this.x + PARAMS.TILEWIDTH * PARAMS.SCALE * i + 75, this.y + PARAMS.TILEWIDTH * PARAMS.SCALE, PARAMS.TILEWIDTH * PARAMS.SCALE, PARAMS.TILEWIDTH * PARAMS.SCALE);
        }

        // connect middle right 
        for (var i = 2; i < 7; i++) {
            ctx.drawImage(this.spritesheet, row3, row3, PARAMS.TILEWIDTH, PARAMS.TILEWIDTH, 
                this.x + PARAMS.TILEWIDTH * PARAMS.SCALE + 75, this.y + PARAMS.TILEWIDTH * PARAMS.SCALE * i , PARAMS.TILEWIDTH * PARAMS.SCALE, PARAMS.TILEWIDTH * PARAMS.SCALE);   
        }     
    
        // connect blank middle right 
        for (var i = 2; i < 7; i++) {
            for (var j = 2; j < 9; j++)
            ctx.drawImage(this.spritesheet, row5, 0, PARAMS.TILEWIDTH, PARAMS.TILEWIDTH, 
                this.x + PARAMS.TILEWIDTH * PARAMS.SCALE * j + 75, this.y + PARAMS.TILEWIDTH * PARAMS.SCALE * i , PARAMS.TILEWIDTH * PARAMS.SCALE, PARAMS.TILEWIDTH * PARAMS.SCALE);
        }
        ctx.imageSmoothingEnabled = false;
    }

}
class MailBox {
    constructor(game, x, y) {
        Object.assign(this, { game, x, y});
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/background_spritesheet.png");
        this.BB = new BoundingBox(this.x + 15, this.y, PARAMS.TILEWIDTH * PARAMS.SCALE - 30, 
            PARAMS.TILEWIDTH * PARAMS.SCALE); 
    }
    update() {};

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 0, 736, PARAMS.TILEWIDTH, PARAMS.TILEWIDTH, this.x, this.y, PARAMS.TILEWIDTH * PARAMS.SCALE, PARAMS.TILEWIDTH * PARAMS.SCALE);
        ctx.imageSmoothingEnabled = false;
        if (PARAMS.DEBUG) {
            ctx.strokeStyle = 'yellow';
            ctx.lineWidth = 2;
            ctx.strokeRect(this.BB.x, this.BB.y, this.BB.width, this.BB.height);
        }
    }
}
class Fence {
    // location where to put them 
    // width height ? then its easier to add fence individually and add bounding box. 
    constructor(game, x, y, typeX, typeY) {
        Object.assign(this, { game, x, y, typeX, typeY});
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/background_spritesheet.png"); 
        this.BB = new BoundingBox(this.x , this.y + backGround.fencePadding, PARAMS.TILEWIDTH * PARAMS.SCALE, 
            PARAMS.TILEWIDTH * PARAMS.SCALE - backGround.fencePadding);
    }
    update() {};

    draw(ctx) {
        ctx.drawImage(this.spritesheet, this.typeX, this.typeY, 
            PARAMS.TILEWIDTH, PARAMS.TILEWIDTH,
            this.x, this.y,
            PARAMS.TILEWIDTH * PARAMS.SCALE, 
            PARAMS.TILEWIDTH * PARAMS.SCALE);
            
        if (PARAMS.DEBUG) {
            ctx.strokeStyle = 'yellow';
            ctx.lineWidth = 2;
            ctx.strokeRect(this.BB.x, this.BB.y, this.BB.width, this.BB.height);
        }
        ctx.imageSmoothingEnabled = false;
    }

}
class Flower {
    constructor(game, x, y) {
        Object.assign(this, { game, x, y});
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/background_spritesheet.png"); 
        this.BB = new BoundingBox(this.x , this.y, PARAMS.TILEWIDTH * PARAMS.SCALE + 50, 
            PARAMS.TILEWIDTH * PARAMS.SCALE - 20);
    }
    update() {};

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 32, 800, PARAMS.TILEWIDTH, PARAMS.TILEWIDTH, this.x, this.y, PARAMS.TILEWIDTH * 1.5, PARAMS.TILEWIDTH * 1.5);
        ctx.drawImage(this.spritesheet, 64, 832, PARAMS.TILEWIDTH * PARAMS.SCALE, PARAMS.TILEWIDTH, this.x + PARAMS.TILEWIDTH * 1.5 - 10, this.y, PARAMS.TILEWIDTH * PARAMS.SCALE * 1.5, PARAMS.TILEWIDTH * 1.5);
        if (PARAMS.DEBUG) {
            ctx.strokeStyle = 'yellow';
            ctx.lineWidth = 2;
            ctx.strokeRect(this.BB.x, this.BB.y, this.BB.width, this.BB.height);
        }
        ctx.imageSmoothingEnabled = false;
    }
}

class Tree {
    constructor(game, x, y) {
        Object.assign(this, { game, x, y});
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/background_spritesheet.png"); 
        this.BB = new BoundingBox(this.x , this.y, 65 * PARAMS.SCALE, 
            77 * PARAMS.SCALE);
    }
    update() {};

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 128, 912, 64, 77, this.x, this.y, 65 * PARAMS.SCALE, 77 * PARAMS.SCALE);
        if (PARAMS.DEBUG) {
            ctx.strokeStyle = 'yellow';
            ctx.lineWidth = 2;
            ctx.strokeRect(this.BB.x, this.BB.y, this.BB.width, this.BB.height);
        }
        ctx.imageSmoothingEnabled = false;
    }
}
class Bridge {
    constructor(game, x, y) {
        Object.assign(this, { game, x, y});
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/background_spritesheet.png"); 
        this.BB = new BoundingBox(this.x, this.y + 10, 65 * 1.8, 128 * 1.8);
    }
    update() {};

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 96, 224, 64, 128, this.x, this.y, 65 * 1.8, 128 * 1.8);
        if (PARAMS.DEBUG) {
            ctx.strokeStyle = 'yellow';
            ctx.lineWidth = 2;
            ctx.strokeRect(this.BB.x, this.BB.y, this.BB.width, this.BB.height);
        }
        ctx.imageSmoothingEnabled = false;
    }
}

class Bonfire {
    constructor(game, x, y) {
        Object.assign(this, { game, x, y});
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/background_spritesheet.png"); 
        this.firesheet = ASSET_MANAGER.getAsset("./sprites/fire.png"); 
        this.fireAnim = new Animator(this.firesheet, 0, 0, 32, 32, 6, .1, 0, false, true);

        this.fireBB = new BoundingBox(464, 525, PARAMS.TILEWIDTH * PARAMS.SCALE, 
            PARAMS.TILEWIDTH * PARAMS.SCALE - 30);
        this.leftLogBB = new BoundingBox(425, 520, PARAMS.TILEWIDTH * PARAMS.SCALE - 40, 
            PARAMS.TILEWIDTH * PARAMS.SCALE);
        this.rightLogBB = new BoundingBox(542, 520, PARAMS.TILEWIDTH * PARAMS.SCALE - 40, 
            PARAMS.TILEWIDTH * PARAMS.SCALE);
    }
    update() {};

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 0, 1537, 96, 64, this.x, this.y, 96 * PARAMS.SCALE, 64 * PARAMS.SCALE);
        this.fireAnim.drawFrame(this.game.clockTick, ctx, 458, 475, 2.5);
        if (PARAMS.DEBUG) {
            ctx.strokeStyle = 'yellow';
            ctx.lineWidth = 2;
            ctx.strokeRect(this.fireBB.x, this.fireBB.y, this.fireBB.width, this.fireBB.height);
            ctx.strokeRect(this.leftLogBB.x, this.leftLogBB.y, this.leftLogBB.width, this.leftLogBB.height);
            ctx.strokeRect(this.rightLogBB.x, this.rightLogBB.y, this.rightLogBB.width, this.rightLogBB.height);
        }

        ctx.imageSmoothingEnabled = false;
    }
}


class Pond {
    constructor(game, x, y) {
        Object.assign(this, { game, x, y});
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/background_spritesheet.png"); 
        this.BB = new BoundingBox(this.x, this.y, 255, 200);
    }

    update() {};

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 96, 128, 32, 69, this.x, this.y, 32 * 2, 69 * 2);
        ctx.drawImage(this.spritesheet, 128, 128, 32, 69, this.x + PARAMS.TILEWIDTH * PARAMS.SCALE, this.y , 32 * 2, 69 * 2);
        ctx.drawImage(this.spritesheet, 128, 128, 32, 69, this.x + PARAMS.TILEWIDTH * 2 * PARAMS.SCALE, this.y , 32 * 2, 69 * 2);
        ctx.drawImage(this.spritesheet, 160, 128, 32, 69, this.x + PARAMS.TILEWIDTH * 3 * PARAMS.SCALE, this.y , 32 * 2, 69 * 2);
        if (PARAMS.DEBUG) {
            ctx.strokeStyle = 'yellow';
            ctx.lineWidth = 2;
            ctx.strokeRect(this.BB.x, this.BB.y, this.BB.width, this.BB.height);
        }
        ctx.imageSmoothingEnabled = false;
    }

}
class Pig {
    constructor(game, x, y) {
        Object.assign(this, { game, x, y});
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/piggy.png"); 
        this.pigAnim = new Animator(this.spritesheet, 0, 0, 108, 108, 4, .18, 0, false, true);
        this.BB = new BoundingBox(this.x, this.y, 108 * .8, 108 *.8);
    }
    update() {};

    draw(ctx) {
        this.pigAnim.drawFrame(this.game.clockTick, ctx, this.x, this.y, .8);
        if (PARAMS.DEBUG) {
            ctx.strokeStyle = 'yellow';
            ctx.lineWidth = 2;
            ctx.strokeRect(this.BB.x, this.BB.y, this.BB.width, this.BB.height);
        }
        ctx.imageSmoothingEnabled = false;
    }
}
