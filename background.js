class Grass {
    constructor(game, x, y) {
        Object.assign(this, { game, x, y});
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/tilesets/Grass.png");   
        this.BB = new BoundingBox(BACKGROUND.BB.START.X + BACKGROUND.BB.START.PADDING,
            BACKGROUND.BB.START.Y + BACKGROUND.BB.START.PADDING,
            BACKGROUND.BB.WIDTH - BACKGROUND.BB.PADDING,
            BACKGROUND.BB.HEIGHT - BACKGROUND.BB.PADDING);
    }

    update() {

    };

    draw(ctx) {

        ctx.drawImage(this.spritesheet, BACKGROUND.GRASS.LEFT_PIECE.START.X, BACKGROUND.GRASS.LEFT_PIECE.START.Y,
                    BACKGROUND.GRASS.LEFT_PIECE.SIZE,  BACKGROUND.GRASS.LEFT_PIECE.SIZE,
                    BACKGROUND.GRASS.LEFT_PIECE.LOCATION_START.X,
                    BACKGROUND.GRASS.LEFT_PIECE.LOCATION_START.Y,
                    BACKGROUND.GRASS.LEFT_PIECE.SIZE * BACKGROUND.GRASS.LEFT_PIECE.SCALE,
                    BACKGROUND.GRASS.LEFT_PIECE.SIZE * BACKGROUND.GRASS.LEFT_PIECE.SCALE);

        ctx.drawImage(this.spritesheet, BACKGROUND.GRASS.RIGHT_PIECE.START.X, BACKGROUND.GRASS.RIGHT_PIECE.START.Y,
                    BACKGROUND.GRASS.RIGHT_PIECE.SIZE,  BACKGROUND.GRASS.RIGHT_PIECE.SIZE,
                    BACKGROUND.GRASS.RIGHT_PIECE.LOCATION_START.X,
                    BACKGROUND.GRASS.RIGHT_PIECE.LOCATION_START.Y,
                    BACKGROUND.GRASS.RIGHT_PIECE.SIZE * BACKGROUND.GRASS.RIGHT_PIECE.SCALE,
                    BACKGROUND.GRASS.RIGHT_PIECE.SIZE * BACKGROUND.GRASS.RIGHT_PIECE.SCALE);

        for (var i = BACKGROUND.GRASS.WIDTH_SIZE.START; i < BACKGROUND.GRASS.WIDTH_SIZE.END; i++) {
            for (var j = BACKGROUND.GRASS.HEIGHT_SIZE.START; j < BACKGROUND.GRASS.HEIGHT_SIZE.END; j++) {
                // middle piece top
                ctx.drawImage(this.spritesheet, BACKGROUND.GRASS.MIDDLE_PIECE.TOP.X, BACKGROUND.GRASS.MIDDLE_PIECE.TOP.Y,
                    BACKGROUND.GRASS.MIDDLE_PIECE.SIZE, BACKGROUND.GRASS.MIDDLE_PIECE.SIZE,
                    BACKGROUND.GRASS.MIDDLE_PIECE.SIZE * BACKGROUND.GRASS.MIDDLE_PIECE.SCALE * i,
                    BACKGROUND.GRASS.MIDDLE_PIECE.SIZE * BACKGROUND.GRASS.MIDDLE_PIECE.SCALE,
                    BACKGROUND.GRASS.MIDDLE_PIECE.SIZE * BACKGROUND.GRASS.MIDDLE_PIECE.SCALE,
                    BACKGROUND.GRASS.MIDDLE_PIECE.SIZE * BACKGROUND.GRASS.MIDDLE_PIECE.SCALE);
                // middle
                ctx.drawImage(this.spritesheet, BACKGROUND.GRASS.CENTER_PIECE.X,  BACKGROUND.GRASS.CENTER_PIECE.Y,
                    BACKGROUND.GRASS.CENTER_PIECE.SIZE, BACKGROUND.GRASS.CENTER_PIECE.SIZE,
                    BACKGROUND.GRASS.CENTER_PIECE.SIZE * BACKGROUND.GRASS.CENTER_PIECE.SCALE * i + this.x,
                    BACKGROUND.GRASS.CENTER_PIECE.SIZE * BACKGROUND.GRASS.CENTER_PIECE.SCALE * j + this.y,
                    BACKGROUND.GRASS.CENTER_PIECE.SIZE * BACKGROUND.GRASS.CENTER_PIECE.SCALE,
                    BACKGROUND.GRASS.CENTER_PIECE.SIZE * BACKGROUND.GRASS.CENTER_PIECE.SCALE);
                // middle piece bottom
                ctx.drawImage(this.spritesheet,BACKGROUND.GRASS.MIDDLE_PIECE.BOTTOM.X, BACKGROUND.GRASS.MIDDLE_PIECE.BOTTOM.Y,
                    BACKGROUND.GRASS.MIDDLE_PIECE.SIZE, BACKGROUND.GRASS.MIDDLE_PIECE.SIZE,
                    BACKGROUND.GRASS.MIDDLE_PIECE.SIZE * BACKGROUND.GRASS.MIDDLE_PIECE.SCALE * i,
                    BACKGROUND.GRASS.MIDDLE_PIECE.SIZE * BACKGROUND.GRASS.MIDDLE_PIECE.SCALE * BACKGROUND.GRASS.HEIGHT_SIZE.END,
                    BACKGROUND.GRASS.MIDDLE_PIECE.SIZE * BACKGROUND.GRASS.MIDDLE_PIECE.SCALE,
                    BACKGROUND.GRASS.MIDDLE_PIECE.SIZE * BACKGROUND.GRASS.MIDDLE_PIECE.SCALE);
                // middle piece left
                ctx.drawImage(this.spritesheet,BACKGROUND.GRASS.MIDDLE_PIECE.LEFT.X, BACKGROUND.GRASS.MIDDLE_PIECE.LEFT.Y,
                    BACKGROUND.GRASS.MIDDLE_PIECE.SIZE, BACKGROUND.GRASS.MIDDLE_PIECE.SIZE,
                    BACKGROUND.GRASS.MIDDLE_PIECE.SIZE * BACKGROUND.GRASS.MIDDLE_PIECE.SCALE,
                    BACKGROUND.GRASS.MIDDLE_PIECE.SIZE * BACKGROUND.GRASS.MIDDLE_PIECE.SCALE * j,
                    BACKGROUND.GRASS.MIDDLE_PIECE.SIZE * BACKGROUND.GRASS.MIDDLE_PIECE.SCALE,
                    BACKGROUND.GRASS.MIDDLE_PIECE.SIZE * BACKGROUND.GRASS.MIDDLE_PIECE.SCALE);
                // middle piece right
                ctx.drawImage(this.spritesheet,BACKGROUND.GRASS.MIDDLE_PIECE.RIGHT.X, BACKGROUND.GRASS.MIDDLE_PIECE.RIGHT.Y,
                    BACKGROUND.GRASS.MIDDLE_PIECE.SIZE, BACKGROUND.GRASS.MIDDLE_PIECE.SIZE,
                    BACKGROUND.GRASS.MIDDLE_PIECE.SIZE * BACKGROUND.GRASS.MIDDLE_PIECE.SCALE * BACKGROUND.GRASS.WIDTH_SIZE.END,
                    BACKGROUND.GRASS.MIDDLE_PIECE.SIZE * BACKGROUND.GRASS.MIDDLE_PIECE.SCALE * j,
                    BACKGROUND.GRASS.MIDDLE_PIECE.SIZE * BACKGROUND.GRASS.MIDDLE_PIECE.SCALE,
                    BACKGROUND.GRASS.MIDDLE_PIECE.SIZE * BACKGROUND.GRASS.MIDDLE_PIECE.SCALE);
            }
        }

        ctx.drawImage(this.spritesheet, BACKGROUND.GRASS.LEFT_PIECE.END.X, BACKGROUND.GRASS.LEFT_PIECE.END.Y,
                    BACKGROUND.GRASS.LEFT_PIECE.SIZE,  BACKGROUND.GRASS.LEFT_PIECE.SIZE,
                    BACKGROUND.GRASS.LEFT_PIECE.LOCATION_END.X,
                    BACKGROUND.GRASS.LEFT_PIECE.LOCATION_END.Y,
                    BACKGROUND.GRASS.LEFT_PIECE.SIZE * BACKGROUND.GRASS.LEFT_PIECE.SCALE,
                    BACKGROUND.GRASS.LEFT_PIECE.SIZE * BACKGROUND.GRASS.LEFT_PIECE.SCALE);

        ctx.drawImage(this.spritesheet, BACKGROUND.GRASS.RIGHT_PIECE.END.X, BACKGROUND.GRASS.RIGHT_PIECE.END.Y,
                    BACKGROUND.GRASS.RIGHT_PIECE.SIZE,  BACKGROUND.GRASS.RIGHT_PIECE.SIZE,
                    BACKGROUND.GRASS.RIGHT_PIECE.LOCATION_END.X,
                    BACKGROUND.GRASS.RIGHT_PIECE.LOCATION_END.Y,
                    BACKGROUND.GRASS.RIGHT_PIECE.SIZE * BACKGROUND.GRASS.RIGHT_PIECE.SCALE,
                    BACKGROUND.GRASS.RIGHT_PIECE.SIZE * BACKGROUND.GRASS.RIGHT_PIECE.SCALE);
        if (PARAMS.DEBUG) {
            ctx.strokeStyle = 'yellow';
            ctx.lineWidth = 2;
            ctx.strokeRect(this.BB.x, this.BB.y, this.BB.width, this.BB.height);
        }
        ctx.imageSmoothingEnabled = false;
    }
}

class Water {
    constructor(game, x, y) {
        Object.assign(this, { game, x, y});
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/tilesets/Water.png");  
        this.animation = new Animator(this.spritesheet, BACKGROUND.WATER.X, BACKGROUND.WATER.Y,
            BACKGROUND.WATER.SIZE, BACKGROUND.WATER.SIZE, BACKGROUND.WATER.FRAME, BACKGROUND.WATER.SPEED,
            BACKGROUND.WATER.FRAME_PAD, BACKGROUND.WATER.REVERSE, BACKGROUND.WATER.LOOP);
    }

    update() {

    };

    draw(ctx) {
        this.animation.drawFrame(this.game.clockTick, ctx, this.x, this.y, BACKGROUND.WATER.SCALE);
        ctx.imageSmoothingEnabled = false;
    }
}

class Pavement {
    constructor(game, x, y) {
        Object.assign(this, { game, x, y});
        // 0 0 16 48
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/tilesets/Building parts/Paths.png");
    }

    update() {

    };
    draw(ctx) {
        ctx.drawImage(this.spritesheet, BACKGROUND.PAVEMENT.X, BACKGROUND.PAVEMENT.Y,
            BACKGROUND.PAVEMENT.WIDTH,  BACKGROUND.PAVEMENT.HEIGHT,
            this.x,
            this.y,
            BACKGROUND.PAVEMENT.WIDTH * BACKGROUND.PAVEMENT.SCALE,
            BACKGROUND.PAVEMENT.HEIGHT * BACKGROUND.PAVEMENT.SCALE);
    };
}
class Fence {
    constructor(game, x, y) {
        Object.assign(this, { game, x, y});
        // 0 0 16 48
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/tilesets/Building parts/Fences.png");
        this.BB = new BoundingBox(this.x + 16, this.y + 9, 
            64 * 3 - 29,
            64 * 3 - 18);
    }
    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 0, 0, 
                        64, 64,
                        this.x, this.y,
                        64 * 3, 
                        64 * 3);
        if (PARAMS.DEBUG) {
            ctx.strokeStyle = 'yellow';
            ctx.lineWidth = 2;
            ctx.strokeRect(this.BB.x, this.BB.y, this.BB.width, this.BB.height);
        }

    }
}
class Boat {
    constructor(game, x, y) {
        Object.assign(this, { game, x, y});
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/objects/Boats.png");
        this.animation = new Animator(this.spritesheet, 0, 0, 48, 32, 2, .4, 0, false, true);
    }

    update() {

    };

    draw(ctx) {
        this.animation.drawFrame(this.game.clockTick, ctx, this.x, this.y, 3);
    }

}

class Tree {
    constructor(game, x, y) {
        Object.assign(this, { game, x, y});
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/objects/Trees, stumps and bushes.png");
        this.BB = new BoundingBox(this.x + 10, this.y, 32 * 3 - 20, 32 * 3 - 10);
        
    }

    update() {

    };

    draw(ctx) {
        ctx.drawImage(this.spritesheet, 16, 0,
            32,  32,
            this.x,
            this.y,
            32 * 3,
            32 * 3); 
        if (PARAMS.DEBUG) {
            ctx.strokeStyle = 'yellow';
            ctx.lineWidth = 2;
            ctx.strokeRect(this.BB.x, this.BB.y, this.BB.width, this.BB.height);
        }
    }

}
