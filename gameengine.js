// This game shell was happily modified from Googler Seth Ladd's "Bad Aliens" game and his Google IO talk in 2011

class GameEngine {
    constructor(options) {
        // What you will use to draw
        // Documentation: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
        this.ctx = null;

        // Context dimensions
        this.surfaceWidth = null;
        this.surfaceHeight = null;

        // Everything that will be updated and drawn each frame
        this.entities = [];
        // Entities to be added at the end of each update
        this.entitiesToAdd = [];

        // Information on the input
        this.click = false;
        this.mouse = false;
        this.left = false;
        this.right = false;
        this.up = false; 
        this.down = false;
        this.interact = false;
        this.crouch = false;

        this.dragItem = document.querySelector("#item");
        this.container = document.querySelector("#container");

        // THE KILL SWITCH
        this.running = false;
     
        // Options and the Details
        this.options = options || {
            prevent: {
                contextMenu: true,
                scrolling: true,
            },
            debugging: false,
        };
    };

    init(ctx) {
        this.ctx = ctx;
        this.surfaceWidth = this.ctx.canvas.width;
        this.surfaceHeight = this.ctx.canvas.height;
        this.startInput();
        this.timer = new Timer();
    };

    start() {
        this.running = true;
        const gameLoop = () => {
            this.loop();
            if (this.running) {
                requestAnimFrame(gameLoop, this.ctx.canvas);
            }
        };
        gameLoop();
    };

    startInput() {
        var that = this; 
        // add the listeners and detect key input
        // pass in the event to the function
        this.ctx.canvas.addEventListener("keydown", function (e) {
            switch(e.code) {
                case "KeyA":
                    that.left = true;
                    break;
                case "KeyD":
                    that.right = true;
                    break;
                case "KeyW":
                    that.up = true;
                    break;
                case "KeyS":
                    that.down = true;
                    break;
                case "ArrowLeft":
                    that.left = true;
                    break;
                case "ArrowRight":
                    that.right = true;
                    break;
                case "ArrowUp":
                    that.up = true;
                    break;
                case "ArrowDown": 
                    that.down = true; 
                    break;
                case "Space":
                    that.interact = true;
                    break;
                case "ControlLeft":
                    that.crouch = true;
                    break;
            }
        }, false);

        this.ctx.canvas.addEventListener("keyup", function (e) {
            switch(e.code) {
                case "KeyA":
                    that.left = false;
                    break;
                case "KeyD":
                    that.right = false;
                    break;
                case "KeyW":
                    that.up = false;
                    break;
                case "KeyS":
                    that.down = false;
                    break;
                case "ArrowLeft":
                    that.left = false;
                    break;
                case "ArrowRight":
                    that.right = false;
                    break;
                case "ArrowUp":
                    that.up = false;
                    break;
                case "ArrowDown":
                    that.down = false; 
                    break;
                case "Space":
                    that.interact = false;
                    break;
                case "ControlLeft":
                    that.crouch = false;
                    break;
            }
        }, false);
        const getXandY = e => ({
            x: e.clientX - this.ctx.canvas.getBoundingClientRect().left,
            y: e.clientY - this.ctx.canvas.getBoundingClientRect().top
        });

        this.ctx.canvas.addEventListener("click", e => {
            if (PARAMS.DEBUG) {
                console.log("CLICK", getXandY(e));
            }
            this.click = getXandY(e);
        });

        // From Mario Bros
        this.ctx.canvas.addEventListener("mousemove", function (e) {
            that.mouse = getXandY(e);
        }, false);

    };

    addEntity(entity) {
        this.entitiesToAdd.push(entity);
    };

    draw() {
        // Draw latest things first
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        for (var i = 0; i < this.entities.length; i++) {
            this.entities[i].draw(this.ctx);     
        }
    };

    update() {
         // Update Entities
         this.entities.forEach(entity => entity.update(this));

         // Remove dead things
         this.entities = this.entities.filter(entity => !entity.removeFromWorld);

         // Add new things
         this.entities = this.entities.concat(this.entitiesToAdd);
         this.entitiesToAdd = [];

    };

    loop() {
        this.clockTick = this.timer.tick();
        this.update();
        this.draw();
    };
};

// KV Le was here :)