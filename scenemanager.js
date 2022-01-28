class SceneManager {
    constructor(game) {
        this.game = game;
        this.bunny = new Bunny(gameEngine, 245, 400);
        this.grass = new Grass(gameEngine, 0, 0);
        this.house = new House(gameEngine, 100, 100);
        this.pavement = new Pavement(gameEngine, 190, 375);
        this.mailbox = new MailBox(gameEngine, 200, 345);
        this.tree = new Tree(gameEngine, 600, 200);
        this.flower = new Flower(gameEngine, 350, 350);
        this.bridge = new Bridge(gameEngine, 233, 635);
        this.bonfire = new Bonfire(gameEngine, 400, 500);
        this.pig = new Pig(gameEngine, 90, 480);
        this.pond = new Pond(gameEngine, 500, 675);
        this.cow = new Cow(gameEngine, 50, 540);
        this.chick = new Chick(gameEngine, 50, 620);
        this.interface = new Interface(gameEngine, 0, PARAMS.CANVAS_HEIGHT - 175);
        this.loadScreen();
    }

    clearEntities() {
        this.game.entities.forEach(function (entity) {
            entity.removeFromWorld = true;
        });
    };

    loadScreen() {
        this.game.addEntity(this.grass);
        this.game.addEntity(this.house);
        this.game.addEntity(this.pavement);
        this.game.addEntity(this.bridge);
        this.game.addEntity(this.pig);
        this.game.addEntity(this.cow);
        this.game.addEntity(this.chick);
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
        this.game.addEntity(this.interface);
  
    }


    update() {
        PARAMS.DEBUG = document.getElementById("debug").checked;
        // remove the entities and draw on top
        // if the bunny pass this point draw on top of the bunny.
    }

    draw(ctx) {
        ctx.font = 25 + 'px "Press Start 2P"';
        if (PARAMS.DEBUG){
            ctx.strokeStyle = "Black";
            ctx.fillStyle = ctx.strokeStyle;
            let xV = "xV=" + Math.floor(this.game.bunny.velocity.x);
            let yV = "yV=" + Math.floor(this.game.bunny.velocity.y);
            ctx.fillText(xV, 0, 20);
            ctx.fillText(yV, 0, 45);

            // x and y position of the sprite
            let xP = "xP=" + Math.floor(this.game.bunny.x);
            let yP = "yP=" + Math.floor(this.game.bunny.y);
            ctx.fillText(xP, 100, 20);
            ctx.fillText(yP, 100, 45);

             // bounding box 
             let bX ="xB=" + Math.floor(this.game.bunny.BB.left);
             let bY ="yB=" + Math.floor(this.game.bunny.BB.top);
             ctx.fillText(bX, 200, 20);
             ctx.fillText(bY, 200, 45);
        }

    }
}

