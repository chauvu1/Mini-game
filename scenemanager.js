class SceneManager {
    constructor(game) {
        this.game = game;
        this.grass = new Grass(gameEngine, 0, 0);
        this.house = new House(gameEngine, 360, 160);
        this.pavement = new Pavement(gameEngine, 440, 350);
        this.fence = new Fence(gameEngine, 120, 150);
        this.boat = new Boat(gameEngine, 675, 660);
        this.bunny = new Bunny(gameEngine, 300, 300);
        this.loadScreen();
    }

    clearEntities() {
        this.game.entities.forEach(function (entity) {
            entity.removeFromWorld = true;
        });
    };

    loadScreen() {
        
        for (var i = 0; i < 15; i++) {
            for (var j = 0; j < 12; j++) {
                this.game.addEntity(new Water(gameEngine, 16 * 4 * i + 0, 16 * 4 * j + 0)); 
            }
        }
        this.game.addEntity(this.grass);   
        this.game.addEntity(this.house);
        this.game.addEntity(this.pavement);
        this.game.addEntity(this.fence);
        this.game.addEntity(this.boat);
        this.game.addEntity(new Tree(gameEngine, 700, 200));
        this.game.addEntity(new Tree(gameEngine, 120, 500));
        this.game.addEntity(this.bunny);
     
    }


    update() {
        PARAMS.DEBUG = document.getElementById("debug").checked;
        
        if (this.house.inside) {
            this.houseInside = new HouseInterior(gameEngine, 360, 160);
            this.game.addEntity(this.houseInside);
        } else {

        }
        var that = this;
        this.game.entities.forEach(function (entity) { 
            if (entity instanceof HouseInterior) {
                if (!that.house.inside) {
                    entity.removeFromWorld = true;
                }
            }
        });
        
    }

    draw(ctx) {
        ctx.font = 25 + 'px "Press Start 2P"';
        // if (PARAMS.DEBUG){
        //     ctx.strokeStyle = "Black";
        //     ctx.fillStyle = ctx.strokeStyle;
        //     let xV = "xV=" + Math.floor(this.game.bunny.velocity.x);
        //     let yV = "yV=" + Math.floor(this.game.bunny.velocity.y);
        //     ctx.fillText(xV, 0, 20);
        //     ctx.fillText(yV, 0, 45);

        //     // x and y position of the sprite
        //     let xP = "xP=" + Math.floor(this.game.bunny.x);
        //     let yP = "yP=" + Math.floor(this.game.bunny.y);
        //     ctx.fillText(xP, 100, 20);
        //     ctx.fillText(yP, 100, 45);

        //      // bounding box 
        //      let bX ="xB=" + Math.floor(this.game.bunny.BB.left);
        //      let bY ="yB=" + Math.floor(this.game.bunny.BB.top);
        //      ctx.fillText(bX, 200, 20);
        //      ctx.fillText(bY, 200, 45);
        // }

    }
}

