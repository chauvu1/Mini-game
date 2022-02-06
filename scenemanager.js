var OVERLAY = {
    TREE: [{X: 700, Y:200}, {X: 120, Y:500}],
    FENCE: {X: 120, Y:150},
    HOUSE: {X: 360, Y:160}
}

class SceneManager {
    constructor(game) {
        this.game = game;
        this.grass = new Grass(gameEngine, 0, 0);
        this.house = new House(gameEngine, 360, 160);
        this.pavement = new Pavement(gameEngine, 440, 350);
        this.fence = new Fence(gameEngine, 120, 150);
        this.boat = new Boat(gameEngine, 675, 660);
        this.bunny = new Bunny(gameEngine, 300, 300);
        this.tree = new Tree(gameEngine, OVERLAY.TREE[0].X, OVERLAY.TREE[0].Y);
        this.tree1 = new Tree(gameEngine, OVERLAY.TREE[1].X, OVERLAY.TREE[1].Y);
        this.waterObj = new WaterObjects(gameEngine, 0, 0);
        this.overlay = new Overlay(this.game, 0, 0);
        this.cow = new Cow(this.game, 200, 200);
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
        this.game.addEntity(this.tree);
        this.game.addEntity(this.tree1);
        this.game.addEntity(this.waterObj);
        this.game.addEntity(this.bunny);
        this.game.addEntity(this.cow);
        this.game.addEntity(this.overlay);
    }

    update() {
        PARAMS.DEBUG = document.getElementById("debug").checked;
        
    }

    draw(ctx) {
        ctx.font = 25 + 'px "Press Start 2P"';
    }
}

