class Title {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});
        this.titlesheet = ASSET_MANAGER.getAsset("./sprites/title_screen.png");
        this.iconsheet = ASSET_MANAGER.getAsset("./sprites/bunny_icon.png");
        this.buttonsheet = ASSET_MANAGER.getAsset("./sprites/buttons.png");
        this.cloudsheet = ASSET_MANAGER.getAsset("./sprites/title_clouds.png");
        this.heartsheet = ASSET_MANAGER.getAsset("./sprites/heartspin.png");
        this.buttonStartState = 0;
        this.buttonHTPState = 0;
        this.buttonCreditState = 0;
        this.HTPScreen = false;
        this.CreditsScreen = false;
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
        

        // [2] [0] -> credits default
        // [2] [1] -> when moved

        this.titleAnim[0] = new Animator(this.titlesheet, 0, 0, 192, 192, 7, 1, 0, false, true); // color background
        this.titleAnim[1] = new Animator(this.titlesheet, 0, 192, 192, 192, 8, 0.1, 0, false, true); // bunni express 
        this.titleAnim[2] = new Animator(this.titlesheet, 0, 192*2, 480, 384, 4, 1.3, 0, false, true); // stars
        this.titleAnim[3] = new Animator(this.iconsheet, 0, 0, 48, 15, 8, 0.1, 0, false, true); // icon
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
    }

    update() {
        if (this.game.scene.title && !PARAMS.DEBUG) { // start button
           if (this.game.mouse.x > 375 && this.game.mouse.x < 512 && this.game.mouse.y > 440 && this.game.mouse.y < 491) {
               this.buttonStartState = 1;
               if (this.game.click && this.game.click.x > 375 && this.game.click.x < 512 && this.game.click.y > 440 && this.game.click.y < 491) {
                   this.game.scene.title = false;
                   this.game.click = false;
               }
           } else {
               this.buttonStartState = 0;
           }
           if (this.game.mouse && this.game.mouse.x > 375 && this.game.mouse.x < 512 && this.game.mouse.y > 505 && this.game.mouse.y < 545) { // how to play
                this.buttonHTPState = 1;
           } else {
                this.buttonHTPState = 0;
           }
           if (this.game.mouse && this.game.mouse.x > 375 && this.game.mouse.x < 512 && this.game.mouse.y > 560 && this.game.mouse.y < 603) { // credits
                this.buttonCreditState = 1;
           } else {
                this.buttonCreditState = 0;
            } 
        }
    }


    draw(ctx) {

        if (this.game.scene.title && !PARAMS.DEBUG) {
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
        }
        this.titleAnim[3].drawFrame(this.game.clockTick, ctx, 0, 720, 3);
    }

}

class TransitionScreen {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y}); 
        this.elapsed = 0;

        // clouds come in and out and faded away after title screen is clicked.
    }

    update() {

    }

    draw(ctx) {

    }

}