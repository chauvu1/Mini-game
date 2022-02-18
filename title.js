class Title {
    constructor(game, x, y) {
        Object.assign(this, {game, x, y});
        this.titlesheet = ASSET_MANAGER.getAsset("./sprites/title_screen.png");
        this.iconsheet = ASSET_MANAGER.getAsset("./sprites/bunny_icon.png");
        this.buttonsheet = ASSET_MANAGER.getAsset("./sprites/buttons.png");
        this.cloudsheet = ASSET_MANAGER.getAsset("./sprites/title_clouds.png");
        this.heartsheet = ASSET_MANAGER.getAsset("./sprites/heartspin.png");
        this.titleAnim = [];
        for (var i = 0; i < 8; i++) {
            this.titleAnim.push([]);
        }
        this.buttonAnim = [];
        this.loadAnimations();
    }

    loadAnimations() {
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
        this.buttonAnim[0] = new Animator(this.buttonsheet, 0, 48, 64, 48, 4, 1, 0, false, true); // start
        // when pushed 
        this.buttonAnim[1] = new Animator(this.buttonsheet, 0, 0, 64, 48, 2, 1, 0, false, true); // start


        this.buttonAnim[2] = new Animator(this.buttonsheet, 0, 96, 64, 48, 2, 1, 0, false, true); // how to play
        this.buttonAnim[3] = new Animator(this.buttonsheet, 0, 144, 64, 48, 2, 1, 0, false, true); // credits
        this.buttonAnim[6] = new Animator(this.buttonsheet, 0, 192, 79, 335, 3, 1, 0, false, true); // background
    }

    update() {
        
    }


    draw(ctx) {
        this.titleAnim[0].drawFrame(this.game.clockTick, ctx, 0, -100, 5);
        this.titleAnim[2].drawFrame(this.game.clockTick, ctx, 0, 0, 2);
        
        this.titleAnim[5].drawFrame(this.game.clockTick, ctx, 280, 60, 3);
        this.titleAnim[7].drawFrame(this.game.clockTick, ctx, 0, -24, 2);
        this.titleAnim[8].drawFrame(this.game.clockTick, ctx, 0, 743, 3);
        this.titleAnim[1].drawFrame(this.game.clockTick, ctx, 150, 0, 3);
        
        this.titleAnim[3].drawFrame(this.game.clockTick, ctx, 0, 720, 3);
        this.titleAnim[4].drawFrame(this.game.clockTick, ctx, 55, 720, 3);
       

        this.buttonAnim[6].drawFrame(this.game.clockTick, ctx, 323, 300, 3); // background button
        this.buttonAnim[0].drawFrame(this.game.clockTick, ctx, 348, 350, 3);
        this.buttonAnim[2].drawFrame(this.game.clockTick, ctx, 348, 405, 3);
        this.buttonAnim[3].drawFrame(this.game.clockTick, ctx, 348, 460, 3);

        this.titleAnim[6].drawFrame(this.game.clockTick, ctx, 408, 620, 3);
        
    }

}