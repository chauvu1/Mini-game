

class SceneManager {
    constructor(game) {
        this.game = game;
        this.game.scene = this;
        this.title = true;
        this.grass = new Grass(this.game, 0, 0);
        this.house = new House(this.game, 360, 160);
        this.pavement = new Pavement(this.game, 440, 350);
        this.fence = new Fence(this.game, 120, 150);
        this.boat = new Boat(this.game, 675, 660);
        this.bunny = new Bunny(this.game, 300, 300);
        this.waterObj = new WaterObjects(this.game, 0, 0);
        this.overlay = new Overlay(this.game, 0, 0);
        this.titlescreen = new Title(this.game, 0, 0);
        this.UI = new UI(this.game, 0,0);
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
                this.game.addEntity(new Water(this.game, 16 * 4 * i + 0, 16 * 4 * j + 0)); 
            }
        }


        this.game.addEntity(this.grass);   
        this.game.addEntity(this.house);
        this.game.addEntity(this.pavement);
        this.game.addEntity(this.fence);
        this.game.addEntity(this.boat);
        for (var i = 0; i < BACKGROUND.TREE.length; i++) {
            let tree = BACKGROUND.TREE[i];
            this.game.addEntity(new Tree(this.game, tree.X, tree.Y)); 
        }
        for (var i = 0; i < BACKGROUND.COW.length; i++) {
            let cow = BACKGROUND.COW[i];
            this.game.addEntity(new Cow(this.game, cow.X, cow.Y, cow.TYPE, cow.FACING, cow.COLOR)); 
           
        }
        for (var i = 0; i < BACKGROUND.DIRT.length; i++) {
            let dirt = BACKGROUND.DIRT[i];
                this.game.addEntity(new Dirt(this.game, dirt.X, dirt.Y, dirt.TYPE)); 
        }
       
        this.game.addEntity(this.waterObj); 

        for (var i = 0; i < BACKGROUND.FLOWER.length; i++) {
            let flower = BACKGROUND.FLOWER[i];
                this.game.addEntity(new Flower(this.game, flower.X, flower.Y, flower.TYPE, flower.COLOR)); 
        }

        for (var i = 0; i < BACKGROUND.BARN.length; i++) {
            let barn = BACKGROUND.BARN[i];
                this.game.addEntity(new Barn(this.game, barn.X, barn.Y, barn.TYPE)); 
        }

        for (var i = 0; i < BACKGROUND.FLOWERPOT.length; i++) {
            let flower_pot = BACKGROUND.FLOWERPOT[i];
                this.game.addEntity(new FlowerPot(this.game, flower_pot.X, flower_pot.Y, flower_pot.TYPE)); 
        }
        for (var i = 0; i < BACKGROUND.WATER_TRAY.length; i++) {
            let watertray = BACKGROUND.WATER_TRAY[i];
                this.game.addEntity(new WaterTray(this.game, watertray.X, watertray.Y, watertray.TYPE)); 
        }
       
        this.game.addEntity(this.bunny);
        this.game.addEntity(this.overlay);
        
       
        this.game.addEntity(this.UI);
        this.game.addEntity(this.titlescreen);
    }

    update() {
        PARAMS.DEBUG = document.getElementById("debug").checked;
    }

    draw(ctx) {
    
    }
}

var OVERLAY = {
    TREE: [{X: 700, Y:200}, {X: 120, Y:500}],
    FENCE: {X: 120, Y:150},
    HOUSE: {X: 360, Y:160}
}
var BACKGROUND = {
    FLOWERPOT: [{X:360, Y:340, TYPE: 1}, {X:384, Y:340, TYPE: 1}, {X:410, Y:340, TYPE: 1}],
    GRASS_DECO: [{X: 640,Y:570},{X:831,Y:334},{X:96, y:145}, {X:332, Y:472}],
    WATER_TRAY: [{X:509, Y:340, TYPE:2}], // {X:294, Y:200, TYPE:1}, 

    BARN : [{X: 298, Y: 270, TYPE: 1}, {X: 298, Y: 240, TYPE: 1},{X: 298, Y: 210, TYPE: 1}, {X: 106, Y: 104, TYPE: 2}, {X: 528, Y: 612, TYPE: 2}, {X: 512, Y: 622, TYPE: 2}],
    GRASS: { CENTER_PIECE:{ X: 0, Y: 0, SIZE: 32, SCALE: 2},
             MIDDLE_PIECE:{ SIZE:  16, SCALE: 4,
                            TOP:    {X: 32, Y: 48}, 
                            BOTTOM: {X: 32, Y: 80}, 
                            LEFT:   {X: 16, Y: 64},
                            RIGHT:  {X: 48, Y: 64}},
             LEFT_PIECE:  { SIZE:   16, SCALE: 4,
                            START:  {X: 16, Y: 48}, 
                            END:    {X: 16, Y: 80},
                            LOCATION_START: {X: 64, Y: 64},
                            LOCATION_END: {X: 64, Y: 640}},
             RIGHT_PIECE: { SIZE: 16, SCALE: 4,
                            START:  {X: 48, Y: 48}, 
                            END:    {X: 48, Y: 80},
                            LOCATION_START: {X: 832, Y: 64},
                            LOCATION_END: {X: 832, Y: 640}},               
             WIDTH_SIZE:  { START: 2, END: 13},
             HEIGHT_SIZE: {START: 2, END: 10}},
             BB:          {START: {X:64, Y:64, PADDING: 10},
                            WIDTH: 832, HEIGHT: 640, PADDING: 20},

    WATER:  { X: 0, Y: 0, SIZE: 16, SCALE: 4, FRAME: 4, SPEED: 0.5, FRAME_PAD: 0, REVERSE: false, LOOP: true},
    HOUSE:  { X: 60, Y: 0, WIDTH: 60, HEIGHT: 48, SCALE: 4},
    PAVEMENT: { X: 0, Y: 0, WIDTH: 16, HEIGHT: 48, SCALE: 4},
           // 0) Top Left 1) Mid piece 2) Top right
    FENCE_TYPE: [{X: 16, Y: 0}, {X: 32, Y: 48}, {X: 48, Y: 0},
            // 3) Middle piece Vertical
           {X: 0, Y: 16},
           // 4) Bottom Left 5) Bottom Right
           {X: 16, Y: 32}, {X: 48, Y: 32}],
    FENCE: {SIZE: 16, SCALE: 3},
    COW:   [{X: 200, Y: 200, TYPE: 1, FACING: 0, COLOR: 1}, {X: 150, Y: 550, TYPE: 2, FACING: 0, COLOR: 0}, {X: 170, Y: 150, TYPE:3, FACING: 0, COLOR: 3}, {X:750, Y:250, TYPE:4, FACING: 1, COLOR: 2}],
    COW_SIZE: 32, 
    TREE: [{X:700, Y: 200}, {X:120, Y:500}],
    FLOWER: [{X:262, Y:600, TYPE: 0, COLOR: 1}, {X:109, Y:396, TYPE: 1, COLOR: 2}, {X:807, Y:550, TYPE: 2, COLOR: 3}, {X:658, Y:304, TYPE: 3, COLOR: 4}, {X:770, Y:140, TYPE: 4, COLOR: 5}],
    DIRT:   [{X: 550, Y: 400, TYPE: 0}, {X: 611, Y: 400, TYPE: 1}, {X: 672, Y: 400, TYPE: 2}, 
             {X: 550, Y: 461, TYPE: 3}, {X: 611, Y: 461, TYPE: 4}, {X: 672, Y: 461, TYPE: 5}],
    
}