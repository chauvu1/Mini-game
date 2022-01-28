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
        this.animation = new Animator(this.spritesheet, 0, 0, 16, 16, 4, .5, 0, false, true);

    }

    update() {

    };

    draw(ctx) {
        this.animation.drawFrame(this.game.clockTick, ctx, this.x, this.y, 4);
        ctx.imageSmoothingEnabled = false;
    }
}

// class House {
//     constructor(game, x, y) {
//         Object.assign(this, { game, x, y});
//         this.spritesheet = ASSET_MANAGER.getAsset("./sprites/background_spritesheet.png");  
//         let chimmey = ASSET_MANAGER.getAsset("./sprites/chimmey_smoke.png");   
//         this.animations = new Animator(chimmey, 0, 0, 48, 48, 4, .2, 0, false, true);
//         this.scale = 2.5;
//         this.houseWidth = 160;
//         this.houseHeight = 128;
//         this.padding = 80;
//         // make more bounding box for doors
//         this.BB = new BoundingBox(this.x + this.padding / PARAMS.SCALE, this.y, this.houseWidth * this.scale - this.padding, 
//             this.houseHeight * this.scale - this.padding);
//         this.BBleft = new BoundingBox(this.x + this.padding / PARAMS.SCALE, this.y, 130, 
//             this.houseHeight * this.scale - this.padding);
//         this.BBright = new BoundingBox(this.BB.width + 10, this.y, 130, 
//             this.houseHeight * this.scale - this.padding);
//         this.BBtop = new BoundingBox(this.x + this.padding / PARAMS.SCALE, this.y, this.houseWidth * this.scale - this.padding, 
//             130);
//         this.BBbot = new BoundingBox(this.x + this.padding / PARAMS.SCALE, this.y + 110, this.houseWidth * this.scale - this.padding, 
//             130);    

//     }
//     update() {};

//     draw(ctx) {
//         let xHouseLocation = 96;
//         let yHouseLocation = 2112;
//         ctx.drawImage(this.spritesheet, xHouseLocation, yHouseLocation,  this.houseWidth, this.houseHeight,
//            this.x, this.y, this.houseWidth * this.scale, this.houseHeight * this.scale) ;
//         this.animations.drawFrame(this.game.clockTick, ctx, 145, 60, 2.5);
        
//         if (PARAMS.DEBUG) {
//             ctx.strokeStyle = 'yellow';
//             ctx.lineWidth = 2;
//             ctx.strokeRect(this.BB.x, this.BB.y, this.BB.width, this.BB.height);
//             ctx.strokeStyle = 'red';
//             ctx.strokeRect(this.BBleft.x, this.BBleft.y, this.BBleft.width, this.BBleft.height);
//             ctx.strokeRect(this.BBright.x, this.BBright.y, this.BBright.width, this.BBright.height);
//             ctx.strokeRect(this.BBtop.x, this.BBtop.y, this.BBtop.width, this.BBtop.height);
//             ctx.strokeRect(this.BBbot.x, this.BBbot.y, this.BBbot.width, this.BBbot.height);
//         }
//         ctx.imageSmoothingEnabled = false;
//     }
// }


// class Pavement {
//     constructor(game, x, y) {
//         Object.assign(this, { game, x, y});
//         this.spritesheet = ASSET_MANAGER.getAsset("./sprites/background_spritesheet.png"); 
//     }
//     update() {};

//     draw(ctx) {
//         let row1 = 32;
//         let row2 = 64;
//         let row3 = 96;
//         let row4 = 192; 
//         let row5 = 160;
    
//         //left side
//         ctx.drawImage(this.spritesheet, row1, row1, PARAMS.TILEWIDTH, PARAMS.TILEWIDTH, 
//             this.x, this.y, PARAMS.TILEWIDTH * PARAMS.SCALE, PARAMS.TILEWIDTH * PARAMS.SCALE);
//         ctx.drawImage(this.spritesheet, row4, row1, PARAMS.TILEWIDTH, PARAMS.TILEWIDTH, 
//             this.x - PARAMS.TILEWIDTH * PARAMS.SCALE , this.y, PARAMS.TILEWIDTH * PARAMS.SCALE, PARAMS.TILEWIDTH * PARAMS.SCALE); 
            
//         // bottom top left
//         ctx.drawImage(this.spritesheet, row1, row2, PARAMS.TILEWIDTH, PARAMS.TILEWIDTH, 
//             this.x, this.y + PARAMS.TILEWIDTH * PARAMS.SCALE, PARAMS.TILEWIDTH * PARAMS.SCALE, PARAMS.TILEWIDTH * PARAMS.SCALE);
            
//         // connect bottom top left 
//         for (var i = 1; i < 5; i++) {     
//             ctx.drawImage(this.spritesheet, row5, row3, PARAMS.TILEWIDTH, PARAMS.TILEWIDTH, 
//                 this.x - PARAMS.TILEWIDTH * PARAMS.SCALE * i , this.y + PARAMS.TILEWIDTH * PARAMS.SCALE, PARAMS.TILEWIDTH * PARAMS.SCALE, PARAMS.TILEWIDTH * PARAMS.SCALE); 
//         }
//         // connect middle left 
//         for (var i = 2; i < 9; i++) {
//             ctx.drawImage(this.spritesheet, row1, row3, PARAMS.TILEWIDTH, PARAMS.TILEWIDTH, 
//                 this.x, this.y + PARAMS.TILEWIDTH * PARAMS.SCALE * i, PARAMS.TILEWIDTH * PARAMS.SCALE, PARAMS.TILEWIDTH * PARAMS.SCALE);   
//         }
//         // connect blank bottom left
//         for (var i = 2; i < 9; i++) {
//             for (var j = 1; j < 5; j++)
//             ctx.drawImage(this.spritesheet, row5, 0, PARAMS.TILEWIDTH, PARAMS.TILEWIDTH, 
//                 this.x - PARAMS.TILEWIDTH * PARAMS.SCALE * j, this.y + PARAMS.TILEWIDTH * PARAMS.SCALE * i, PARAMS.TILEWIDTH * PARAMS.SCALE, PARAMS.TILEWIDTH * PARAMS.SCALE); 
//         }

//         // right bottom side
//         ctx.drawImage(this.spritesheet, row3, row1, PARAMS.TILEWIDTH, PARAMS.TILEWIDTH, 
//             this.x + PARAMS.TILEWIDTH * PARAMS.SCALE + 75, this.y, PARAMS.TILEWIDTH * PARAMS.SCALE, PARAMS.TILEWIDTH * PARAMS.SCALE);
//         ctx.drawImage(this.spritesheet, row5, row1, PARAMS.TILEWIDTH, PARAMS.TILEWIDTH, 
//             this.x + PARAMS.TILEWIDTH * PARAMS.SCALE * 2 + 75, this.y, PARAMS.TILEWIDTH * PARAMS.SCALE, PARAMS.TILEWIDTH * PARAMS.SCALE);    
//         ctx.drawImage(this.spritesheet, row3, row2, PARAMS.TILEWIDTH, PARAMS.TILEWIDTH, 
//             this.x + PARAMS.TILEWIDTH * PARAMS.SCALE + 75, this.y + PARAMS.TILEWIDTH * PARAMS.SCALE, PARAMS.TILEWIDTH * PARAMS.SCALE, PARAMS.TILEWIDTH * PARAMS.SCALE);
       
//         // connect bottom top right
//         for (var i = 2; i < 9; i++) {
//             ctx.drawImage(this.spritesheet, row4, row3, PARAMS.TILEWIDTH, PARAMS.TILEWIDTH, 
//                 this.x + PARAMS.TILEWIDTH * PARAMS.SCALE * i + 75, this.y + PARAMS.TILEWIDTH * PARAMS.SCALE, PARAMS.TILEWIDTH * PARAMS.SCALE, PARAMS.TILEWIDTH * PARAMS.SCALE);
//         }

//         // connect middle right 
//         for (var i = 2; i < 9; i++) {
//             ctx.drawImage(this.spritesheet, row3, row3, PARAMS.TILEWIDTH, PARAMS.TILEWIDTH, 
//                 this.x + PARAMS.TILEWIDTH * PARAMS.SCALE + 75, this.y + PARAMS.TILEWIDTH * PARAMS.SCALE * i , PARAMS.TILEWIDTH * PARAMS.SCALE, PARAMS.TILEWIDTH * PARAMS.SCALE);   
//         }     
    
//         // connect blank middle right 
//         for (var i = 2; i < 9; i++) {
//             for (var j = 2; j < 9; j++)
//             ctx.drawImage(this.spritesheet, row5, 0, PARAMS.TILEWIDTH, PARAMS.TILEWIDTH, 
//                 this.x + PARAMS.TILEWIDTH * PARAMS.SCALE * j + 75, this.y + PARAMS.TILEWIDTH * PARAMS.SCALE * i , PARAMS.TILEWIDTH * PARAMS.SCALE, PARAMS.TILEWIDTH * PARAMS.SCALE);
//         }
//         ctx.imageSmoothingEnabled = false;
//     }

// }


// class MailBox {
//     constructor(game, x, y) {
//         Object.assign(this, { game, x, y});
//         this.spritesheet = ASSET_MANAGER.getAsset("./sprites/mailbox_spritesheet.png");
//         this.speechsheet = ASSET_MANAGER.getAsset("./sprites/speech_bubble.png");
//         this.animation = [];
//         this.state = 0;
//         this.transition = 0;
//         this.open = false;
//         this.outline = false;

//         for (var i = 0; i < 2; i++) {
//             this.animation.push([]);
//             for (var j = 0; j < 2; j++) {
//                 this.animation[i].push([]);
//             }
//         }
//         // this.state - this outline
//         this.animation[0][0] = new Animator (this.spritesheet, 34, 34, 34, 34, 1, 1, 0, false, true);  // unopened 
//         this.animation[0][1] = new Animator (this.spritesheet, 0, 34, 34, 34, 1, 1, 0, false, true);  // hightlight unopened

//         this.animation[1][0]= new Animator (this.spritesheet, 34, 0, 34, 34, 1, 1, 0, false, true);  // opened
//         this.animation[1][1] = new Animator (this.spritesheet, 0, 0, 34, 34, 1, 1, 0, false, true);   // hightlight opened

//         this.speechbubble = new Animator (this.speechsheet, 0, 0, 11, 11, 8, 0.2, 0, false, true);  

//         this.BB = new BoundingBox(this.x + 17, this.y, PARAMS.TILEWIDTH * PARAMS.SCALE - 30, 
//             PARAMS.TILEWIDTH * PARAMS.SCALE); 
//         this.BBleft = new BoundingBox(this.x + 17, this.y, PARAMS.TILEWIDTH * PARAMS.SCALE - 30 - 23, 
//             PARAMS.TILEWIDTH * PARAMS.SCALE); 
//         this.BBright = new BoundingBox(this.x + this.BB.width + 6, this.y, PARAMS.TILEWIDTH * PARAMS.SCALE - 30 - 23, 
//             PARAMS.TILEWIDTH * PARAMS.SCALE); 
//         this.BBtop = new BoundingBox(this.x + 17, this.y, PARAMS.TILEWIDTH * PARAMS.SCALE - 30, 
//             10); 
//         this.BBbot = new BoundingBox(this.x + 17, this.y + this.BB.height - 10, PARAMS.TILEWIDTH * PARAMS.SCALE - 30, 
//             10); 
       
//     }
//     update() {
//         if (this.outline) {
//             this.transition = 1;
//             if (this.open) {
//                 this.state = 1; 
//             }
//         }  else {
//             this.state = 0;
//             this.transition = 0;
//         }
      
        
//     };

//     draw(ctx) {
//         this.animation[this.state][this.transition].drawFrame(this.game.clockTick, ctx, this.x, this.y, PARAMS.SCALE);
//         if (this.outline && !this.open) {
//             this.speechbubble.drawFrame(this.game.clockTick, ctx, this.x + this.BB.width / 2, this.y - 20, 3);
//         } 
//         //ctx.drawImage(this.spritesheet, 0, 736, PARAMS.TILEWIDTH, PARAMS.TILEWIDTH, this.x, this.y, PARAMS.TILEWIDTH * PARAMS.SCALE, PARAMS.TILEWIDTH * PARAMS.SCALE);
//         ctx.imageSmoothingEnabled = false;
//         if (PARAMS.DEBUG) {
//             ctx.strokeStyle = 'yellow';
//             ctx.lineWidth = 2;
//             ctx.strokeRect(this.BB.x, this.BB.y, this.BB.width, this.BB.height);
//             ctx.strokeStyle = 'red';
//             ctx.strokeRect(this.BBleft.x, this.BBleft.y, this.BBleft.width, this.BBleft.height);
//             ctx.strokeRect(this.BBright.x, this.BBright.y, this.BBright.width, this.BBright.height);
//             ctx.strokeRect(this.BBtop.x, this.BBtop.y, this.BBtop.width, this.BBtop.height);
//             ctx.strokeRect(this.BBbot.x, this.BBbot.y, this.BBbot.width, this.BBbot.height);
//         }
//     }
// }

// class Fence { 
//     constructor(game, x, y, typeX, typeY) {
//         Object.assign(this, { game, x, y, typeX, typeY});
//         this.spritesheet = ASSET_MANAGER.getAsset("./sprites/background_spritesheet.png"); 
//         this.BB = new BoundingBox(this.x , this.y + backGround.fencePadding, PARAMS.TILEWIDTH * PARAMS.SCALE, 
//             PARAMS.TILEWIDTH * PARAMS.SCALE - backGround.fencePadding);
//         this.BBtop = new BoundingBox(this.x , this.y + backGround.fencePadding, PARAMS.TILEWIDTH * PARAMS.SCALE, 
//             10);
//         this.BBbot = new BoundingBox(this.x , this.y + 64 - 10, PARAMS.TILEWIDTH * PARAMS.SCALE, 
//             10);
//         this.BBleft = new BoundingBox(this.x , this.y + backGround.fencePadding + 6, backGround.fencePadding, 
//             this.BB.height - 18);
//         this.BBright = new BoundingBox(this.x + this.BB.width - backGround.fencePadding , this.y + backGround.fencePadding + 6, backGround.fencePadding, 
//             this.BB.height - 18);
// }
//     update() {};

//     draw(ctx) {
//         ctx.drawImage(this.spritesheet, this.typeX, this.typeY, 
//             PARAMS.TILEWIDTH, PARAMS.TILEWIDTH,
//             this.x, this.y,
//             PARAMS.TILEWIDTH * PARAMS.SCALE, 
//             PARAMS.TILEWIDTH * PARAMS.SCALE);
            
//         if (PARAMS.DEBUG) {
//             ctx.strokeStyle = 'yellow';
//             ctx.lineWidth = 2;
//             ctx.strokeRect(this.BB.x, this.BB.y, this.BB.width, this.BB.height);
//             ctx.strokeStyle = 'red';
//             ctx.strokeRect(this.BBtop.x, this.BBtop.y, this.BBtop.width, this.BBtop.height);
//             ctx.strokeRect(this.BBbot.x, this.BBbot.y, this.BBbot.width, this.BBbot.height);
//             ctx.strokeRect(this.BBleft.x, this.BBleft.y, this.BBleft.width, this.BBleft.height);
//             ctx.strokeRect(this.BBright.x, this.BBright.y, this.BBright.width, this.BBright.height);
      
//         }
//         ctx.imageSmoothingEnabled = false;
//     }

// }

// // TODO: separate them
// class Flower {
//     constructor(game, x, y) {
//         Object.assign(this, { game, x, y});
//         this.spritesheet = ASSET_MANAGER.getAsset("./sprites/background_spritesheet.png"); 
//         this.BB = new BoundingBox(this.x , this.y, PARAMS.TILEWIDTH * PARAMS.SCALE + 50, 
//             PARAMS.TILEWIDTH * PARAMS.SCALE - 20);
//         this.BBtop = new BoundingBox(this.x , this.y, PARAMS.TILEWIDTH * PARAMS.SCALE + 50, 
//             10);
//         this.BBbot = new BoundingBox(this.x , this.y + this.BB.height - 10, PARAMS.TILEWIDTH * PARAMS.SCALE + 50, 
//             10);
//         this.BBleft = new BoundingBox(this.x , this.y, 10, 
//             PARAMS.TILEWIDTH * PARAMS.SCALE - 20);
//         this.BBright = new BoundingBox(this.x + this.BB.width - 10 , this.y, 10, 
//             PARAMS.TILEWIDTH * PARAMS.SCALE - 20);
//     }
//     update() {};

//     draw(ctx) {
//         ctx.drawImage(this.spritesheet, 32, 800, PARAMS.TILEWIDTH, PARAMS.TILEWIDTH, this.x, this.y, PARAMS.TILEWIDTH * 1.5, PARAMS.TILEWIDTH * 1.5);
//         ctx.drawImage(this.spritesheet, 64, 832, PARAMS.TILEWIDTH * PARAMS.SCALE, PARAMS.TILEWIDTH, this.x + PARAMS.TILEWIDTH * 1.5 - 10, this.y, PARAMS.TILEWIDTH * PARAMS.SCALE * 1.5, PARAMS.TILEWIDTH * 1.5);
//         if (PARAMS.DEBUG) {
//             ctx.strokeStyle = 'yellow';
//             ctx.lineWidth = 2;
//             ctx.strokeRect(this.BB.x, this.BB.y, this.BB.width, this.BB.height);
//             ctx.strokeStyle = 'red';
//             ctx.strokeRect(this.BBtop.x, this.BBtop.y, this.BBtop.width, this.BBtop.height);
//             ctx.strokeRect(this.BBbot.x, this.BBbot.y, this.BBbot.width, this.BBbot.height);
//             ctx.strokeRect(this.BBleft.x, this.BBleft.y, this.BBleft.width, this.BBleft.height);
//             ctx.strokeRect(this.BBright.x, this.BBright.y, this.BBright.width, this.BBright.height);
//         }
//         ctx.imageSmoothingEnabled = false;
//     }
// }

// // TODO: a type of tree, so that it can be drawn differently
// class Tree {
//     constructor(game, x, y) {
//         Object.assign(this, { game, x, y});
//         this.spritesheet = ASSET_MANAGER.getAsset("./sprites/background_spritesheet.png"); 
//         this.BB = new BoundingBox(this.x , this.y, 65 * PARAMS.SCALE, 
//             77 * PARAMS.SCALE);
//         this.BBbot = new BoundingBox(this.x , this.y + this.BB.height - 10, 65 * PARAMS.SCALE, 
//             10);
//         this.BBtop = new BoundingBox(this.x , this.y, 65 * PARAMS.SCALE, 
//             10);
//         this.BBleft = new BoundingBox(this.x , this.y, 10, 
//             77 * PARAMS.SCALE);
//         this.BBright = new BoundingBox(this.x + this.BB.width - 10, this.y, 10, 
//             77 * PARAMS.SCALE);
//     }
//     update() {};

//     draw(ctx) {
//         ctx.drawImage(this.spritesheet, 128, 912, 64, 77, this.x, this.y, 65 * PARAMS.SCALE, 77 * PARAMS.SCALE);
//         if (PARAMS.DEBUG) {
//             ctx.strokeStyle = 'yellow';
//             ctx.lineWidth = 2;
//             ctx.strokeRect(this.BB.x, this.BB.y, this.BB.width, this.BB.height);
//             ctx.strokeStyle = 'red';
//             ctx.strokeRect(this.BBtop.x, this.BBtop.y, this.BBtop.width, this.BBtop.height);
//             ctx.strokeRect(this.BBbot.x, this.BBbot.y, this.BBbot.width, this.BBbot.height);
//             ctx.strokeRect(this.BBleft.x, this.BBleft.y, this.BBleft.width, this.BBleft.height);
//             ctx.strokeRect(this.BBright.x, this.BBright.y, this.BBright.width, this.BBright.height);
//         }
//         ctx.imageSmoothingEnabled = false;
//     }
// }

// // TODO: make bounding box for this
// class Bridge {
//     constructor(game, x, y) {
//         Object.assign(this, { game, x, y});
//         this.spritesheet = ASSET_MANAGER.getAsset("./sprites/background_spritesheet.png"); 
//         this.BB = new BoundingBox(this.x, this.y + 10, 65 * 1.8, 128 * 1.8);
//     }
//     update() {};

//     draw(ctx) {
//         ctx.drawImage(this.spritesheet, 96, 224, 64, 128, this.x, this.y, 65 * 1.8, 128 * 1.8);
//         if (PARAMS.DEBUG) {
//             ctx.strokeStyle = 'yellow';
//             ctx.lineWidth = 2;
//             ctx.strokeRect(this.BB.x, this.BB.y, this.BB.width, this.BB.height);
//         }
//         ctx.imageSmoothingEnabled = false;
//     }
// }

// // TODO: separate them , logs and fire
// class Bonfire {
//     constructor(game, x, y) {
//         // log size 32 48 x 0 1536 
//         // right side 64 1536
//         // bonfire 32 32 x 32 1536
//         Object.assign(this, { game, x, y});
//         this.spritesheet = ASSET_MANAGER.getAsset("./sprites/background_spritesheet.png"); 
//         this.firesheet = ASSET_MANAGER.getAsset("./sprites/fire.png"); 
//         this.fireAnim = new Animator(this.firesheet, 0, 0, 32, 32, 6, .1, 0, false, true);

//         this.fireBB = new BoundingBox(464, 525, PARAMS.TILEWIDTH * PARAMS.SCALE, 
//             PARAMS.TILEWIDTH * PARAMS.SCALE - 30);
//         this.leftLogBB = new BoundingBox(425, 520, PARAMS.TILEWIDTH * PARAMS.SCALE - 40, 
//             PARAMS.TILEWIDTH * PARAMS.SCALE);
//         this.rightLogBB = new BoundingBox(542, 520, PARAMS.TILEWIDTH * PARAMS.SCALE - 40, 
//             PARAMS.TILEWIDTH * PARAMS.SCALE);
//     }
//     update() {};

//     draw(ctx) {
//         ctx.drawImage(this.spritesheet, 0, 1537, 96, 64, this.x, this.y, 96 * PARAMS.SCALE, 64 * PARAMS.SCALE);
//         this.fireAnim.drawFrame(this.game.clockTick, ctx, 458, 475, 2.5);
//         if (PARAMS.DEBUG) {
//             ctx.strokeStyle = 'yellow';
//             ctx.lineWidth = 2;
//             ctx.strokeRect(this.fireBB.x, this.fireBB.y, this.fireBB.width, this.fireBB.height);
//             ctx.strokeRect(this.leftLogBB.x, this.leftLogBB.y, this.leftLogBB.width, this.leftLogBB.height);
//             ctx.strokeRect(this.rightLogBB.x, this.rightLogBB.y, this.rightLogBB.width, this.rightLogBB.height);
//         }
//         ctx.imageSmoothingEnabled = false;
//     }
// }

// // TODO: create bounding box
// class Pond {
//     constructor(game, x, y) {
//         Object.assign(this, { game, x, y});
//         this.spritesheet = ASSET_MANAGER.getAsset("./sprites/background_spritesheet.png"); 
//         this.BB = new BoundingBox(this.x, this.y, 255, 200);
//     }

//     update() {};

//     draw(ctx) {
//         ctx.drawImage(this.spritesheet, 96, 128, 32, 69, this.x, this.y, 32 * 2, 69 * 2);
//         ctx.drawImage(this.spritesheet, 128, 128, 32, 69, this.x + PARAMS.TILEWIDTH * PARAMS.SCALE, this.y , 32 * 2, 69 * 2);
//         ctx.drawImage(this.spritesheet, 128, 128, 32, 69, this.x + PARAMS.TILEWIDTH * 2 * PARAMS.SCALE, this.y , 32 * 2, 69 * 2);
//         ctx.drawImage(this.spritesheet, 160, 128, 32, 69, this.x + PARAMS.TILEWIDTH * 3 * PARAMS.SCALE, this.y , 32 * 2, 69 * 2);
//         if (PARAMS.DEBUG) {
//             ctx.strokeStyle = 'yellow';
//             ctx.lineWidth = 2;
//             ctx.strokeRect(this.BB.x, this.BB.y, this.BB.width, this.BB.height);
//         }
//         ctx.imageSmoothingEnabled = false;
//     }

// }
// class Chick {
//     constructor(game, x, y) {
//         Object.assign(this, { game, x, y});
//         this.spritesheet = ASSET_MANAGER.getAsset("./sprites/chick_spritesheet.png"); 
//         this.chickAnim = new Animator(this.spritesheet, 0, 0, 32, 32, 4, 0.2, 0, false, true);
//         this.BB = new BoundingBox(this.x + 10, this.y + 15, 32 * 2 - 20, 32 * 2 - 15);
//     }
//     update() {};
//     draw(ctx) {
//         this.chickAnim.drawFrame(this.game.clockTick, ctx, this.x, this.y, 2);
//         if (PARAMS.DEBUG) {
//             ctx.strokeStyle = 'yellow';
//             ctx.lineWidth = 2;
//             ctx.strokeRect(this.BB.x, this.BB.y, this.BB.width, this.BB.height);
//         }
//         ctx.imageSmoothingEnabled = false;
//     }
// }

// // TODO: aniamte the cow walking around randomly. 
// class Cow {
//     constructor(game, x, y) {
//         Object.assign(this, { game, x, y});
//         this.spritesheet = ASSET_MANAGER.getAsset("./sprites/cow_spritesheet.png"); 
//         this.cowAnim = new Animator(this.spritesheet, 0, 0, 32, 32, 5, .1, 0, false, true);
//         this.BB = new BoundingBox(this.x + 10, this.y + 35, 32 * 3 - 15, 32 * 3 - 40);
//     }
//     update() {};

//     draw(ctx) {
//         this.cowAnim.drawFrame(this.game.clockTick, ctx, this.x, this.y, 3);
//         if (PARAMS.DEBUG) {
//             ctx.strokeStyle = 'yellow';
//             ctx.lineWidth = 2;
//             ctx.strokeRect(this.BB.x, this.BB.y, this.BB.width, this.BB.height);
//         }
//         ctx.imageSmoothingEnabled = false;
//     }
// }
// // create animation of them walking around. 
// class Pig {
//     constructor(game, x, y) {
//         Object.assign(this, { game, x, y});
//         this.spritesheet = ASSET_MANAGER.getAsset("./sprites/piggy.png"); 
//         this.pigAnim = new Animator(this.spritesheet, 0, 0, 108, 108, 4, .18, 0, false, true);
//         this.BB = new BoundingBox(this.x, this.y, 108 * .8, 108 *.8);
//     }
//     update() {};

//     draw(ctx) {
//         this.pigAnim.drawFrame(this.game.clockTick, ctx, this.x, this.y, .8);
//         if (PARAMS.DEBUG) {
//             ctx.strokeStyle = 'yellow';
//             ctx.lineWidth = 2;
//             ctx.strokeRect(this.BB.x, this.BB.y, this.BB.width, this.BB.height);
//         }
//         ctx.imageSmoothingEnabled = false;
//     }
// }