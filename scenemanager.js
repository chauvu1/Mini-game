class SceneManager {
    constructor(game) {
        this.game = game;
        this.grass = new Grass(gameEngine, 0, 0);
        this.house = new House(gameEngine, 360, 160);
        this.pavement = new Pavement(gameEngine, 440, 350);
        this.fence = new Fence(gameEngine, 120, 150);
        this.boat = new Boat(gameEngine, 675, 660);
        this.bunny = new Bunny(gameEngine, 300, 300);
        this.tree = new Tree(gameEngine, 700, 200);
        this.tree1 = new Tree(gameEngine, 120, 500);
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
        this.game.addEntity(this.bunny);
    }
    removeOverlay() {
        this.treeOverlay.removeFromWorld = true;
        this.treeOverlay1.removeFromWorld = true;
    }

    addOverlay() {
        this.game.addEntity(this.treeOverlay);
        this.game.addEntity(this.treeOverlay1);
    }

    addThingsOnTop(entityName, entityClass) { 
        var that = this;
        var exists = false;
        this.game.entities.forEach(function(entity) { // check if there is already a house interior 
            if (entity instanceof entityClass) exists = true;
        });
        // only add it once if its true
        if (!exists) {
            this.game.addEntity(entityName);
        }
    }

    update() {
        PARAMS.DEBUG = document.getElementById("debug").checked;
        
        if (this.house.inside) {
            this.houseInside = new HouseInterior(gameEngine, 360, 160);
            this.addThingsOnTop(this.houseInside, HouseInterior);
        } 
        if (this.fence.inside) {
            this.fenceInside = new FenceInterior(gameEngine, 120, 150);
            this.addThingsOnTop(this.fenceInside, FenceInterior);
        }   
        if (this.tree.under ||this.tree1.under) {
            this.treeOverlay = new TreeOverlay(gameEngine, this.tree.x, this.tree.y);
            this.treeOverlay1 = new TreeOverlay(gameEngine, this.tree1.x, this.tree1.y);
            this.removeOverlay();
            this.addOverlay();
           
        }
        var that = this;
        this.game.entities.forEach(function (entity) { 
            if (entity instanceof HouseInterior) {
                if (!that.house.inside) {
                    entity.removeFromWorld = true;
                }
            }
            if (entity instanceof FenceInterior) {
                if (!that.fence.inside) {
                    entity.removeFromWorld = true;
                }
            }
        });
        
    }

    draw(ctx) {
        ctx.font = 25 + 'px "Press Start 2P"';
    }
}

