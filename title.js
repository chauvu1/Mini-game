class Title {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});
        this.game.title = this;
        this.titlesheet = ASSET_MANAGER.getAsset("./sprites/title_screen.png");
        this.iconsheet = ASSET_MANAGER.getAsset("./sprites/bunny_icon.png");
        this.buttonsheet = ASSET_MANAGER.getAsset("./sprites/buttons.png");
        this.cloudsheet = ASSET_MANAGER.getAsset("./sprites/title_clouds.png");
        this.heartsheet = ASSET_MANAGER.getAsset("./sprites/heartspin.png");
        this.watersheet = ASSET_MANAGER.getAsset("./sprites/tilesets/Water.png"); 
        this.htptitle = ASSET_MANAGER.getAsset("./sprites/htptitle.png")
        this.htpbackground = ASSET_MANAGER.getAsset("./sprites/tilesets/background.png"); 
        this.htpbunny = ASSET_MANAGER.getAsset("./sprites/characters/Premium Charakter Spritesheet.png"); 
        this.htpfire = ASSET_MANAGER.getAsset("./sprites/fire.png"); 
        this.cowsheet = ASSET_MANAGER.getAsset("./sprites/characters/Animal SpriteSheets/baby cow/baby pink cow animations sprites.png");
        this.spritesheetBasket = ASSET_MANAGER.getAsset("./sprites/objects/Piknik basket.png");

        this.creditsbackground =  ASSET_MANAGER.getAsset("./sprites/tilesets/creditsbackground.png"); 
        this.buttonStartState = 0;
        this.buttonHTPState = 0;
        this.buttonCreditState = 0;
        this.HTPScreen = false;
        this.CreditsScreen = false;
        this.title = true;
        this.titleStartClicked = false;
        this.howToPlayClicked = false;
        this.creditsClicked = false;
        
        this.loadAnimations();
    }

    loadAnimations() {
        this.titleAnim = [];
        for (var i = 0; i < 8; i++) {
            this.titleAnim.push([]);
        }

        this.buttonAnim = [];
        for (var i = 0; i < 8; i++) {
            this.buttonAnim.push([]);
            for (var j = 0; j < 8; j++) {
                this.buttonAnim[i].push([]);
            }
        }
        // [0] [0] -> start default
        // [0] [1] -> when moved
        
        // [1] [0] -> how to play default
        // [1] [1] -> when moved
        this.closeButton = [];
        this.closeButtonState= 0;
        this.closeButton[0] = new Animator (this.buttonsheet, 368, 128, 16, 16, 1, 1, 0,false,true);
        this.closeButton[1] = new Animator (this.buttonsheet, 384, 128, 16, 16, 1, 1, 0,false,true);
        this.creditstitle = new Animator (this.htptitle, 0, 48, 124, 42, 3, 0.2, 0, false, true);

        
        // [2] [0] -> credits default
        // [2] [1] -> when moved
        this.cowAnim = new Animator(this.cowsheet, 0, 256, 32, 32, 6, 0.2, 0, false, true);
        this.cow1Anim = new Animator(this.cowsheet, 0, 256+32, 32, 32, 6, 0.2, 0, false, true);
        this.titleAnim[0] = new Animator(this.titlesheet, 0, 0, 192, 192, 7, 1, 0, false, true); // color background
        this.titleAnim[1] = new Animator(this.titlesheet, 0, 192, 192, 192, 8, 0.1, 0, false, true); // bunni express 
        this.titleAnim[2] = new Animator(this.titlesheet, 0, 192*2, 480, 384, 4, 1.3, 0, false, true); // stars
        this.titleAnim[3] = new Animator(this.iconsheet, 0, 0, 48, 15, 8, 0.2, 0, false, true); // icon
        this.titleAnim[4] = new Animator(this.iconsheet, 0, 16, 33, 13, 3, 0.5, 0, false, true); // levix
        this.titleAnim[5] = new Animator(this.cloudsheet, 0, 0, 125, 80, 18, 0.1, 0, false, true); // clouds
        this.titleAnim[6] = new Animator(this.heartsheet, 0, 0, 21, 16, 6, 0.1, 0, false, true); // heart
        this.titleAnim[7] = new Animator(this.titlesheet, 0, 768, 480, 56, 2, 1, 0, false, true); // background
        this.titleAnim[8] = new Animator(this.titlesheet, 0, 1032, 480, 56, 1, 1, 0, false, true); // background
        //this.titleAnim[7] = new Animator(this.titlesheet, 0, 844, 950, 100, 4, 1, 0, false, true); // background hearts

        // default start
        this.buttonAnim[0][0] = new Animator(this.buttonsheet, 0, 48, 64, 48, 4, 1, 0, false, true); // start
        this.buttonAnim[0][1] = new Animator(this.buttonsheet, 0, 0, 64, 48, 1, 1, 0, false, true); // start


        this.buttonAnim[1][0] = new Animator(this.buttonsheet, 0, 96, 64, 48, 2, 1, 0, false, true); // how to play
        this.buttonAnim[1][1] = new Animator(this.buttonsheet, 128, 96, 64, 48, 1, 1, 0, false, true); // how to play


        this.buttonAnim[2][0] = new Animator(this.buttonsheet, 0, 144, 64, 48, 2, 1, 0, false, true); // credits
        this.buttonAnim[2][1] = new Animator(this.buttonsheet, 128, 144, 64, 48, 1, 1, 0, false, true); // credits

        this.buttonAnim[6] = new Animator(this.buttonsheet, 0, 192, 79, 335, 3, 1, 0, false, true); // background button
        this.htpbunnyAnim = new Animator (this.htpbunny, 0, 1296, 48, 48, 8, 0.1, 0, false, true);
        this.waterAnim = new Animator(this.watersheet, BACKGROUND.WATER.X, BACKGROUND.WATER.Y,
            BACKGROUND.WATER.SIZE, BACKGROUND.WATER.SIZE, BACKGROUND.WATER.FRAME, 100,
            BACKGROUND.WATER.FRAME_PAD, BACKGROUND.WATER.REVERSE, BACKGROUND.WATER.LOOP);
        this.HTPtitleAnim = new Animator(this.htptitle, 0, 0, 226, 45, 4, 0.2, 0, false, true);
        this.HTPButtonBottomAnim = new Animator(this.buttonsheet, 384, 187, 16, 21, 3, 0.2, 0, false, true);
        this.HTPButtonUpAnim = new Animator(this.buttonsheet, 384, 187+ 21, 16, 21, 3, 0.2, 0, false, true);
        this.HTPButtonRightAnim = new Animator(this.buttonsheet, 384, 187+ 21*2, 16, 21, 3, 0.2, 0, false, true);
        this.HTPButtonLeftAnim = new Animator(this.buttonsheet, 384, 187+ 21*3, 16, 21, 3, 0.2, 0, false, true);
        this.HTPFireAnim = new Animator(this.htpfire, 0, 0, 32, 32, 6, 0.1, 0, false, true);
        this.HTPButtonSAnim = new Animator(this.buttonsheet, 384, 271, 16, 21, 3, 0.2, 0, false, true);
        this.HTPButtonWAnim = new Animator(this.buttonsheet, 384, 271+ 21, 16, 21, 3, 0.2, 0, false, true);
        this.HTPButtonDAnim = new Animator(this.buttonsheet, 384, 271+ 21*2, 16, 21, 3, 0.2, 0, false, true);
        this.HTPButtonAAnim = new Animator(this.buttonsheet, 384, 271+ 21*3, 16, 21, 3, 0.2, 0, false, true);
    
        this.HTPButtonSpaceAnim = new Animator(this.buttonsheet, 448, 192, 46, 16, 3, 0.2, 0, false, true);
        this.HTPmilk = new Animator(this.buttonsheet, 448, 240, 32, 32, 3, 0.25, 0, false, true);
    }

    update() {

      

       

        if (this.title) { // start button
            if (!this.howToPlayClicked) {
                if (this.game.mouse.x > 375 && this.game.mouse.x < 512 && this.game.mouse.y > 440 && this.game.mouse.y < 491) {
                    this.buttonStartState = 1;
                    if (this.game.click && this.game.click.x > 375 && this.game.click.x < 512 && this.game.click.y > 440 && this.game.click.y < 491) {
                        this.titleStartClicked  = true;
                        this.title = false;
                        this.game.click = false;
                    }
                } else {
                    this.buttonStartState = 0;
                }
            }
           // how to play 
           
           if (this.game.mouse && this.game.mouse.x > 375 && this.game.mouse.x < 512 && this.game.mouse.y > 505 && this.game.mouse.y < 545) { // how to play
                this.buttonHTPState = 1;
            if (this.game.click && this.game.click.x > 375 && this.game.click.x < 512 && this.game.click.y > 505 && this.game.click.y < 545) {
                this.howToPlayClicked = true;
                this.game.click = false;
                }
           } else {
                this.buttonHTPState = 0;
           }

           if (this.game.mouse && this.game.mouse.x > 375 && this.game.mouse.x < 512 && this.game.mouse.y > 560 && this.game.mouse.y < 603) { // credits
                this.buttonCreditState = 1;
                if (this.game.click && this.game.click.x > 375 && this.game.click.x < 512 && this.game.click.y > 560 && this.game.click.y < 603) {
                    this.creditsClicked = true;
                    this.game.click = false;
                }
           } else {
                this.buttonCreditState = 0;
            } 
            if (this.game.mouse.x > 905 && this.game.mouse.x < 945 && this.game.mouse.y > 12 && this.game.mouse.y < 48 ) {
                this.closeButtonState = 1;
                if (this.game.click && this.game.click.x > 905 && this.game.click.x < 945 && this.game.click.y > 12 && this.game.click.y < 48 ) {
                    this.closeButtonPressed = true;
                    this.game.click = false;
                }
            } else {
                this.closeButtonState = 0;
            }
       
            if (this.closeButtonPressed || this.game.escape) {
                this.howToPlayClicked = false;
                this.creditsClicked = false;
                this.closeButtonPressed = false;
            }
        }
    }


    draw(ctx) {
        if (this.title) { // debug
            this.titleAnim[0].drawFrame(this.game.clockTick, ctx, 0, -100, 5);
            this.titleAnim[2].drawFrame(this.game.clockTick, ctx, 0, 0, 2);
            this.titleAnim[5].drawFrame(this.game.clockTick, ctx, 280, 60, 3);
            this.titleAnim[7].drawFrame(this.game.clockTick, ctx, 0, -24, 2);
            this.titleAnim[8].drawFrame(this.game.clockTick, ctx, 0, 743, 3);
            this.titleAnim[1].drawFrame(this.game.clockTick, ctx, 150, 0, 3);          
            this.titleAnim[4].drawFrame(this.game.clockTick, ctx, 55, 720, 3);
           
    
            this.buttonAnim[6].drawFrame(this.game.clockTick, ctx, 323, 300, 3); // background button
    
            // start button draw
            this.buttonAnim[0][this.buttonStartState].drawFrame(this.game.clockTick, ctx, 348, 350, 3);
    
            // how to play
            this.buttonAnim[1][this.buttonHTPState].drawFrame(this.game.clockTick, ctx, 348, 405, 3);
    
            // credits
            this.buttonAnim[2][this.buttonCreditState].drawFrame(this.game.clockTick, ctx, 348, 460, 3);
    
            this.titleAnim[6].drawFrame(this.game.clockTick, ctx, 408, 620, 3); // heart
            this.titleAnim[3].drawFrame(this.game.clockTick, ctx, 0, 720, 3);
        }
        if (this.howToPlayClicked) {
            for (var i = 0; i < 15; i++) {
                for (var j = 0; j < 12; j++) {
                    this.waterAnim.drawFrame(this.game.clockTick, ctx, 16 * 4 * i + 0, 16 * 4 * j + 0, BACKGROUND.WATER.SCALE); 
                }
            }
         
            ctx.drawImage(this.htpbackground, 0, 0, 208, 160, 60, 70, 208*4, 160*4);
            //this.titleAnim[3].drawFrame(this.game.clockTick, ctx, PARAMS.CANVAS_WIDTH - (18*12), PARAMS.CANVAS_HEIGHT - (14*12), 12);
            this.HTPtitleAnim.drawFrame(this.game.clockTick, ctx, 250, 10, 2);
           
            this.HTPButtonLeftAnim.drawFrame(this.game.clockTick, ctx, 500, 200, 2);
            this.HTPButtonRightAnim.drawFrame(this.game.clockTick, ctx, 570, 200, 2);
            this.HTPButtonUpAnim.drawFrame(this.game.clockTick, ctx, 535, 170, 2);
            this.HTPButtonBottomAnim.drawFrame(this.game.clockTick, ctx, 535, 200, 2);
            ctx.strokeStyle = '#78a158';
            ctx.fillStyle = ctx.strokeStyle;
            ctx.font = "48px Minecraft";
            ctx.fillText("Controls", 520, 160); //280
            ctx.fillText("Controls", 520, 168); //280
            ctx.fillText("Controls", 516, 164); //280
            ctx.fillText("Controls", 524, 164); //280
            ctx.fillText("Objective", 200, 214); //280
            ctx.fillText("Objective", 200, 206); //280
            ctx.fillText("Objective", 204, 210); //280
            ctx.fillText("Objective", 196, 210); //280
       
            ctx.strokeStyle = '#f3f4e7';
            ctx.fillStyle = ctx.strokeStyle;
            ctx.fillText("Controls", 520, 164); //280
            ctx.fillText("Objective", 200, 210); //280
            // ctx.fillText("Controls", 520, 164); //280
            // ctx.fillText("Controls", 520, 164); //280

            ctx.font = "32px Minecraft";
            ctx.strokeStyle = '#f3f4e7';
            ctx.fillStyle = ctx.strokeStyle;
            // ctx.fillText("+", 305, 212); //280
    
            ctx.fillText("Movements", 520, 274); //280
            ctx.fillText("Interact", 550, 354); //280
            ctx.fillText("Interactable", 520, 474); //280
            ctx.fillText("Movements", 516, 270); //280
            ctx.fillText("Interact", 546, 350); //280
            ctx.fillText("Interactable", 516, 470); //280
            ctx.fillText("Movements", 522, 270); //280
            ctx.fillText("Interact", 552, 350); //280
            ctx.fillText("Interactable", 522, 470); //280
            ctx.fillText("Movements", 520, 266); //280
            ctx.fillText("Interact", 550, 346); //280
            ctx.fillText("Interactable", 520, 466); //280

            ctx.fillText("Complete tasks", 200, 274); //280
            ctx.fillText("Complete tasks", 200, 266); //280
            ctx.fillText("Complete tasks", 204, 270); //280
            ctx.fillText("Complete tasks", 196, 270); //280
      
            ctx.fillText("to finish the", 230, 316); //280
            ctx.fillText("to finish the", 230, 324); //280
            ctx.fillText("to finish the", 234, 320); //280
            ctx.fillText("to finish the", 226, 320); //280

            ctx.fillText("game!", 270, 366); //280
            ctx.fillText("game!", 270, 374); //280
            ctx.fillText("game!", 274, 370); //280
            ctx.fillText("game!", 266, 370); //280

            ctx.strokeStyle = '#78a158';
            ctx.fillStyle = ctx.strokeStyle;
       
            this.HTPButtonAAnim.drawFrame(this.game.clockTick, ctx, 630, 200, 2);
            this.HTPButtonDAnim.drawFrame(this.game.clockTick, ctx, 700, 200, 2);
            this.HTPButtonWAnim.drawFrame(this.game.clockTick, ctx, 665, 170, 2);
            this.HTPButtonSAnim.drawFrame(this.game.clockTick, ctx, 665, 200, 2);
            this.HTPButtonSpaceAnim.drawFrame(this.game.clockTick, ctx, 570, 280, 2);
            this.HTPmilk.drawFrame(this.game.clockTick, ctx, 560, 350, 3);
            ctx.fillText("Movements", 520, 270); //280
            ctx.fillText("Interact", 550, 350); //280
            ctx.fillText("Interactable", 520, 470); //280
            ctx.fillText("Complete tasks", 200, 270); //280
            ctx.fillText("to finish the", 230, 320); //280
            ctx.fillText("game!", 270, 370); //280
            this.cowAnim.drawFrame(this.game.clockTick, ctx, 450, 520,4);
            this.cow1Anim.drawFrame(this.game.clockTick, ctx, 520, 520,4);
            this.closeButton[this.closeButtonState].drawFrame(this.game.clockTick, ctx, PARAMS.CANVAS_WIDTH - 32*(2), 0, 4);  
            ctx.drawImage(this.spritesheetBasket, 0, 0, 16, 16, 350, 400 , 16*3, 16*3);
            this.htpbunnyAnim.drawFrame(this.game.clockTick, ctx, 200, 300, 5);
            
            ctx.drawImage(this.htpfire, 0, 32, 16, 16, 300, 440, 16*3, 16*3);
            this.HTPFireAnim.drawFrame(this.game.clockTick,ctx, 290,425, 2);
        
        }
        if (this.creditsClicked) {
            for (var i = 0; i < 15; i++) {
                for (var j = 0; j < 12; j++) {
                    this.waterAnim.drawFrame(this.game.clockTick, ctx, 16 * 4 * i + 0, 16 * 4 * j + 0, BACKGROUND.WATER.SCALE); 
                }
            }
            ctx.drawImage(this.creditsbackground,0,0, 208, 160, 60, 60, 208*4, 160*4);
            this.creditstitle.drawFrame(this.game.clockTick, ctx, 300, 0, 3);
            ctx.font = "48px Minecraft";
            ctx.strokeStyle = '#78a158';
            ctx.fillStyle = ctx.strokeStyle;
            ctx.fillText("Developed by: Chau Vu", 214, 180); //280
            ctx.fillText("Developed by: Chau Vu", 206, 180); //280
            ctx.fillText("Developed by: Chau Vu", 210, 184); //280
            ctx.fillText("Developed by: Chau Vu", 210, 176); //280

            ctx.fillText("Asset Pack: Cup Nooble", 210, 336); //280
            ctx.fillText("Asset Pack: Cup Nooble", 210, 344); //280
            ctx.fillText("Asset Pack: Cup Nooble", 214, 340); //280
            ctx.fillText("Asset Pack: Cup Nooble", 206, 340); //280

            ctx.fillText("Music: Oneul", 340, 404); //280
            ctx.fillText("Music: Oneul", 340, 396); //280
            ctx.fillText("Music: Oneul", 344, 400); //280
            ctx.fillText("Music: Oneul", 336, 400); //280
            ctx.font = "32px Minecraft";
            ctx.fillText("TCSS 491: Computational Worlds", 226, 180 + 180*2); //280
            ctx.fillText("TCSS 491: Computational Worlds", 234, 180 + 180*2); //280
            ctx.fillText("TCSS 491: Computational Worlds", 230, 180 + 180*2 - 4); //280
            ctx.fillText("TCSS 491: Computational Worlds", 230, 180 + 180*2 + 4); //280

            ctx.fillText("Special thanks to professor Chris Marriott", 150, 180 + 180*2 + 40 + 4); //280
            ctx.fillText("Special thanks to professor Chris Marriott", 150, 180 + 180*2 + 40 - 4); //280
            ctx.fillText("Special thanks to professor Chris Marriott", 154, 180 + 180*2 + 40); //280
            ctx.fillText("Special thanks to professor Chris Marriott", 146, 180 + 180*2 + 40); //280

            ctx.font = "48px Minecraft";
            ctx.strokeStyle = '#f3f4e7';
            ctx.fillStyle = ctx.strokeStyle;
            // ctx.fillText("+", 305, 212); //280
    
            ctx.fillText("Developed by: Chau Vu", 210, 180); //280
            ctx.fillText("Asset Pack: Cup Nooble", 210, 340); //280
            ctx.fillText("Music: Oneul", 340, 400); //280
            ctx.font = "32px Minecraft";
            ctx.strokeStyle = '#f3f4e7';
            ctx.fillStyle = ctx.strokeStyle;
            ctx.fillText("TCSS 491: Computational Worlds", 230, 180 + 180*2); //280
            ctx.fillText("Special thanks to professor Chris Marriott", 150, 180 + 180*2 + 40); //280
            this.closeButton[this.closeButtonState].drawFrame(this.game.clockTick, ctx, PARAMS.CANVAS_WIDTH - 32*(2), 0, 4);  
        }


        ctx.imageSmoothingEnabled = false;
    }

}


// https://stackoverflow.com/questions/2359537/how-to-change-the-opacity-alpha-transparency-of-an-element-in-a-canvas-elemen
class TransitionScreen {
    constructor(game) {
        Object.assign(this, {game}); 
        this.elapsed = 0;
        this.fade = 1;
       
    }

    update() {

    }

    draw(ctx) {
        this.elapsed += this.game.clockTick;
        this.fade -= this.game.clockTick;
        if (this.elapsed < 4) {
            // fade animation
            ctx.fillStyle = "rgba(155,212,195," + this.fade + ")";
            ctx.fillRect(0, 0, PARAMS.CANVAS_WIDTH, PARAMS.CANVAS_HEIGHT); 
        }
    }     
}