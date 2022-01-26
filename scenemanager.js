class SceneManager {
    constructor(game) {
        this.game = game;
        this.bunny = new Bunny(gameEngine, PARAMS.CANVAS_WIDTH / 2 - PARAMS.BLOCKWIDTH / 2, PARAMS.CANVAS_WIDTH / 2 -  PARAMS.BLOCKWIDTH / 2);
        this.grass = new Grass(gameEngine, 0, 0);
        this.house = new House(gameEngine, 100, 100);
        this.pavement = new Pavement(gameEngine, 190, 375);
        this.mailbox = new MailBox(gameEngine, 200, 345);
        this.tree = new Tree(gameEngine, 15, 200);
        this.flower = new Flower(gameEngine, 350, 350);
        this.bridge = new Bridge(gameEngine, 233, 635);
        this.bonfire = new Bonfire(gameEngine, 400, 500);
        this.pig = new Pig(gameEngine, 90, 480);
        this.pond = new Pond(gameEngine, 500, 675);
        this.loadScreen();
    }

    loadScreen() {
        this.game.addEntity(this.grass);
        this.game.addEntity(this.house);
        this.game.addEntity(this.pavement);
        this.game.addEntity(this.bridge);
        this.game.addEntity(this.pig);
        
        for (var i = 0; i < backGround.fenceLocation.houseFence.length; i++) {
            this.game.addEntity(new Fence(gameEngine, backGround.fenceLocation.houseFence[i].x, backGround.fenceLocation.houseFence[i].y, backGround.fence[1].x, backGround.fence[1].y));  
        }

        for (var i = 0; i < backGround.fenceLocation.leftGardenFence.length; i++) {
            this.game.addEntity(new Fence(gameEngine, backGround.fenceLocation.leftGardenFence[i].x, backGround.fenceLocation.leftGardenFence[i].y, backGround.fence[1].x, backGround.fence[1].y));  
        }
        
        for (var i = 0; i < backGround.fenceLocation.rightGardenFence.length; i++) {
            this.game.addEntity(new Fence(gameEngine, backGround.fenceLocation.rightGardenFence[i].x, backGround.fenceLocation.rightGardenFence[i].y, backGround.fence[1].x, backGround.fence[1].y));  
        }
        

        this.game.addEntity(this.mailbox);
        this.game.addEntity(this.flower);
        this.game.addEntity(this.tree);
        this.game.addEntity(this.bonfire);
        this.game.addEntity(this.pond);
        this.game.addEntity(this.bunny);
     
    }

    update() {
        PARAMS.DEBUG = document.getElementById("debug").checked;
    }

    draw(ctx) {
        if (PARAMS.DEBUG) {

        }

    }
}

